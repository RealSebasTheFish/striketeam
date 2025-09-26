import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import mfImg from "../assets/team/mf.png";
import dpImg from "../assets/team/dp.png";
import gdImg from "../assets/team/gd.png";
import saImg from "../assets/team/sa.png";
import hlaImg from "../assets/team/hla.png";
import { Shield, Zap, Code, Wrench, HelpCircle, CircleDollarSign, Palette, Lightbulb} from "lucide-react";

import type { LucideIcon } from "lucide-react";
interface TeamMember {
  id: string;
  codename: string;
  role: string;
  specialization: string[];
  status: "active" | "deep_cover" | "classified";
  avatar?: string;
  clearance: "ALPHA" | "OMEGA";
  icon: LucideIcon;
}

// Mock data - now with avatar images, clearance, and icon
const teamMembers: TeamMember[] = [
  {
    id: "1",
    codename: "MOTHER FORKER",
    role: "Team Lead",
    specialization: ["Strategic Planning", "Tomfoolery"],
    status: "active",
    avatar: mfImg,
    clearance: "OMEGA",
    icon: Shield
  },
  {
    id: "2", 
    codename: "DADDY PRONG",
    role: "Advisor",
    specialization: ["Wise Words", "Dad Jokes"],
    status: "active",
    avatar: dpImg,
    clearance: "ALPHA",
    icon: Lightbulb
  },
  {
    id: "3",
    codename: "GOLD DIGGER",
    role: "Operations",
    specialization: ["Finding Money", "Spending Money"],
    status: "active",
    avatar: gdImg,
    clearance: "ALPHA",
    icon: CircleDollarSign
  },
  {
    id: "4",
    codename: "SCANDALOUS AFFAIRS",
    role: "Events",
    specialization: ["Planning Chaos", "Dancing Juice"],
    status: "active",
    avatar: saImg,
    clearance: "ALPHA",
    icon: Wrench
  },
  {
    id: "5",
    codename: "HAPPY LITTLE ACCIDENT",
    role: "Art",
    specialization: ["Just happy to be here"],
    status: "active",
    avatar: hlaImg,
    clearance: "ALPHA",
    icon: Palette
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "active": return "text-primary border-primary/20 bg-primary/10";
    case "deep_cover": return "text-accent border-accent/20 bg-accent/10";
    case "classified": return "text-destructive border-destructive/20 bg-destructive/10";
    default: return "text-muted-foreground border-border bg-muted/10";
  }
};



const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-dark py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-mono font-bold text-neon">
            STRIKE TEAM ROSTER
          </h1>
          {/* <p className="text-xl text-muted-foreground font-sans max-w-2xl">
            Elite engineering operatives specializing in controlled chaos and technical excellence.
            <span className="text-accent"> Identity protection: ACTIVE</span>
          </p> */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => {
            const RoleIcon = member.icon;
            return (
              <Card 
                key={member.id}
                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-cyber hover:glow-cyber"
              >
                <CardContent className="p-0">
                  <div className="flex">
                    {/* Left Side - Picture and Status */}
                    <div className="w-1/2 p-4 flex flex-col items-center space-y-3">
                      <div className="w-full aspect-[3/4] bg-primary/10 border-2 border-primary/20 rounded-lg flex items-center justify-center overflow-hidden">
                        <Avatar className="w-full h-full">
                          <AvatarImage src={member.avatar} alt={member.codename} className="object-cover w-full h-full" />
                          <AvatarFallback>{member.codename.slice(0, 2)}</AvatarFallback>
                        </Avatar>
                      </div>
                      <Badge className={`font-mono text-xs ${getStatusColor(member.status)}`}>
                        {member.status.toUpperCase().replace("_", " ")}
                      </Badge>
                    </div>

                    {/* Right Side - Info */}
                    <div className="w-1/2 p-4 space-y-4">
                      {/* Name and Role */}
                      <div>
                        <CardTitle className="font-mono text-lg mb-2">
                          {member.codename}
                        </CardTitle>
                        <div className="flex items-center space-x-2">
                          <RoleIcon className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground font-sans">
                            {member.role}
                          </span>
                        </div>
                      </div>

                      {/* Specializations */}
                      <div>
                        <p className="text-xs font-mono text-muted-foreground mb-2">
                          SPECIALIZATIONS:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {member.specialization.map((spec, index) => (
                            <Badge key={index} variant="outline" className="text-xs font-sans">
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Clearance */}
                      <div className="border-t border-border pt-3">
                        <p className="text-xs font-mono text-accent">
                          CLEARANCE: {member.clearance}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recruitment Notice */}
        <Card className="mt-12 bg-gradient-cyber border-primary/30">
          <CardContent className="p-6 text-center">
            <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-mono font-bold text-primary mb-2">
              RECRUITMENT: ACTIVE
            </h3>
            <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
              Think you've got what it takes to join the Strike Team? 
              We're always looking for engineers who aren't afraid to push boundaries 
              and challenge the status quo.
            </p>
            <p className="text-sm font-mono text-accent mt-4">
              Contact: [CLASSIFIED] • Security Clearance Required • More Details Coming Soon
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Team;