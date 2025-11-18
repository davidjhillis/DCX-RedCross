# Text Selection AI - Manual Testing Guide

## 🧪 How to Test Text Selection Tooltip

**URL**: http://localhost:8000/doc-page.html

The Grammarly-style tooltip should work for **any text** in the article.

---

## ✅ **Test Coverage - Try All These**

### Test 1: Select from Paragraph
1. Go to the article
2. **Highlight this text**: "Sit commodi iste iure molestias qui amet voluptatem"
3. Tooltip should appear below your selection
4. Should show:
   - Selected text in purple box
   - AI explanation
   - 3 action buttons

### Test 2: Select from H2 Heading
1. **Highlight the heading**: "Quick start"
2. Tooltip should appear below
3. Same format as above

### Test 3: Select from H3 Heading  
1. **Highlight**: "Installing dependencies"
2. Tooltip should appear

### Test 4: Select Across Multiple Words
1. **Highlight**: "cache strategy that anticipates"
2. Tooltip should appear

### Test 5: Select from Different Paragraphs
1. Scroll down
2. **Highlight text** from "Basic usage" section
3. Tooltip should appear
4. Try "Adding middleware" section
5. Try "Getting help" section

### Test 6: Select from Code Comments
1. Go to code block
2. Try selecting the comment: "// cache-advance.config.js"
3. Tooltip should appear (if text is within article)

---

## ❌ **What Should NOT Trigger Tooltip**

### Should NOT show for:
- Text in the **sidebar navigation**
- Text in the **header**
- Text in the **footer**
- Text in the **"On this page"** sidebar
- **Very short selections** (less than 5 characters)
- **Very long selections** (more than 200 characters)

---

## 🎯 **Expected Behavior**

### When you highlight text:
1. **Wait 200ms** (slight delay feels natural)
2. Tooltip **appears below** your selection
3. Tooltip shows:
   - ✨ "AI Explain" header (purple gradient)
   - Your selected text (purple highlight box)
   - Quick explanation (1-2 sentences)
   - 3 pill buttons: Learn more, See example, Related docs
   - Arrow pointing up to your text
4. Tooltip **centers** under your selection
5. Tooltip **stays on screen** (doesn't go off edges)

### When you dismiss:
- Click **X button** → closes
- Click **anywhere outside** → closes
- Select **different text** → shows new tooltip

---

## 🐛 **If It's Not Working**

### Debugging Steps:

1. **Open browser console** (F12)
2. Select some text in the article
3. Check console for any errors
4. Verify the tooltip element exists:
   ```javascript
   document.getElementById('selection-tooltip')
   ```
5. Check if it has 'hidden' class:
   ```javascript
   document.getElementById('selection-tooltip').classList
   ```

### Common Issues:

**Issue**: Tooltip doesn't appear
- **Check**: Are you selecting in the article content?
- **Check**: Is selection 5-200 characters?
- **Check**: Did you wait 200ms after selecting?

**Issue**: Tooltip appears in wrong position
- **Check**: Window width (should auto-adjust for edges)
- **Check**: Scroll position

**Issue**: Tooltip doesn't close
- **Check**: Click outside the tooltip
- **Check**: Click the X button

---

## 📐 **Technical Details**

### Selection Detection:
```javascript
- Listens for: 'mouseup' event
- Delay: 200ms (feels natural)
- Min length: 5 characters
- Max length: 200 characters
- Scope: <article> element only
- Auto-hides: On outside click
```

### Positioning:
```javascript
- Below selection: rect.bottom + 10px
- Centered: rect.left + (width/2) - (tooltipWidth/2)
- Screen edges: Keeps within viewport
- Scroll aware: Uses window.scrollY
```

### Styling:
```javascript
- Width: max-w-sm (350px)
- Shadow: 2xl (dramatic)
- Arrow: Gradient diamond pointing up
- Z-index: 50 (above content)
- Scrollable: max-h-72 (content overflow)
```

---

## ✅ **Expected Test Results**

After testing all scenarios above:

- ✅ Works for paragraphs
- ✅ Works for headings (H2, H3)
- ✅ Works for any article text
- ✅ Centers below selection
- ✅ Stays on screen (no cutoff)
- ✅ Shows selected text
- ✅ Shows explanation
- ✅ Shows 3 action buttons
- ✅ Arrow points to text
- ✅ Closes on outside click
- ✅ Closes on X button
- ✅ Does NOT show for nav/footer
- ✅ Does NOT show for short text

---

## 🎨 **Visual Checklist**

When tooltip appears, verify:

**Header**:
- ✅ Purple-to-pink gradient background
- ✅ "✨ AI Explain" text (white)
- ✅ X button (white, small)

**Content**:
- ✅ Selected text in purple box (italic)
- ✅ Explanation text (gray, 14px, readable)
- ✅ 3 pill buttons at bottom
- ✅ Clean white/dark background

**Arrow**:
- ✅ Purple gradient diamond
- ✅ Points up at center
- ✅ Sits at top of tooltip

**Dark Mode**:
- ✅ Toggle to dark mode
- ✅ Highlight text
- ✅ Tooltip should have dark background
- ✅ All text readable

---

## 🚀 **Test Now!**

**Refresh**: http://localhost:8000/doc-page.html

1. **Highlight any text** in the article
2. Tooltip should appear immediately below
3. Try different sections
4. Verify it works everywhere in the article

**The tooltip should feel as smooth as Grammarly!** ✨

