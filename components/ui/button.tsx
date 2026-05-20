import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mayaguez-accent disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "bg-mayaguez-accent text-mayaguez-primary hover:bg-mayaguez-accentDark",
      secondary: "bg-mayaguez-secondary text-mayaguez-text-primary hover:bg-mayaguez-secondary/80",
      outline: "border-2 border-mayaguez-accent text-mayaguez-accent hover:bg-mayaguez-accent/10",
      ghost: "text-mayaguez-text-secondary hover:text-mayaguez-text-primary hover:bg-mayaguez-secondary/50",
      danger: "bg-mayaguez-danger text-white hover:bg-red-600"
    };
    
    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg"
    };
    
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
