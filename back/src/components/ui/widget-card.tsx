import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface WidgetCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  className?: string;
  glitch?: boolean;
}

const WidgetCard = ({ 
  title, 
  description, 
  icon: Icon, 
  href, 
  className,
  glitch = false
}: WidgetCardProps) => {
  return (
    <Link to={href} className="block">
      <Card className={cn(
        "transition-cyber hover:glow-cyber hover:border-primary/50",
        "hover:scale-[1.02] cursor-pointer group",
        "bg-card/50 backdrop-blur-sm",
        className
      )}>
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className={cn(
              "font-mono text-lg",
              glitch ? "glitch-effect" : ""
            )}>
              {title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm font-sans leading-relaxed">
            {description}
          </p>
          <div className="mt-4 flex items-center text-xs text-primary font-mono opacity-70 group-hover:opacity-100 transition-cyber">
            ACCESS MODULE →
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default WidgetCard;