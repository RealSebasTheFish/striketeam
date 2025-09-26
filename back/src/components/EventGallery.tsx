import { useState, useEffect } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, Grid3X3, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";

interface EventGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
}

const EventGallery = ({ isOpen, onClose, images, title }: EventGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGridView, setIsGridView] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      setIsGridView(true); // Default to grid view
    }
  }, [isOpen]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
    setIsGridView(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isOpen) return;
    
    switch (e.key) {
      case "ArrowLeft":
        goToPrevious();
        break;
      case "ArrowRight":
        goToNext();
        break;
      case "Escape":
        onClose();
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!isOpen || images.length === 0) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-[95vw] max-h-[95vh] translate-x-[-50%] translate-y-[-50%] bg-black/95 border-0 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
        >
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-gradient-to-b from-black/80 to-transparent">
          <h2 className="text-xl font-mono font-bold text-neon">
            {title}
          </h2>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsGridView(!isGridView)}
              className="text-white hover:text-neon hover:bg-white/10"
              title={isGridView ? "View Single Image" : "View Grid"}
            >
              {isGridView ? <Maximize2 className="h-4 w-4" /> : <Grid3X3 className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:text-neon hover:bg-white/10"
              title="Close Gallery"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Navigation Arrows */}
        {!isGridView && (
          <>
            <Button
              variant="ghost"
              size="lg"
              onClick={goToPrevious}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-50 text-white hover:text-neon hover:bg-white/20 bg-black/40 backdrop-blur-sm border border-white/20 hover:border-neon/50 transition-all duration-200 w-14 h-14 rounded-full"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={goToNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-50 text-white hover:text-neon hover:bg-white/20 bg-black/40 backdrop-blur-sm border border-white/20 hover:border-neon/50 transition-all duration-200 w-14 h-14 rounded-full"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </>
        )}

        {/* Image Counter */}
        {!isGridView && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 bg-black/60 backdrop-blur-sm px-3 py-2 rounded-md">
            <span className="text-sm font-mono text-white">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        )}

        {/* Content */}
        <div className="w-full h-full flex items-center justify-center p-4 pt-20 pb-20">
          {isGridView ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl w-full">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square overflow-hidden rounded-lg cursor-pointer hover:scale-105 transition-all duration-200 group relative"
                  onClick={() => goToImage(index)}
                >
                  <img
                    src={image}
                    alt={`${title} - Image ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/60 backdrop-blur-sm px-3 py-2 rounded-md">
                      <span className="text-xs font-mono text-white">
                        VIEW FULL SIZE
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={images[currentIndex]}
                alt={`${title} - Image ${currentIndex + 1}`}
                className="w-auto h-auto max-w-full max-h-full object-contain"
                style={{
                  maxWidth: 'calc(95vw - 8rem)',
                  maxHeight: 'calc(95vh - 10rem)'
                }}
              />
            </div>
          )}
        </div>

        {/* Thumbnail Navigation */}
        {!isGridView && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-200",
                  index === currentIndex
                    ? "bg-red-500 scale-125"
                    : "bg-white/50 hover:bg-white/75"
                )}
              />
            ))}
          </div>
        )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </Dialog>
  );
};

export default EventGallery;
