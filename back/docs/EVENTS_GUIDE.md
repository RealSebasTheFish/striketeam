# Adding New Events Guide

[README](../README.md) • [Events Guide](./EVENTS_GUIDE.md) • [Lore Guide](./LORE_GUIDE.md) • [Deployment](./DEPLOYMENT.md)

## How to Add a New Event

Adding a new event is now much simpler! Follow these steps:

### 1. Create Event Folder
Create a new folder in `/src/assets/events/` with your event images:
```
src/assets/events/your-event-name/
├── image1.jpg
├── image2.jpg
├── image3.jpg
└── ...
```

### 2. Import Images
Add import statements at the top of `/src/pages/Events.tsx` (around line 10-16):
```typescript
import yourEventImg1 from "@/assets/events/your-event-name/image1.jpg";
import yourEventImg2 from "@/assets/events/your-event-name/image2.jpg";
import yourEventImg3 from "@/assets/events/your-event-name/image3.jpg";
```

### 3. Add to Image Mapping
Add your images to the `eventImages` object in `/src/pages/Events.tsx` (around line 42-52):
```typescript
const eventImages: Record<string, string[]> = {
  "prankers-code-2025": [
    prankersCodeImg1,
    prankersCodeImg2,
    // ... existing images
  ],
  "your-event-name": [
    yourEventImg1,
    yourEventImg2,
    yourEventImg3
  ]
};
```

### 4. Add Event Configuration
Add a new entry to `/src/data/events.json`:

```json
{
  "id": "unique-id",
  "title": "Your Event Title",
  "category": "events",
  "date": "2025-MM-DD",
  "folder": "your-event-name",
  "coverImageIndex": 0
}
```

### 5. That's It!
The system will automatically:
- Load all images from your mapping
- Count the images
- Use the specified cover image (or first image if not specified)
- Display the event in the appropriate category

## Example

To add a new event called "Hackathon 2025":

1. **Create folder**: `/src/assets/events/hackathon-2025/`
2. **Add images**: Put your photos in that folder
3. **Add imports** to Events.tsx:
```typescript
import hackathonImg1 from "@/assets/events/hackathon-2025/photo1.jpg";
import hackathonImg2 from "@/assets/events/hackathon-2025/photo2.jpg";
import hackathonImg3 from "@/assets/events/hackathon-2025/photo3.jpg";
```
4. **Add to mapping**:
```typescript
const eventImages: Record<string, string[]> = {
  // ... existing events
  "hackathon-2025": [
    hackathonImg1,
    hackathonImg2,
    hackathonImg3
  ]
};
```
5. **Update JSON**:
```json
{
  "id": "6",
  "title": "Hackathon 2025",
  "category": "events",
  "date": "2025-03-15",
  "folder": "hackathon-2025",
  "coverImageIndex": 2
}
```

## Supported Image Formats
- `.jpg`
- `.jpeg`
- `.png`
- `.gif`
- `.webp`

## Categories
- `"events"` - Official events
- `"shenanigans"` - Fun activities and pranks
- `"all"` - Shows all events (used for filtering)

## Empty Events
For events that don't have images yet, set `"isEmpty": true`:
```json
{
  "id": "7",
  "title": "Future Event",
  "category": "events",
  "date": "2025-??-??",
  "folder": "future-event",
  "isEmpty": true
}
```

