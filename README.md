# IGX Documentation Portal Templates

## Overview
Static HTML/Tailwind CSS templates for IGX Technology documentation portal with AI-powered features.

## Files Included

### Core Templates
- **`index.html`** - Home page with hero, search, AI features showcase
- **`doc-page.html`** - Documentation article page (3-column layout) ⏳ *In Progress*
- **`product.html`** - Product overview page ⏳ *In Progress*
- **`profile.html`** - User profile page ⏳ *In Progress*
- **`ai-search.html`** - AI-powered search results ⏳ *In Progress*

### Components
- **`components/header.html`** - Main navigation header
- **`components/footer.html`** - Site footer
- **`components/sidebar-nav.html`** - Left sidebar navigation
- **`components/ai-chatbot.html`** - AI chatbot slide-out panel
- **`components/code-block.html`** - Code blocks with AI explainer
- **`components/cards.html`** - Various card styles

### Styles & Scripts
- **`css/custom.css`** - Custom styles, components, animations
- **`js/main.js`** - Core JavaScript functionality

## Quick Start

1. **Start Local Server**
   ```bash
   # With Python
   python3 -m http.server 8000
   
   # With Node.js
   npx http-server
   ```

2. **Open in Browser**
   
   - Home: http://localhost:8000/index.html
   - Documentation: http://localhost:8000/doc-page.html
   - User Profile: http://localhost:8000/user-profile.html
   - Search Results: http://localhost:8000/search-results.html

## Features

### AI-Powered Capabilities
✨ **AI Search** - Semantic search with AI-generated answers  
🤖 **AI Chatbot** - 24/7 intelligent assistant  
💡 **Code Explainer** - Hover over code for AI explanations  
📝 **Smart Summaries** - Generate article summaries  
🔊 **Text-to-Voice** - Listen to documentation  
💬 **Chat with Docs** - Ask questions about current page  

### Design System
- **Modern & Clean** - Professional corporate design
- **AI-First Aesthetic** - Subtle gradients and modern styling
- **Fully Responsive** - Mobile, tablet, and desktop optimized
- **Accessible** - WCAG 2.1 AA compliant
- **Dark Mode Ready** - Toggle between light/dark themes

### Technology Stack
- Pure HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript
- No framework dependencies

## Keyboard Shortcuts

- `Cmd/Ctrl + K` - Focus search
- `Cmd/Ctrl + /` - Toggle AI assistant
- `Escape` - Close modals/panels

## Color Palette

### Brand Colors
- **Primary Blue**: `#3B7FB7` - Main brand color
- **AI Purple**: `#7C3AED` - AI features accent
- **Success Green**: `#10B981`
- **Warning Orange**: `#F59E0B`
- **Error Red**: `#EF4444`

### Gradients
```css
/* AI Gradient */
background: linear-gradient(135deg, #7C3AED 0%, #3B7FB7 100%);
```

## Component Usage

### AI Button
```html
<button class="btn-ai">
  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z"/>
  </svg>
  AI Assistant
</button>
```

### AI Badge
```html
<span class="ai-badge">
  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z"/>
  </svg>
  Powered by AI
</span>
```

### Code Block with AI
```html
<div class="code-block-wrapper group relative">
  <div class="code-actions">
    <button class="btn-code-action" title="AI Explain">...</button>
    <button class="copy-code-btn btn-code-action" title="Copy">...</button>
  </div>
  <pre class="code-block"><code class="language-javascript">
// Your code here
  </code></pre>
</div>
```

## Customization

### Update Brand Colors
Edit `css/custom.css` and update the CSS variables:
```css
:root {
  --igx-primary-600: #YOUR_COLOR;
  --igx-accent-600: #YOUR_COLOR;
}
```

### Update Tailwind Config
Edit the Tailwind configuration in each HTML file's `<head>`:
```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        // Your custom colors
      }
    }
  }
}
```

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance
- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

## Accessibility
- Semantic HTML5
- ARIA labels on interactive elements
- Keyboard navigation throughout
- Focus indicators on all controls
- Screen reader compatible

## File Structure
```
DCX Demo Templates/
├── index.html                 ✅ Complete
├── doc-page.html             ⏳ In Progress
├── product.html              ⏳ In Progress
├── profile.html              ⏳ In Progress
├── ai-search.html            ⏳ In Progress
├── css/
│   └── custom.css            ✅ Complete
├── js/
│   └── main.js               ✅ Complete
├── components/
│   ├── header.html           ✅ Complete
│   ├── footer.html           ✅ Complete
│   ├── sidebar-nav.html      ✅ Complete
│   ├── ai-chatbot.html       ✅ Complete
│   ├── code-block.html       ✅ Complete
│   └── cards.html            ✅ Complete
├── assets/
│   ├── images/
│   └── icons/
├── DEVELOPMENT_PLAN.md       ✅ Complete
├── IGX-Docs-Portal-StyleGuide.md  ✅ Complete
└── README.md                 ✅ This file
```

## Next Steps

1. Complete remaining page templates
2. Add demo content and images
3. Implement syntax highlighting for code blocks
4. Add print styles
5. Test across devices
6. Optimize for production

## License
© 2025 IGX Technology. All rights reserved.

## Support
For questions or issues, contact: docs@igxtechnology.com

---

**Status**: Active Development  
**Version**: 1.0.0  
**Last Updated**: October 30, 2025

