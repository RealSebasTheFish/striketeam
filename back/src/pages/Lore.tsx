/**
 * ============================================================================
 * 🎯 LORE PAGE - HOW TO ADD NEW ENTRIES
 * ============================================================================
 * 
 * To add a new lore entry, follow these 2 steps:
 * 
 * 1. 📝 STEP 1: Add entry to lore.json (src/data/lore.json)
 *    - Add a new JSON object with your entry details
 * 
 * 2. 🔗 STEP 2: Add quick link (lines 95-105)
 *    - Add your entry to the quickLinks array for easy access
 * 
 * See LORE_GUIDE.md for detailed examples and instructions!
 * ============================================================================
 */

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Star, Archive, FileText, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import loreEntriesData from "@/data/lore.json";

interface LoreEntry {
  id: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  category: "mission" | "discovery" | "incident" | "classified";
  importance: "low" | "medium" | "high" | "critical";
  readTime: number;
}

// Type the imported data
const loreEntries: LoreEntry[] = loreEntriesData as LoreEntry[];

// ============================================================================
// 🔗 STEP 2: ADD QUICK LINKS HERE
// ============================================================================
// Add your new entries to the quickLinks array for easy sidebar access
// Example: { title: "Your Entry Title", id: "your-entry-id", icon: Archive }

const quickLinks = [
  { title: "ARSE", id: "arse-1", icon: Archive }
  // 👇 ADD YOUR NEW QUICK LINKS HERE 👇
  // { title: "Your Entry", id: "your-id", icon: Zap },
  // { title: "Another Entry", id: "another-id", icon: FileText },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "mission": return "text-primary border-primary/20 bg-primary/10";
    case "discovery": return "text-accent border-accent/20 bg-accent/10";
    case "incident": return "text-orange-400 border-orange-400/20 bg-orange-400/10";
    case "classified": return "text-destructive border-destructive/20 bg-destructive/10";
    default: return "text-muted-foreground border-border bg-muted/10";
  }
};

const getImportanceIcon = (importance: string) => {
  const baseClass = "h-4 w-4";
  switch (importance) {
    case "critical": return <Star className={`${baseClass} text-destructive fill-current`} />;
    case "high": return <Star className={`${baseClass} text-orange-400 fill-current`} />;
    case "medium": return <Star className={`${baseClass} text-accent`} />;
    default: return <Star className={`${baseClass} text-muted-foreground`} />;
  }
};

const Lore = () => {
  const [selectedEntry, setSelectedEntry] = useState<LoreEntry | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-dark py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-mono font-bold text-neon">
            MISSION ARCHIVES
          </h1>
          {/* <p className="text-xl text-muted-foreground font-sans max-w-2xl">
            Chronicles of our engineering adventures, discoveries, and the occasional controlled chaos.
          </p> */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {selectedEntry ? (
              /* Full Entry View */
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge className={getCategoryColor(selectedEntry.category)}>
                          {selectedEntry.category.toUpperCase()}
                        </Badge>
                        {getImportanceIcon(selectedEntry.importance)}
                      </div>
                      <CardTitle className="text-2xl font-mono text-neon">
                        {selectedEntry.title}
                      </CardTitle>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setSelectedEntry(null)}
                      className="font-mono"
                    >
                      BACK TO ARCHIVES
                    </Button>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground mt-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span className="font-mono">{selectedEntry.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4" />
                      <span className="font-mono">{selectedEntry.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span className="font-mono">{selectedEntry.readTime} min read</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="prose prose-invert max-w-none">
                  <p className="text-foreground font-sans leading-relaxed text-lg">
                    {selectedEntry.content}
                  </p>
                  
                  {selectedEntry.category === "classified" && (
                    <div className="mt-8 p-4 border border-destructive/30 bg-destructive/5 rounded-lg">
                      <p className="text-destructive font-mono text-sm">
                        [SECURITY NOTICE] This document contains classified information. 
                        Unauthorized access is strictly prohibited and will be reported 
                        to campus security.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              /* Entries List */
              <div className="space-y-6">
                {loreEntries.map((entry) => (
                  <Card 
                    key={entry.id}
                    className={cn(
                      "bg-card/50 backdrop-blur-sm cursor-pointer transition-cyber",
                      "hover:glow-cyber hover:border-primary/50"
                    )}
                    onClick={() => setSelectedEntry(entry)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <Badge className={getCategoryColor(entry.category)}>
                              {entry.category.toUpperCase()}
                            </Badge>
                            {getImportanceIcon(entry.importance)}
                          </div>
                          <CardTitle className="font-mono text-xl hover:text-neon transition-cyber">
                            {entry.title}
                          </CardTitle>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span className="font-mono">{entry.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FileText className="h-4 w-4" />
                          <span className="font-mono">{entry.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span className="font-mono">{entry.readTime} min</span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-muted-foreground font-sans leading-relaxed">
                        {entry.excerpt}
                      </p>
                      <div className="mt-4 text-xs text-primary font-mono opacity-70">
                        READ FULL ENTRY →
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Links */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="font-mono text-lg text-primary">
                  QUICK ACCESS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {quickLinks.map((link) => {
                  const entry = loreEntries.find(e => e.id === link.id);
                  const LinkIcon = link.icon;
                  
                  return (
                    <Button
                      key={link.id}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start font-mono text-left h-auto p-3"
                      onClick={() => entry && setSelectedEntry(entry)}
                    >
                      <LinkIcon className="h-4 w-4 mr-3 text-accent" />
                      <span className="text-sm">{link.title}</span>
                    </Button>
                  );
                })}
              </CardContent>
            </Card>

            {/* Archive Stats */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="font-mono text-lg text-primary">
                  ARCHIVE STATUS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-mono text-muted-foreground">Total Entries</span>
                    <span className="font-mono text-primary">{loreEntries.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-mono text-muted-foreground">Classified</span>
                    <span className="font-mono text-destructive">
                      {loreEntries.filter(e => e.category === "classified").length}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-mono text-muted-foreground">Critical Importance</span>
                    <span className="font-mono text-orange-400">
                      {loreEntries.filter(e => e.importance === "critical").length}
                    </span>
                  </div>
                </div>
                
                <div className="border-t border-border pt-4">
                  <p className="text-xs font-mono text-accent">
                    LAST UPDATE: {new Date().toISOString().split('T')[0]}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lore;

/**
 * ============================================================================
 * 🚀 QUICK REFERENCE - ADDING NEW LORE ENTRIES
 * ============================================================================
 * 
 * 1. Add entry to lore.json (src/data/lore.json)
 * 2. Add quick link here (STEP 2 - lines 44-49)
 * 
 * Categories: "mission" | "discovery" | "incident" | "classified"
 * Importance: "low" | "medium" | "high" | "critical"
 * 
 * For detailed examples, see LORE_GUIDE.md
 * ============================================================================
 */