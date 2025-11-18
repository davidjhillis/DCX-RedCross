# Documentation Portal - Customer Experience Research

## 🎯 Core Question
**How do enterprise customers actually find and use technical documentation?**

---

## 👥 User Personas & Their Needs

### 1. **Developer / Technical User**
**Goal**: Find specific code examples, API references, troubleshooting

**Behavior**:
- Searches with specific technical terms
- Wants code snippets they can copy
- Needs quick answers (under 30 seconds)
- Skips marketing copy
- Uses keyboard navigation (Cmd+K, Tab)

**Pain Points**:
- Outdated examples
- Too much marketing fluff
- Can't find error message solutions
- Examples don't work as-is

**What They Need**:
- ✓ Powerful search with filters
- ✓ Table of contents on every page
- ✓ Copy-paste ready code examples
- ✓ Version selector
- ✓ Direct links to API methods
- ✓ Error code index

---

### 2. **Product Manager / Business User**
**Goal**: Understand features, capabilities, pricing tiers

**Behavior**:
- Browses by product
- Wants high-level overviews first
- Needs comparison tables
- Looks for "Getting Started" guides
- Watches video tutorials

**Pain Points**:
- Too technical too fast
- Can't find feature lists
- Unclear what product does
- No clear next steps

**What They Need**:
- ✓ Product overview pages
- ✓ Feature comparison tables
- ✓ Use case examples
- ✓ Getting started guides
- ✓ Video tutorials
- ✓ Clear CTAs (Try, Demo, Contact)

---

### 3. **Administrator / IT Operations**
**Goal**: Configure, troubleshoot, maintain systems

**Behavior**:
- Searches for specific error messages
- Needs step-by-step configuration guides
- Wants security documentation
- Looks for best practices
- Needs integration guides

**Pain Points**:
- Can't find configuration options
- Unclear troubleshooting steps
- Missing security documentation
- Integration docs scattered

**What They Need**:
- ✓ Configuration reference
- ✓ Troubleshooting guides by error
- ✓ Security & compliance docs
- ✓ Integration guides
- ✓ Admin best practices
- ✓ System requirements

---

## 🔍 Information Architecture

### Primary Navigation Structure

```
Documentation Home
│
├── 📦 Products (Browse by product)
│   ├── Ingeniux CMS
│   │   ├── Getting Started
│   │   ├── User Guide
│   │   ├── Admin Guide
│   │   ├── API Reference
│   │   └── Release Notes
│   │
│   ├── Discover CX
│   │   ├── Overview
│   │   ├── Search Configuration
│   │   ├── Analytics
│   │   └── Integrations
│   │
│   ├── AI Assists
│   │   ├── Setup
│   │   ├── Search Answers
│   │   ├── TL;DR
│   │   ├── Code Explainer
│   │   └── Contextual Chat
│   │
│   └── InSite Search
│       ├── Configuration
│       ├── Best Practices
│       └── Troubleshooting
│
├── 🎯 By Task (Browse by what you want to do)
│   ├── Installation & Setup
│   ├── Configuration
│   ├── Content Creation
│   ├── Publishing
│   ├── Integration
│   ├── Troubleshooting
│   └── Security & Compliance
│
├── 🚀 Getting Started
│   ├── Quick Start (5 min)
│   ├── Tutorial (15 min)
│   ├── Video Guides
│   └── Sample Projects
│
├── 📚 API Reference
│   ├── REST API
│   ├── GraphQL
│   ├── SDKs
│   └── Webhooks
│
└── 💬 Support
    ├── Contact Support
    ├── Community Forum
    ├── FAQs
    └── Known Issues
```

---

## 📄 Page Types Needed

### 1. **Documentation Home** (What we're building)
**Purpose**: Help users find what they need FAST

**Must Have**:
- Prominent search bar (most important!)
- Browse by Product (tiles/cards)
- Browse by Task (quick actions)
- Quick access to Getting Started
- Recent/Popular articles
- What's New section

**Layout Priority**:
1. Search (top, center, large)
2. Common tasks (visible without scrolling)
3. Products (clear, scannable)
4. Everything else

---

### 2. **Product Hub Page**
**Purpose**: Everything about one product

**Must Have**:
- Product overview (what it does)
- Quick Start button (most prominent)
- Documentation sections (organized, clear)
- API reference link
- Support links
- Related products

---

### 3. **Documentation Article Page**
**Purpose**: Read and understand one topic

**Must Have**:
- Left sidebar: Navigation tree
- Center: Article content (max-width 800px for readability)
- Right sidebar: Table of contents, Related articles
- Breadcrumb (know where you are)
- Previous/Next navigation
- "Was this helpful?" feedback
- Last updated date

---

### 4. **API Reference Page**
**Purpose**: Find and use specific API methods

**Must Have**:
- Method list sidebar
- Code examples (multiple languages)
- Request/Response examples
- Authentication info
- Try it live (API playground)
- Copy buttons everywhere

---

### 5. **Search Results Page**
**Purpose**: Find what you're looking for

**Must Have**:
- Filters (by product, type, date)
- Sort options
- Result snippets with context
- AI-suggested answer (top)
- Pagination or infinite scroll
- Search suggestions

---

## 🎯 UX Principles for Enterprise Docs

### 1. **Speed to Answer**
- Most users should find what they need in < 30 seconds
- Search must be FAST and ACCURATE
- Common tasks front and center
- No marketing fluff in docs

### 2. **Scannable Content**
- Clear headings hierarchy
- Short paragraphs
- Bullet points and lists
- Code examples with syntax highlighting
- Tables for comparisons
- Callouts for important info

### 3. **Context Awareness**
- Breadcrumbs (where am I?)
- Related articles (what's next?)
- Version indicators (am I looking at the right version?)
- Last updated dates (is this current?)

### 4. **Accessibility**
- Keyboard navigation (Tab, Enter, Escape)
- Search shortcut (Cmd/Ctrl + K)
- Proper heading hierarchy (H1, H2, H3)
- Good contrast ratios
- Screen reader friendly

### 5. **Progressive Disclosure**
- Start simple (overview)
- Add detail as needed (expand sections)
- Don't overwhelm
- Let users drill down

---

## 🏗️ Layout Priorities (In Order)

### 1. **SEARCH** (Most Critical)
- Size: Large, prominent
- Position: Top center, above fold
- Placeholder: Specific ("Search API methods, guides, errors...")
- Autocomplete: YES
- Keyboard shortcut: Cmd+K
- AI enhancement: Optional, not required

### 2. **PRIMARY NAVIGATION**
- Clear hierarchy
- Products listed
- Task-based browsing
- Always accessible
- Current location highlighted

### 3. **QUICK ACTIONS**
- "I want to..." cards
- Common tasks visible
- No scrolling required
- Action-oriented labels

### 4. **PRODUCT DISCOVERY**
- Clear product tiles
- Brief descriptions (1 sentence)
- Links to key docs
- Visual differentiation

### 5. **CONTENT ORGANIZATION**
- Logical grouping
- Scannable sections
- Clear headings
- Consistent patterns

---

## 📊 Enterprise Customer Journey

### Journey 1: New Customer
```
Land on docs → 
  Search or Browse Products → 
    Find "Getting Started" → 
      Follow tutorial → 
        Success (or contact support)
```

**Optimize for**:
- Clear "Getting Started" path
- Step-by-step tutorials
- Working code examples
- Support escalation if stuck

### Journey 2: Existing Customer - Specific Task
```
Land on docs → 
  Search for specific feature → 
    Find article → 
      Read solution → 
        Implement → Done
```

**Optimize for**:
- Powerful search with exact matches
- Clear, scannable articles
- Code examples ready to copy
- Related troubleshooting

### Journey 3: Troubleshooting
```
Hit error → 
  Search error message → 
    Find troubleshooting guide → 
      Follow steps → 
        Resolved (or escalate)
```

**Optimize for**:
- Error code index
- Common errors front and center
- Clear troubleshooting steps
- Support ticket link if unresolved

---

## 🛠️ Functional Requirements

### Must Have (P0):
1. **Working search** with keyboard shortcut
2. **Clear navigation** (products, tasks, support)
3. **Responsive layout** (mobile-first)
4. **Readable typography** (not fancy, just clear)
5. **Breadcrumbs** (orientation)
6. **Table of contents** (on doc pages)

### Should Have (P1):
7. Version selector
8. Feedback mechanism
9. Print-friendly styles
10. Dark mode (nice to have, not critical)

### Nice to Have (P2):
11. AI features (after core works)
12. Animations (subtle only)
13. Personalization
14. Reading time estimates

---

## 📝 Redesign Approach

### Step 1: Information Architecture
- [ ] Map all content types
- [ ] Create logical hierarchy
- [ ] Define navigation structure
- [ ] Plan search taxonomy

### Step 2: Core Page Templates
- [ ] Documentation Home (customer-focused)
- [ ] Article page (readable, functional)
- [ ] Product hub page
- [ ] Search results page

### Step 3: Navigation System
- [ ] Top navigation (products, resources, support)
- [ ] Sidebar navigation (context-aware)
- [ ] Breadcrumbs (always visible)
- [ ] Footer links (organized, useful)

### Step 4: Typography & Readability
- [ ] Clear heading hierarchy
- [ ] Readable body text (16-18px)
- [ ] Good line height (1.6-1.8)
- [ ] Max content width (65-75 characters)
- [ ] Code blocks (syntax highlighted)

### Step 5: Functional Elements
- [ ] Working search
- [ ] Copy code buttons
- [ ] Expand/collapse sections
- [ ] Previous/Next navigation
- [ ] "Was this helpful?" buttons

---

## 🎯 Success Metrics

### Usability:
- User can find answer in < 30 seconds
- Search returns relevant results
- Clear path from home to answer
- No dead ends

### Readability:
- Content width: 65-75 characters per line
- Font size: 16-18px body text
- Line height: 1.6-1.8
- Heading contrast: Clear hierarchy

### Accessibility:
- Keyboard navigable
- Screen reader friendly
- Good contrast ratios
- Semantic HTML

---

## 🚀 Rebuild Plan

### Focus Areas:
1. **FUNCTION over form**
2. **CLARITY over creativity**
3. **SPEED over sophistication**
4. **USERS over aesthetics**

### Don't Care About (Yet):
- ❌ Brand colors
- ❌ Fancy animations
- ❌ Marketing copy
- ❌ Perfect matching to any design
- ❌ Gradients and shadows

### Do Care About:
- ✅ Can users find what they need?
- ✅ Is the navigation clear?
- ✅ Is the text readable?
- ✅ Do the links work?
- ✅ Is it fast?
- ✅ Does search help?

---

**Next**: Rebuild with customer experience as THE priority

