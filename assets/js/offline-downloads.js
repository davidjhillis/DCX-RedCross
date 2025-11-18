// Offline Downloads Manager
// Handles downloading documents for offline access, version syncing, and storage management

(function() {
  'use strict';

  const DB_NAME = 'RedCrossTrainingLibrary';
  const DB_VERSION = 1;
  const STORE_NAME = 'documents';
  const METADATA_STORE = 'metadata';
  
  let db = null;
  const MAX_STORAGE = 282889 * 1024 * 1024; // 282,889 MB in bytes

  // Initialize IndexedDB
  function initDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        db = request.result;
        resolve(db);
      };

      request.onupgradeneeded = (event) => {
        const database = event.target.result;

        // Documents store
        if (!database.objectStoreNames.contains(STORE_NAME)) {
          const docStore = database.createObjectStore(STORE_NAME, { keyPath: 'id' });
          docStore.createIndex('title', 'title', { unique: false });
          docStore.createIndex('version', 'version', { unique: false });
          docStore.createIndex('downloadedAt', 'downloadedAt', { unique: false });
        }

        // Metadata store
        if (!database.objectStoreNames.contains(METADATA_STORE)) {
          const metaStore = database.createObjectStore(METADATA_STORE, { keyPath: 'key' });
        }
      };
    });
  }

  // Get storage usage
  async function getStorageUsage() {
    if (!db) await initDB();
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.getAll();

      request.onsuccess = () => {
        const documents = request.result;
        let totalSize = 0;
        documents.forEach(doc => {
          if (doc.content) {
            totalSize += new Blob([doc.content]).size;
          }
          if (doc.size) {
            totalSize += doc.size;
          }
        });
        resolve({
          used: totalSize,
          total: MAX_STORAGE,
          percentage: (totalSize / MAX_STORAGE) * 100,
          count: documents.length
        });
      };

      request.onerror = () => reject(request.error);
    });
  }

  // Get all downloaded documents
  async function getDownloadedDocuments() {
    if (!db) await initDB();
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.getAll();

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  // Download a document
  async function downloadDocument(documentData) {
    if (!db) await initDB();

    try {
      // Fetch the document content
      const response = await fetch(documentData.url || documentData.downloadUrl);
      if (!response.ok) throw new Error('Failed to fetch document');
      
      const blob = await response.blob();
      const arrayBuffer = await blob.arrayBuffer();

      const document = {
        id: documentData.id || `doc-${Date.now()}-${Math.random()}`,
        title: documentData.title,
        url: documentData.url || documentData.downloadUrl,
        version: documentData.version || '1.0.0',
        lastUpdated: documentData.lastUpdated || new Date().toISOString(),
        downloadedAt: new Date().toISOString(),
        size: blob.size,
        type: blob.type || 'application/pdf',
        content: arrayBuffer,
        metadata: documentData.metadata || {}
      };

      return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.put(document);

        request.onsuccess = () => {
          updateStorageDisplay();
          resolve(document);
        };
        request.onerror = () => reject(request.error);
      });
    } catch (error) {
      console.error('Error downloading document:', error);
      throw error;
    }
  }

  // Check for updates
  async function checkForUpdates() {
    if (!db) await initDB();
    if (!navigator.onLine) return [];
    
    const downloadedDocs = await getDownloadedDocuments();
    const updates = [];

    // In a real implementation, this would fetch from an API endpoint that provides version info
    // For now, we'll check document metadata and simulate version checking
    for (const doc of downloadedDocs) {
      try {
        // Check if document has a newer version available
        // This would typically be an API call to check document versions
        const response = await fetch(doc.url, { method: 'HEAD' });
        const lastModified = response.headers.get('last-modified');
        const etag = response.headers.get('etag');
        
        // Compare with stored version
        if (lastModified && new Date(lastModified) > new Date(doc.lastUpdated)) {
          // Extract version from etag or increment version
          let newVersion = doc.version;
          if (etag) {
            // If etag contains version info, use it
            const versionMatch = etag.match(/v?(\d+\.\d+\.\d+)/);
            if (versionMatch) {
              newVersion = versionMatch[1];
            } else {
              // Increment patch version
              const parts = doc.version.split('.');
              if (parts.length === 3) {
                parts[2] = String(parseInt(parts[2]) + 1);
                newVersion = parts.join('.');
              }
            }
          }
          
          updates.push({
            id: doc.id,
            title: doc.title,
            currentVersion: doc.version,
            newVersion: newVersion,
            lastUpdated: lastModified
          });
        }
      } catch (error) {
        // If offline or error, skip
        console.log(`Could not check for updates for ${doc.title}:`, error);
      }
    }

    return updates;
  }

  // Update a document
  async function updateDocument(documentId, newVersion = null) {
    if (!db) await initDB();

    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const getRequest = store.get(documentId);

    return new Promise((resolve, reject) => {
      getRequest.onsuccess = async () => {
        const doc = getRequest.result;
        if (!doc) {
          reject(new Error('Document not found'));
          return;
        }

        try {
          // Determine new version
          let versionToUse = newVersion;
          if (!versionToUse) {
            // Increment patch version
            const parts = doc.version.split('.');
            if (parts.length === 3) {
              parts[2] = String(parseInt(parts[2]) + 1);
              versionToUse = parts.join('.');
            } else {
              versionToUse = doc.version + '.1';
            }
          }

          const updatedDoc = await downloadDocument({
            id: doc.id,
            title: doc.title,
            url: doc.url,
            version: versionToUse,
            lastUpdated: new Date().toISOString()
          });
          resolve(updatedDoc);
        } catch (error) {
          reject(error);
        }
      };

      getRequest.onerror = () => reject(getRequest.error);
    });
  }

  // Delete a downloaded document
  async function deleteDocument(documentId) {
    if (!db) await initDB();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.delete(documentId);

      request.onsuccess = () => {
        updateStorageDisplay();
        resolve();
      };
      request.onerror = () => reject(request.error);
    });
  }

  // Clear all downloaded documents
  async function clearAllDownloads() {
    if (!db) await initDB();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.clear();

      request.onsuccess = () => {
        updateStorageDisplay();
        resolve();
      };
      request.onerror = () => reject(request.error);
    });
  }

  // Get document content for offline viewing
  async function getDocumentContent(documentId) {
    if (!db) await initDB();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(documentId);

      request.onsuccess = () => {
        const doc = request.result;
        if (doc && doc.content) {
          resolve(new Blob([doc.content], { type: doc.type || 'application/pdf' }));
        } else {
          reject(new Error('Document not found or has no content'));
        }
      };

      request.onerror = () => reject(request.error);
    });
  }

  // Format bytes to human readable
  function formatBytes(bytes) {
    if (bytes === 0) return '0 MB';
    const mb = bytes / (1024 * 1024);
    return mb.toFixed(1) + ' MB';
  }

  // Update storage display in modal
  async function updateStorageDisplay() {
    const usage = await getStorageUsage();
    const storageUsedEl = document.getElementById('storage-used');
    const storageProgressEl = document.getElementById('storage-progress');
    const storagePercentEl = document.getElementById('storage-percent');
    const storageBarEl = document.getElementById('storage-progress-bar');

    if (storageUsedEl) {
      storageUsedEl.textContent = `${formatBytes(usage.used)} / ${formatBytes(usage.total)}`;
    }

    if (storagePercentEl) {
      storagePercentEl.textContent = `${usage.percentage.toFixed(1)}% of available storage used`;
    }

    if (storageBarEl) {
      storageBarEl.style.width = `${Math.min(usage.percentage, 100)}%`;
    }

    if (storageProgressEl) {
      storageProgressEl.setAttribute('aria-valuenow', usage.percentage);
      storageProgressEl.setAttribute('aria-valuemax', 100);
    }
  }

  // Check online/offline status
  function updateOnlineStatus() {
    const onlineStatusEl = document.getElementById('online-status');
    const onlineBadgeEl = document.getElementById('online-badge');
    const isOnline = navigator.onLine;

    if (onlineStatusEl) {
      onlineStatusEl.textContent = isOnline ? 'Online' : 'Offline';
    }

    if (onlineBadgeEl) {
      if (isOnline) {
        onlineBadgeEl.classList.remove('bg-red-500');
        onlineBadgeEl.classList.add('bg-green-500');
        onlineBadgeEl.textContent = 'Connected';
      } else {
        onlineBadgeEl.classList.remove('bg-green-500');
        onlineBadgeEl.classList.add('bg-red-500');
        onlineBadgeEl.textContent = 'Offline';
      }
    }
  }

  // Initialize offline downloads system
  async function init() {
    try {
      await initDB();
      updateOnlineStatus();
      await updateStorageDisplay();

      // Listen for online/offline events
      window.addEventListener('online', updateOnlineStatus);
      window.addEventListener('offline', updateOnlineStatus);

      // Auto-check for updates when online
      if (navigator.onLine) {
        setTimeout(async () => {
          const updates = await checkForUpdates();
          if (updates.length > 0) {
            // Show notification about available updates
            console.log(`${updates.length} document(s) have updates available`);
          }
        }, 5000);
      }
    } catch (error) {
      console.error('Error initializing offline downloads:', error);
    }
  }

  // Public API
  window.OfflineDownloads = {
    init,
    downloadDocument,
    getDownloadedDocuments,
    getDocumentContent,
    deleteDocument,
    clearAllDownloads,
    checkForUpdates,
    updateDocument,
    getStorageUsage,
    updateStorageDisplay,
    updateOnlineStatus,
    formatBytes
  };

  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

