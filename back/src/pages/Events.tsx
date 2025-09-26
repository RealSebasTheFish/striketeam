/**
 * ============================================================================
 * 🎯 EVENTS PAGE - HOW TO ADD NEW EVENTS
 * ============================================================================
 * 
 * To add a new event, follow these 3 steps:
 * 
 * 1. 📸 STEP 1: Import your event images (lines 16-21)
 *    - Add import statements for each image in your event folder
 * 
 * 2. 🗂️ STEP 2: Add to image mapping (lines 54-69)
 *    - Add your event's images to the eventImages object
 * 
 * 3. 📋 STEP 3: Add event configuration (src/data/events.json)
 *    - Add a new JSON object with your event details
 * 
 * See EVENTS_GUIDE.md for detailed examples and instructions!
 * ============================================================================
 */

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Image, HelpCircle, Filter } from "lucide-react";
import { cn } from "@/lib/utils";
import EventGallery from "@/components/EventGallery";
import eventConfigs from "@/data/events.json";

// ============================================================================
// 📸 STEP 1: IMPORT YOUR EVENT IMAGES HERE
// ============================================================================
// Add import statements for your new event images below this line
// Example: import yourEventImg1 from "@/assets/events/your-event-name/image1.jpg";

import prankersCodeImg1 from "@/assets/events/prankers-code-2025/IMG_5957.jpg";
import prankersCodeImg2 from "@/assets/events/prankers-code-2025/IMG_5970.jpg";
import prankersCodeImg3 from "@/assets/events/prankers-code-2025/IMG_5987.jpg";
import prankersCodeImg4 from "@/assets/events/prankers-code-2025/IMG_5999.jpg";
import prankersCodeImg5 from "@/assets/events/prankers-code-2025/IMG_6003.jpg";
import prankersCodeImg6 from "@/assets/events/prankers-code-2025/IMG_7416.jpg";



type EventCategory = "all" | "events" | "shenanigans";

interface EventAlbum {
  id: string;
  title: string;
  category: EventCategory;
  coverImage?: string;
  imageCount: number;
  date: string;
  isEmpty?: boolean;
  images?: string[];
}

interface EventConfig {
  id: string;
  title: string;
  category: EventCategory;
  date: string;
  folder: string;
  coverImageIndex?: number;
  isEmpty?: boolean;
}

// ============================================================================
// 🗂️ STEP 2: ADD YOUR EVENT TO THE IMAGE MAPPING HERE
// ============================================================================
// Add your new event's images to this object below
// Example: "your-event-name": [yourEventImg1, yourEventImg2, yourEventImg3]

const eventImages: Record<string, string[]> = {
  "prankers-code-2025": [
    prankersCodeImg1,
    prankersCodeImg2,
    prankersCodeImg3,
    prankersCodeImg4,
    prankersCodeImg5,
    prankersCodeImg6
  ],
  // 👇 ADD YOUR NEW EVENT HERE 👇
  // "your-event-name": [
  //   yourEventImg1,
  //   yourEventImg2,
  //   yourEventImg3
  // ],
};

// Convert configs to albums
const useEventAlbums = () => {
  const [albums, setAlbums] = useState<EventAlbum[]>([]);
  const [loading, setLoading] = useState(false); // No async loading needed now

  useEffect(() => {
    const loadedAlbums: EventAlbum[] = [];
    
    for (const config of eventConfigs as EventConfig[]) {
      if (config.isEmpty) {
        loadedAlbums.push({
          id: config.id,
          title: config.title,
          category: config.category,
          date: config.date,
          imageCount: 0,
          isEmpty: true
        });
      } else {
        const images = eventImages[config.folder] || [];
        loadedAlbums.push({
          id: config.id,
          title: config.title,
          category: config.category,
          date: config.date,
          coverImage: images[config.coverImageIndex || 0],
          imageCount: images.length,
          images: images
        });
      }
    }
    
    setAlbums(loadedAlbums);
  }, []);

  return { albums, loading };
};

const Events = () => {
  const [activeFilter, setActiveFilter] = useState<EventCategory>("all");
  const [selectedAlbum, setSelectedAlbum] = useState<EventAlbum | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  
  const { albums, loading } = useEventAlbums();

  const filteredAlbums = albums.filter(album => 
    activeFilter === "all" || album.category === activeFilter
  );

  const handleAlbumClick = (album: EventAlbum) => {
    if (album.isEmpty || !album.images || album.images.length === 0) return;
    
    setSelectedAlbum(album);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setSelectedAlbum(null);
  };

  const getCategoryColor = (category: EventCategory) => {
    switch (category) {
      case "events": return "text-primary border-primary/20 bg-primary/10";
      case "shenanigans": return "text-accent border-accent/20 bg-accent/10";
      default: return "text-muted-foreground border-border bg-muted/10";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-dark py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-mono font-bold text-neon">
            OPERATION LOGS
          </h1>
          {/* <p className="text-xl text-muted-foreground font-sans max-w-2xl">
            Classified documentation of our engineering exploits and tactical shenanigans.
            <span className="text-accent"> Clearance level: OMEGA</span>
          </p> */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Filter className="h-4 w-4" />
            <span className="font-mono text-sm">FILTER:</span>
          </div>
          {[
            { key: "all", label: "ALL OPERATIONS" },
            { key: "events", label: "EVENTS" },
            { key: "shenanigans", label: "SHENANIGANS" }
          ].map(({ key, label }) => (
            <Button
              key={key}
              variant={activeFilter === key ? "default" : "outline"}
              size="sm"
              className="font-mono text-xs"
              onClick={() => setActiveFilter(key as EventCategory)}
            >
              {label}
            </Button>
          ))}
        </div>

        {/* Albums Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlbums.map((album) => (
            <Card 
              key={album.id}
              className={cn(
                "overflow-hidden transition-cyber hover:glow-cyber group",
                "bg-card/50 backdrop-blur-sm border-border hover:border-primary/50",
                !album.isEmpty && album.images && album.images.length > 0 
                  ? "cursor-pointer" 
                  : "cursor-default"
              )}
              onClick={() => handleAlbumClick(album)}
            >
              {/* Cover Image */}
              <div className="aspect-video bg-muted/20 relative overflow-hidden">
                {album.isEmpty ? (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-cyber">
                    <HelpCircle className="h-16 w-16 text-muted-foreground/50" />
                  </div>
                ) : album.coverImage ? (
                  <img
                    src={album.coverImage}
                    alt={album.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-cyber flex items-center justify-center">
                    <Image className="h-16 w-16 text-muted-foreground/50" />
                  </div>
                )}
                
                {/* Category Badge */}
                <Badge className={cn(
                  "absolute top-3 left-3 font-mono text-xs",
                  getCategoryColor(album.category)
                )}>
                  {album.category.toUpperCase()}
                </Badge>

                {/* Image Count */}
                {!album.isEmpty && (
                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md">
                    <span className="text-xs font-mono text-primary">
                      {album.imageCount} IMAGES
                    </span>
                  </div>
                )}

                {/* Clickable Overlay for albums with images */}
                {!album.isEmpty && album.images && album.images.length > 0 && (
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/60 backdrop-blur-sm px-3 py-2 rounded-md">
                      <span className="text-xs font-mono text-white">
                        CLICK TO VIEW GALLERY
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <CardContent className="p-4">
                <h3 className="font-mono font-semibold text-lg mb-2 group-hover:text-neon transition-cyber">
                  {album.title}
                </h3>
                
                <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4" />
                  <span className="font-mono">{album.date}</span>
                </div>

                {album.isEmpty && (
                  <div className="mt-3 text-xs text-accent font-mono border-l-2 border-accent/30 pl-3">
                    STATUS: CLASSIFIED
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredAlbums.length === 0 && (
          <div className="text-center py-12">
            <HelpCircle className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
            <h3 className="text-xl font-mono text-muted-foreground mb-2">
              NO OPERATIONS FOUND
            </h3>
            <p className="text-muted-foreground font-sans">
              No missions match the selected filter criteria.
            </p>
          </div>
        )}
      </div>

      {/* Event Gallery Modal */}
      {selectedAlbum && (
        <EventGallery
          isOpen={isGalleryOpen}
          onClose={closeGallery}
          images={selectedAlbum.images || []}
          title={selectedAlbum.title}
        />
      )}
    </div>
  );
};

export default Events;

/**
 * ============================================================================
 * 🚀 QUICK REFERENCE - ADDING NEW EVENTS
 * ============================================================================
 * 
 * 1. Create folder: /src/assets/events/your-event-name/
 * 2. Add images to that folder
 * 3. Import images here (STEP 1 - lines 35-40)
 * 4. Add to eventImages mapping (STEP 2 - lines 58-73)
 * 5. Add config to events.json (STEP 3 - src/data/events.json)
 * 
 * Categories: "events" | "shenanigans"
 * 
 * For detailed examples, see EVENTS_GUIDE.md
 * ============================================================================
 */