import { Button } from "@/components/ui/button";
import WidgetCard from "@/components/ui/widget-card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Calendar, 
  Users, 
  Archive, 
  ArrowRight,
  Terminal,
  Lock
} from "lucide-react";
import strikeTeamLogo from "@/assets/strike-team-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-dark overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-cyber opacity-20"></div>
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-1 h-1 bg-accent rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-primary rounded-full animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          {/* Logo */}
          {/* <img 
            src={strikeTeamLogo} 
            alt="Strike Team Logo" 
            className="mx-auto mb-8 h-24 w-auto glow-neon"
          /> */}
          
          {/* Status Badge */}
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 font-mono text-xs">
            <Terminal className="h-3 w-3 mr-2" />
            SYSTEM STATUS: OPERATIONAL
          </Badge>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-mono font-bold mb-6">
            <span className="text-neon glitch-effect" data-text="STRIKE">STRIKE</span>
            <br />
            <span className="text-cyber">TEAM</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground font-sans max-w-3xl mx-auto mb-8 leading-relaxed">
            Disruption. Spirit. Pranks.
            {/* <br />
            <span className="text-accent font-mono text-lg">
              [CLEARANCE LEVEL: RESTRICTED]
            </span> */}
          </p>
          
          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono px-8 py-6 glow-neon"
            >
              <Shield className="h-5 w-5 mr-2" />
              ACCESS MAINFRAME
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent/10 font-mono px-8 py-6"
            >
              <Lock className="h-5 w-5 mr-2" />
              REQUEST CLEARANCE
            </Button>
          </div> */}
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto mb-12">
            {/* Operations: link to /events */}
            <Link to="/events" className="text-center group cursor-pointer">
              <div className="text-2xl md:text-3xl font-mono font-bold text-primary group-hover:text-neon transition-cyber">??</div>
              <div className="text-sm text-muted-foreground font-sans group-hover:text-primary transition-cyber">Operations</div>
            </Link>
            {/* Active Agents: link to Team page */}
            <Link to="/team" className="text-center group cursor-pointer">
              <div className="text-2xl md:text-3xl font-mono font-bold text-accent group-hover:text-neon transition-cyber">5</div>
              <div className="text-sm text-muted-foreground font-sans group-hover:text-accent transition-cyber">Active Agents</div>
            </Link>
            {/* Possibilities: link to /lore */}
            <Link to="/lore" className="text-center group cursor-pointer">
              <div className="text-2xl md:text-3xl font-mono font-bold text-primary group-hover:text-neon transition-cyber">∞</div>
              <div className="text-sm text-muted-foreground font-sans group-hover:text-primary transition-cyber">Possibilities</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Modules Section */}
      {/* <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-4">
              MISSION <span className="text-neon">MODULES</span>
            </h2>
            <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
              Access specialized systems containing classified operational data, 
              team intelligence, and documented exploits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <WidgetCard
              title="OPERATION LOGS"
              description="Browse classified photo albums from our engineering adventures and tactical shenanigans."
              icon={Calendar}
              href="/events"
              className="hover:border-primary/50"
            />
            
            <WidgetCard
              title="AGENT ROSTER"
              description="Meet the elite operatives behind Strike Team's legendary exploits and innovations."
              icon={Users}
              href="/team"
              className="hover:border-accent/50"
            />
            
            <WidgetCard
              title="MISSION ARCHIVES"
              description="Detailed chronicles of our most significant discoveries, incidents, and classified operations."
              icon={Archive}
              href="/lore"
              glitch={true}
              className="hover:border-primary/50"
            />
            
            <WidgetCard
              title="CLASSIFIED"
              description="Access restricted. Requires OMEGA clearance level and proper authorization codes."
              icon={Lock}
              href="#"
              className="hover:border-destructive/50 opacity-75 cursor-not-allowed"
            />
          </div>
        </div>
      </section> */}

      {/* Recent Activity Section */}
      {/* <section className="py-16 px-4 bg-card/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-mono font-bold text-foreground">
              RECENT <span className="text-cyber">ACTIVITY</span>
            </h2>
            <Badge className="bg-accent/10 text-accent border-accent/20 font-mono">
              LIVE FEED
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary/30 transition-cyber">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="font-mono text-sm text-muted-foreground">2024-03-20</span>
              </div>
              <h3 className="font-mono text-lg text-primary mb-2">Operation: Coffee Override</h3>
              <p className="text-muted-foreground font-sans text-sm">
                Successfully infiltrated faculty lounge systems. Mission status: COMPLETE.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-accent/30 transition-cyber">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="font-mono text-sm text-muted-foreground">2024-03-18</span>
              </div>
              <h3 className="font-mono text-lg text-accent mb-2">New Agent: GHOST</h3>
              <p className="text-muted-foreground font-sans text-sm">
                Backend specialist recruited. Clearance level: ALPHA confirmed.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary/30 transition-cyber">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="font-mono text-sm text-muted-foreground">2024-03-15</span>
              </div>
              <h3 className="font-mono text-lg text-primary mb-2">Archive Update</h3>
              <p className="text-muted-foreground font-sans text-sm">
                Mission logs from Engineering Week uploaded to secure servers.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-card/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img 
              src={strikeTeamLogo} 
              alt="Strike Team Logo" 
              className="h-12 w-auto"
            />
          </div>
          <p className="text-muted-foreground font-mono text-sm">
            [CLASSIFIED] • SECURITY CLEARANCE REQUIRED • EST. 2025
          </p>
          <div className="flex justify-center mt-2">
            <a
              href="https://www.instagram.com/yorkstrikes/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" stroke="currentColor" strokeWidth="2"/><path fill="currentColor" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
            </a>
          </div>
          {/* <p className="text-muted-foreground font-sans text-xs mt-2">
            "Engineering excellence through controlled chaos"
          </p> */}
        </div>
      </footer>
    </div>
  );
};

export default Index;