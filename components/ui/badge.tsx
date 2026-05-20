import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "danger" | "info" | "emai";
  emaiLevel?: number;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", emaiLevel, children, ...props }, ref) => {
    const variants = {
      default: "bg-mayaguez-secondary text-mayaguez-text-secondary border border-mayaguez-accent/20",
      success: "bg-mayaguez-success/20 text-mayaguez-success border border-mayaguez-success/30",
      warning: "bg-mayaguez-warning/20 text-mayaguez-warning border border-mayaguez-warning/30",
      danger: "bg-mayaguez-danger/20 text-mayaguez-danger border border-mayaguez-danger/30",
      info: "bg-mayaguez-accent/20 text-mayaguez-accent border border-mayaguez-accent/30",
      emai: ""
    };
    
    // EMAI variant colors
    const emaiColors = emaiLevel !== undefined ? {
      0: "bg-gray-700/20 text-gray-400 border border-gray-600/30",
      1: "bg-orange-700/20 text-orange-400 border border-orange-600/30",
      2: "bg-yellow-700/20 text-yellow-400 border border-yellow-600/30",
      3: "bg-blue-700/20 text-blue-400 border border-blue-600/30",
      4: "bg-mayaguez-success/20 text-mayaguez-success border border-mayaguez-success/30",
      5: "bg-purple-700/20 text-purple-400 border border-purple-600/30"
    } : "";
    
    const finalVariant = variant === "emai" && emaiColors ? emaiColors[emaiLevel as keyof typeof emaiColors] || variants.default : variants[variant];
    
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
          finalVariant,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Badge.displayName = "Badge";
