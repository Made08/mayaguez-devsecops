import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "danger" | "info" | "emai" | "dora" | "sector" | "status" | "medal";
  emaiLevel?: number;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", emaiLevel, children, ...props }, ref) => {
    const variants = {
      default: "bg-mz-surface text-mz-text-secondary border border-mz-border",
      success: "bg-mz-green/15 text-mz-green border border-mz-green/30",
      warning: "bg-mz-amber/15 text-mz-amber border border-mz-amber/30",
      danger: "bg-mz-red/15 text-mz-red border border-mz-red/30",
      info: "bg-mz-cyan/15 text-mz-cyan border border-mz-cyan/30",
      sector: "bg-mz-surface text-mz-text-secondary border border-mz-border",
      status: "bg-mz-green/15 text-mz-green border border-mz-green/30",
      dora: "bg-mz-cyan/15 text-mz-cyan border border-mz-cyan/30",
      medal: "bg-mz-elevated text-mz-text-primary border border-mz-cyan/20",
      emai: "",
    };
    
    // EMAI variant colors
    const emaiColors = emaiLevel !== undefined ? {
      0: "bg-mz-text-tertiary/15 text-mz-text-tertiary border border-mz-text-tertiary/30",
      1: "bg-mz-red/15 text-mz-red border border-mz-red/30",
      2: "bg-mz-amber/15 text-mz-amber border border-mz-amber/30",
      3: "bg-mz-amber-light/15 text-mz-amber-light border border-mz-amber-light/30",
      4: "bg-mz-green/15 text-mz-green border border-mz-green/30",
      5: "bg-mz-cyan/15 text-mz-cyan border border-mz-cyan/30"
    } : "";
    
    const finalVariant = variant === "emai" && emaiColors ? emaiColors[emaiLevel as keyof typeof emaiColors] || variants.default : variants[variant];
    
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-pill border px-2.5 py-1 text-label uppercase",
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
