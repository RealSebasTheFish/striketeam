# Adding New Lore Entries Guide

[README](../README.md) • [Events Guide](./EVENTS_GUIDE.md) • [Lore Guide](./LORE_GUIDE.md) • [Deployment](./DEPLOYMENT.md)

## How to Add a New Lore Entry

Adding a new lore entry is now much simpler! Follow these 2 steps:

### 1. 📝 Add Entry to lore.json
Add a new entry to `/src/data/lore.json`:

```json
{
  "id": "unique-id",
  "title": "Your Entry Title",
  "date": "2025-MM-DD",
  "author": "AUTHOR_NAME",
  "excerpt": "Brief description of the entry...",
  "content": "Full content of your lore entry goes here. This can be as long as you want.",
  "category": "mission",
  "importance": "medium",
  "readTime": 5
}
```

### 2. 🔗 Add Quick Link (Optional)
Add your entry to the quickLinks array in `/src/pages/Lore.tsx` (around line 44-49):

```typescript
const quickLinks = [
  { title: "ARSE", id: "arse-1", icon: Archive },
  { title: "Your Entry", id: "your-entry-id", icon: Zap }
];
```

## Field Descriptions

### Required Fields
- **id**: Unique identifier (e.g., "mission-1", "discovery-2")
- **title**: Display title of the entry
- **date**: Date in YYYY-MM-DD format, or "CLASSIFIED" for sensitive entries
- **author**: Author name or "CLASSIFIED"
- **excerpt**: Brief description shown in the entry list
- **content**: Full content shown when entry is opened
- **category**: Entry type (see categories below)
- **importance**: Priority level (see importance levels below)
- **readTime**: Estimated reading time in minutes

### Categories
- **"mission"** - Official missions and operations
- **"discovery"** - New findings and revelations
- **"incident"** - Events and happenings
- **"classified"** - Sensitive/restricted information

### Importance Levels
- **"low"** - Minor entries
- **"medium"** - Standard entries
- **"high"** - Important entries
- **"critical"** - Mission-critical information

## Examples

### Mission Entry
```json
{
  "id": "mission-1",
  "title": "The Origin Protocol",
  "date": "2023-09-15",
  "author": "PHANTOM",
  "excerpt": "How the Strike Team was born from the ashes of conventional engineering thinking...",
  "content": "It all started during the great Systems Design Crisis of 2023. While others followed the rules, we saw opportunity in chaos. This is the story of how a group of engineering rebels decided to forge their own path.",
  "category": "mission",
  "importance": "critical",
  "readTime": 8
}
```

### Discovery Entry
```json
{
  "id": "discovery-1",
  "title": "Discovery: The Hidden Lab Access Codes",
  "date": "2024-01-22",
  "author": "CIPHER",
  "excerpt": "During routine reconnaissance, we uncovered something extraordinary in the basement archives...",
  "content": "What appeared to be a simple maintenance tunnel led to discoveries that would change everything. The implications are still being analyzed.",
  "category": "discovery",
  "importance": "high",
  "readTime": 5
}
```

### Classified Entry
```json
{
  "id": "classified-1",
  "title": "Operation: Midnight Sun",
  "date": "2024-03-01",
  "author": "CLASSIFIED",
  "excerpt": "REDACTED - REQUIRES OMEGA CLEARANCE",
  "content": "[CLASSIFIED] This entry requires security clearance level OMEGA or higher.",
  "category": "classified",
  "importance": "critical",
  "readTime": 12
}
```

## Quick Link Icons

Available icons for quick links:
- `Archive` - For archived/classified entries
- `Zap` - For missions and operations
- `FileText` - For discoveries and reports
- `Star` - For important entries
- `Calendar` - For time-sensitive entries
- `Clock` - For process-related entries

## Tips

1. **Keep IDs unique** - Use descriptive prefixes like "mission-", "discovery-", etc.
2. **Write engaging excerpts** - These appear in the entry list, so make them compelling
3. **Use appropriate categories** - This affects the color coding and organization
4. **Set realistic read times** - Help users know what to expect
5. **Add quick links for important entries** - Makes them easily accessible from the sidebar

## Security Notes

- Use "CLASSIFIED" for date/author when dealing with sensitive information
- Classified entries automatically get special styling and security notices
- Consider the importance level carefully for sensitive entries


