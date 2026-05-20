import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, container = true, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn("section-padding", className)}
      {...props}
    >
      {container ? (
        <div className="container-custom">{children}</div>
      ) : (
        children
      )}
    </section>
  )
);

Section.displayName = "Section";

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
}

export const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, title, subtitle, description, centered = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mb-12",
      centered ? "text-center" : "",
      className
    )}
    {...props}
  >
    {subtitle && (
      <p className="text-mayaguez-accent font-semibold text-sm uppercase tracking-wider mb-2">
        {subtitle}
      </p>
    )}
    <h2 className="text-3xl md:text-4xl font-bold text-mayaguez-text-primary mb-4">
      {title}
    </h2>
    {description && (
      <p className="text-mayaguez-text-secondary text-lg max-w-3xl">
        {description}
      </p>
    )}
  </div>
  )
);

SectionHeader.displayName = "SectionHeader";
