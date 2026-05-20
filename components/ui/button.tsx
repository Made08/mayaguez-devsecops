import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-button font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mz-cyan disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] hover:scale-[1.02]";
    
    const variants = {
      primary: "bg-mz-cyan text-mz-text-inverse shadow-mz-glow hover:bg-mz-cyan-dark",
      secondary: "bg-mz-elevated text-mz-text-primary border border-mz-border hover:border-mz-cyan/40 hover:bg-mz-surface",
      outline: "border border-mz-cyan/70 text-mz-cyan hover:bg-mz-cyan/10 hover:border-mz-cyan",
      ghost: "text-mz-text-secondary hover:text-mz-text-primary hover:bg-mz-elevated/70",
      danger: "bg-mz-red text-white hover:bg-mz-red-dark"
    };
    
    const sizes = {
      sm: "h-9 px-3 text-body-sm",
      md: "h-11 px-5 text-body-sm",
      lg: "h-12 px-6 text-body-md"
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
