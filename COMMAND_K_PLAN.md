# Command K Search Implementation Plan

## Overview
Create an enterprise-grade Command K search experience with filters and updated navigation.

## Features

### 1. Command K Modal
- **Trigger**: Cmd/Ctrl + K keyboard shortcut
- **Trigger Button**: Click to open (replaces current search bar)
- **Modal Design**: 
  - Centered overlay with backdrop blur
  - Large search input with icon
  - Filters dropdown below search
  - Results area with icons and categories
  - Recent searches section

### 2. Search Filters
- **All Results** (default)
- **Documentation** - search docs only
- **AI Answers** - get AI-generated answers

### 3. Doc Page Navigation Update
- **Problem**: Current nav takes too much space
- **Solution**: Move nav items to dropdown menu on desktop
- **Layout**: Logo | Nav Dropdown | **BIG SEARCH** | Dark Mode | User

### 4. Search Results UI
- Documentation results with doc icon
- AI Answers with sparkle icon
- Category labels
- Keyboard navigation (arrow keys, Enter)
- ESC to close

## Implementation Order
1. ✅ Create Command K modal HTML structure
2. ✅ Add keyboard shortcut handler (Cmd/Ctrl + K)
3. ✅ Design search filters dropdown
4. ✅ Create results UI with icons
5. ✅ Update doc-page header navigation
6. ✅ Add to index.html and user-profile.html

## Design Inspiration
- Linear's Command K
- Notion's search
- Vercel's documentation search

