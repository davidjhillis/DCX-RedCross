// Command K Search Widget - Reusable search modal component
(function() {
  'use strict';

  // Modal HTML
  const modalHTML = `
  <!-- Command K Search Modal -->
  <div id="cmd-k-modal" class="hidden fixed inset-0 bg-neutral-950/50 backdrop-blur-sm z-50 p-4 md:p-8">
    <div class="max-w-3xl mx-auto mt-20">
      <!-- Search Container -->
      <div class="bg-neutral-50 dark:bg-neutral-900 rounded-xl shadow-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
        
        <!-- Search Input -->
        <div class="flex items-center gap-3 px-4 py-4 border-b border-neutral-200 dark:border-neutral-700">
          <i data-lucide="search" class="w-5 h-5 text-neutral-400"></i>
          <input 
            id="cmd-k-input"
            type="text" 
            placeholder="Search or ask a question" 
            class="flex-1 bg-transparent text-neutral-900 dark:text-white placeholder-gray-400 focus:outline-none text-lg"
            autocomplete="off"
          />
          <button id="cmd-k-close" class="p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded">
            <i data-lucide="x" class="w-5 h-5 text-neutral-400"></i>
          </button>
        </div>
        
        <!-- Filters -->
        <div class="flex items-center gap-2 px-4 py-3 border-b border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800">
          <span class="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">Filter:</span>
          <div class="flex gap-2">
            <button class="filter-btn active px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary-600 text-white">
              All Results
            </button>
            <button class="filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-neutral-50 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600">
              Documentation
            </button>
            <button class="filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-neutral-50 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600">
              AI Answers
            </button>
          </div>
        </div>
        
        <!-- Search Results -->
        <div id="cmd-k-results" class="max-h-96 overflow-y-auto">
          
          <!-- Recent Searches (when empty) -->
          <div id="recent-searches" class="p-4">
            <p class="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide mb-3">Recent Searches</p>
            <div class="space-y-1">
              <button class="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors text-left">
                <i data-lucide="clock" class="w-4 h-4 text-neutral-400"></i>
                <span class="text-sm text-neutral-700 dark:text-neutral-300">Incident Command System overview</span>
              </button>
              <button class="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors text-left">
                <i data-lucide="clock" class="w-4 h-4 text-neutral-400"></i>
                <span class="text-sm text-neutral-700 dark:text-neutral-300">Shelter operations procedures</span>
              </button>
              <button class="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors text-left">
                <i data-lucide="clock" class="w-4 h-4 text-neutral-400"></i>
                <span class="text-sm text-neutral-700 dark:text-neutral-300">CPR and first aid protocols</span>
              </button>
            </div>
          </div>
          
          <!-- Search Results (when searching) -->
          <div id="search-results" class="hidden">
            <!-- AI Answers (Top Priority) -->
            <div class="p-4 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/10 dark:to-blue-900/10">
              <p class="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide mb-3 flex items-center gap-2">
                <i data-lucide="sparkles" class="w-4 h-4 text-primary-600 dark:text-primary-400"></i>
                AI Answer
              </p>
              <div class="space-y-4">
                <div class="p-4 rounded-lg bg-white dark:bg-neutral-800 border border-primary-200 dark:border-primary-700">
                  <p class="text-base font-semibold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                    <i data-lucide="zap" class="w-5 h-5 text-primary-600 dark:text-primary-400"></i>
                    Quick Answer
                  </p>
                  <p class="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4" id="cmd-k-ai-answer-text">
                    <!-- AI answer will be dynamically generated based on search query -->
                  </p>
                  
                  <!-- Key Points -->
                  <div class="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-3 mb-3" id="cmd-k-key-points">
                    <!-- Key points will be dynamically generated -->
                  </div>
                  
                  <div class="flex flex-wrap gap-2">
                    <a href="doc-page.html" class="inline-flex items-center gap-1 text-xs text-primary-600 dark:text-primary-400 font-semibold hover:underline">
                      <i data-lucide="book-open" class="w-3 h-3"></i>
                      Read full guide
                    </a>
                    <a href="index.html#products" class="inline-flex items-center gap-1 text-xs text-primary-600 dark:text-primary-400 font-semibold hover:underline">
                      <i data-lucide="file-text" class="w-3 h-3"></i>
                      View policies
                    </a>
                    <a href="#" class="inline-flex items-center gap-1 text-xs text-primary-600 dark:text-primary-400 font-semibold hover:underline">
                      <i data-lucide="play-circle" class="w-3 h-3"></i>
                      Training videos
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Documentation Results -->
            <div class="p-4">
              <p class="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide mb-3 flex items-center justify-between">
                <span>Documentation</span>
                <span class="text-neutral-400">6 results</span>
              </p>
              <div class="space-y-1">
                <!-- Result 1 -->
                <a href="doc-page.html" class="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors group">
                  <i data-lucide="file-text" class="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5"></i>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Incident Command System (ICS) Overview</p>
                    <p class="text-xs text-neutral-600 dark:text-neutral-400 mt-1 line-clamp-2">Comprehensive guide to the Incident Command System structure, roles, and implementation in disaster response operations.</p>
                    <div class="flex items-center gap-3 mt-2">
                      <span class="text-xs text-neutral-500 dark:text-neutral-400">Emergency Response</span>
                      <span class="text-xs text-neutral-400">•</span>
                      <span class="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
                    </div>
                  </div>
                  <span class="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded font-semibold flex-shrink-0">Policy</span>
                </a>
                
                <!-- Result 2 -->
                <a href="#" class="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors group">
                  <i data-lucide="play-circle" class="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5"></i>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Shelter Operations Manual</p>
                    <p class="text-xs text-neutral-600 dark:text-neutral-400 mt-1 line-clamp-2">Complete operational guidelines for emergency shelter setup, management, and safety protocols during disasters.</p>
                    <div class="flex items-center gap-3 mt-2">
                      <span class="text-xs text-neutral-500 dark:text-neutral-400">Emergency Response</span>
                      <span class="text-xs text-neutral-400">•</span>
                      <span class="text-xs text-neutral-500 dark:text-neutral-400">15 min read</span>
                    </div>
                  </div>
                  <span class="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded font-semibold flex-shrink-0">Manual</span>
                </a>
                
                <!-- Result 3 -->
                <a href="#" class="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors group">
                  <i data-lucide="play-circle" class="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"></i>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">CPR Demonstration Video Series</p>
                    <p class="text-xs text-neutral-600 dark:text-neutral-400 mt-1 line-clamp-2">Step-by-step video demonstrations of proper CPR technique for adults, children, and infants.</p>
                    <div class="flex items-center gap-3 mt-2">
                      <span class="text-xs text-neutral-500 dark:text-neutral-400">First Aid</span>
                      <span class="text-xs text-neutral-400">•</span>
                      <span class="text-xs text-neutral-500 dark:text-neutral-400">Video</span>
                    </div>
                  </div>
                  <span class="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded font-semibold flex-shrink-0">Video</span>
                </a>
                
                <!-- Result 4 -->
                <a href="#" class="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors group">
                  <i data-lucide="file-text" class="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5"></i>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Mass Casualty Incident Procedures</p>
                    <p class="text-xs text-neutral-600 dark:text-neutral-400 mt-1 line-clamp-2">Step-by-step protocols for managing mass casualty incidents including resource allocation and triage procedures.</p>
                    <div class="flex items-center gap-3 mt-2">
                      <span class="text-xs text-neutral-500 dark:text-neutral-400">Emergency Response</span>
                      <span class="text-xs text-neutral-400">•</span>
                      <span class="text-xs text-neutral-500 dark:text-neutral-400">8 min read</span>
                    </div>
                  </div>
                  <span class="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded font-semibold flex-shrink-0">Procedure</span>
                </a>
                
                <!-- Result 5 -->
                <a href="#" class="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors group">
                  <i data-lucide="shield" class="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5"></i>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Hazmat Response Procedures</p>
                    <p class="text-xs text-neutral-600 dark:text-neutral-400 mt-1 line-clamp-2">Safety procedures and proper techniques for responding to hazardous material incidents during emergency operations.</p>
                    <div class="flex items-center gap-3 mt-2">
                      <span class="text-xs text-neutral-500 dark:text-neutral-400">Safety Protocols</span>
                      <span class="text-xs text-neutral-400">•</span>
                      <span class="text-xs text-neutral-500 dark:text-neutral-400">12 min read</span>
                    </div>
                  </div>
                  <span class="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded font-semibold flex-shrink-0">Safety</span>
                </a>
                
                <!-- View all results -->
                <a href="search-results.html" id="view-all-results-link" class="block w-full text-center py-3 text-sm text-primary-600 dark:text-primary-400 font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors">
                  View all 6 results →
                </a>
              </div>
            </div>
            
            <!-- Related Topics -->
            <div class="p-4 border-t border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800">
              <p class="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide mb-3">Related Topics</p>
              <div class="flex flex-wrap gap-2">
                <a href="#" class="px-3 py-1.5 bg-neutral-50 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-full text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:border-primary-500 dark:hover:border-primary-400 transition-colors">
                  Emergency Response
                </a>
                <a href="#" class="px-3 py-1.5 bg-neutral-50 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-full text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:border-primary-500 dark:hover:border-primary-400 transition-colors">
                  First Aid
                </a>
                <a href="#" class="px-3 py-1.5 bg-neutral-50 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-full text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:border-primary-500 dark:hover:border-primary-400 transition-colors">
                  Shelter Operations
                </a>
                <a href="#" class="px-3 py-1.5 bg-neutral-50 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-full text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:border-primary-500 dark:hover:border-primary-400 transition-colors">
                  Safety Protocols
                </a>
              </div>
            </div>
          </div>
          
        </div>
        
        <!-- Footer hint -->
        <div class="flex items-center justify-between px-4 py-3 bg-white dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700">
          <div class="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400">
            <span class="flex items-center gap-1.5">
              <kbd class="px-1.5 py-0.5 bg-neutral-50 dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 rounded text-xs">↑↓</kbd>
              Navigate
            </span>
            <span class="flex items-center gap-1.5">
              <kbd class="px-1.5 py-0.5 bg-neutral-50 dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 rounded text-xs">↵</kbd>
              Select
            </span>
            <span class="flex items-center gap-1.5">
              <kbd class="px-1.5 py-0.5 bg-neutral-50 dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 rounded text-xs">esc</kbd>
              Close
            </span>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  `;

  // Inject HTML into page
  document.addEventListener('DOMContentLoaded', function() {
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Initialize after HTML is injected
    initCommandK();
  });

  function initCommandK() {
    const cmdKModal = document.getElementById('cmd-k-modal');
    const cmdKTrigger = document.getElementById('cmd-k-trigger');
    const cmdKInput = document.getElementById('cmd-k-input');
    const cmdKClose = document.getElementById('cmd-k-close');
    const recentSearches = document.getElementById('recent-searches');
    const searchResults = document.getElementById('search-results');
    
    // Keyboard navigation state
    let selectedResultIndex = -1;
    const resultSelector = '#cmd-k-results a, #cmd-k-results button';
    
    function updateSelectedResult() {
      const results = document.querySelectorAll(resultSelector);
      results.forEach((result, index) => {
        if (index === selectedResultIndex) {
          result.classList.add('bg-primary-50', 'dark:bg-primary-900/30', 'ring-2', 'ring-primary-500');
          result.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        } else {
          result.classList.remove('bg-primary-50', 'dark:bg-primary-900/30', 'ring-2', 'ring-primary-500');
        }
      });
    }
    
    function getClickableResults() {
      // Get all clickable elements: links, buttons, and the "View all results" link
      return Array.from(document.querySelectorAll(resultSelector));
    }
    
    // Open modal
    window.openCmdK = function(query = '') {
      cmdKModal?.classList.remove('hidden');
      selectedResultIndex = -1;
      if (query && cmdKInput) {
        cmdKInput.value = query;
        // Trigger input event to show results
        cmdKInput.dispatchEvent(new Event('input'));
      }
      setTimeout(() => {
        cmdKInput?.focus();
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }
        // Update results after icons are created
        updateSelectedResult();
      }, 100);
    };
    
    // Close modal
    function closeCmdK() {
      cmdKModal?.classList.add('hidden');
      if (cmdKInput) cmdKInput.value = '';
      recentSearches?.classList.remove('hidden');
      searchResults?.classList.add('hidden');
      selectedResultIndex = -1;
      updateSelectedResult();
    }
    
    // Keyboard shortcut: Cmd/Ctrl + K
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        window.openCmdK();
      }
      
      // ESC to close
      if (e.key === 'Escape' && !cmdKModal?.classList.contains('hidden')) {
        closeCmdK();
      }
    });
    
    // Click trigger button (if exists on page)
    cmdKTrigger?.addEventListener('click', window.openCmdK);
    
    // Also support clicking any hero search input
    const heroSearchInputs = document.querySelectorAll('input[placeholder*="Search"]');
    heroSearchInputs.forEach(input => {
      input.addEventListener('click', (e) => {
        e.preventDefault();
        window.openCmdK();
      });
    });
    
    // Click close button
    cmdKClose?.addEventListener('click', closeCmdK);
    
    // Click outside modal
    cmdKModal?.addEventListener('click', (e) => {
      if (e.target === cmdKModal) {
        closeCmdK();
      }
    });
    
    // Search input - show results when typing
    cmdKInput?.addEventListener('input', (e) => {
      const query = e.target.value.trim();
      if (query.length > 0) {
        recentSearches?.classList.add('hidden');
        searchResults?.classList.remove('hidden');
        // Update AI answer based on query
        updateAIAnswer(query);
        // Update "View all results" link with query parameter
        const viewAllLink = document.getElementById('view-all-results-link');
        if (viewAllLink) {
          viewAllLink.href = `search-results.html?q=${encodeURIComponent(query)}`;
        }
      } else {
        recentSearches?.classList.remove('hidden');
        searchResults?.classList.add('hidden');
        // Reset "View all results" link
        const viewAllLink = document.getElementById('view-all-results-link');
        if (viewAllLink) {
          viewAllLink.href = 'search-results.html';
        }
      }
      // Reset selection when search changes
      selectedResultIndex = -1;
      // Small delay to ensure DOM is updated before getting results
      setTimeout(() => {
        updateSelectedResult();
      }, 10);
    });
    
    // Generate context-aware AI answer
    function updateAIAnswer(query) {
      const q = query.toLowerCase();
      const answerText = document.getElementById('cmd-k-ai-answer-text');
      const keyPoints = document.getElementById('cmd-k-key-points');
      
      if (!answerText || !keyPoints) return;
      
      let answer = '';
      let points = [];
      
      // ICS questions
      if (q.includes('ics') || q.includes('incident command')) {
        answer = 'The Incident Command System (ICS) is a standardized management system for coordinating emergency response. The ICS structure consists of five major functional areas: Command, Operations, Planning, Logistics, and Finance/Administration.';
        points = [
          'Five major functional areas: Command, Operations, Planning, Logistics, Finance/Administration',
          'Command Staff includes Incident Commander, PIO, Safety Officer, and Liaison Officer',
          'Modular organization that expands or contracts based on incident needs',
          'Standardized terminology and procedures across all agencies'
        ];
      }
      // Emergency Response questions
      else if (q.includes('emergency') || q.includes('disaster') || q.includes('response')) {
        answer = 'Emergency response procedures follow the Incident Command System framework. When an incident occurs, first responders assume command, assess the situation, establish ICS structure, and coordinate resource deployment.';
        points = [
          'Initial assessment and command establishment',
          'Resource coordination and deployment',
          'Incident Action Plan development',
          'Multi-agency coordination and communication'
        ];
      }
      // Shelter questions
      else if (q.includes('shelter') || q.includes('evacuation')) {
        answer = 'Shelter operations involve establishing and managing emergency shelters during disasters. This includes site selection, setup procedures, client registration, providing basic needs, and maintaining safety and security.';
        points = [
          'Site selection and facility setup',
          'Client registration and intake procedures',
          'Providing food, water, and medical care',
          'Safety, security, and capacity management'
        ];
      }
      // First Aid questions
      else if (q.includes('first aid') || q.includes('cpr') || q.includes('medical')) {
        answer = 'First aid procedures include CPR, basic life support, wound care, and triage protocols. Red Cross follows standard medical response procedures for assessing scenes, providing appropriate care, and coordinating with medical professionals.';
        points = [
          'CPR procedures for adults, children, and infants',
          'Triage protocols for mass casualty incidents',
          'Basic life support and wound care',
          'Coordination with emergency medical services'
        ];
      }
      // Resource Management questions
      else if (q.includes('resource') || q.includes('personnel') || q.includes('equipment')) {
        answer = 'Resource management in ICS includes identifying requirements, ordering resources, tracking status, and demobilizing when no longer needed. Resources are categorized by type and kind, with status tracked as Available, Assigned, Out of Service, or Demobilized.';
        points = [
          'Resource identification and ordering',
          'Status tracking and deployment',
          'Categorization by type and capability',
          'Demobilization procedures'
        ];
      }
      // Default
      else {
        answer = 'I can help you find information about Red Cross policy documentation, Incident Command System procedures, emergency response protocols, shelter operations, first aid procedures, and resource management.';
        points = [
          'Incident Command System (ICS) structure and procedures',
          'Emergency response and disaster management',
          'Shelter operations and client services',
          'First aid, CPR, and medical response protocols'
        ];
      }
      
      answerText.textContent = answer;
      
      if (points.length > 0) {
        keyPoints.innerHTML = `
          <p class="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Key Topics:</p>
          <ul class="text-xs text-neutral-600 dark:text-neutral-400 space-y-1 ml-4 list-disc">
            ${points.map(point => `<li>${point}</li>`).join('')}
          </ul>
        `;
      }
    }
    
    // Keyboard navigation in input
    cmdKInput?.addEventListener('keydown', (e) => {
      const results = getClickableResults();
      
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (results.length > 0) {
          selectedResultIndex = selectedResultIndex < results.length - 1 ? selectedResultIndex + 1 : 0;
          updateSelectedResult();
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (results.length > 0) {
          selectedResultIndex = selectedResultIndex > 0 ? selectedResultIndex - 1 : results.length - 1;
          updateSelectedResult();
        }
      } else if (e.key === 'Enter') {
        if (selectedResultIndex >= 0 && selectedResultIndex < results.length) {
          // Navigate to selected result
          e.preventDefault();
          const selectedResult = results[selectedResultIndex];
          
          // Check if it's a link or button
          if (selectedResult.tagName === 'A') {
            // Navigate to the link
            window.location.href = selectedResult.href;
          } else if (selectedResult.tagName === 'BUTTON') {
            // Click the button
            selectedResult.click();
          }
        } else {
          // No selection - navigate to search results page with query
          e.preventDefault();
          const query = cmdKInput.value.trim();
          if (query) {
            window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
          } else {
            // If no query, go to search results page
            window.location.href = 'search-results.html';
          }
        }
      }
    });
    
    // Update results when search changes to reset navigation
    const originalUpdateAIAnswer = updateAIAnswer;
    if (typeof updateAIAnswer === 'function') {
      // Reset selection when results update
      cmdKInput?.addEventListener('input', () => {
        selectedResultIndex = -1;
        updateSelectedResult();
      });
    }
    
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => {
          b.classList.remove('bg-primary-600', 'text-white');
          b.classList.add('bg-neutral-50', 'dark:bg-neutral-700', 'text-neutral-700', 'dark:text-neutral-300', 'border', 'border-neutral-300', 'dark:border-neutral-600');
        });
        
        this.classList.remove('bg-neutral-50', 'dark:bg-neutral-700', 'text-neutral-700', 'dark:text-neutral-300', 'border', 'border-neutral-300', 'dark:border-neutral-600');
        this.classList.add('bg-primary-600', 'text-white');
        
        // Reset selection when filter changes
        selectedResultIndex = -1;
        updateSelectedResult();
      });
    });
  }
})();

