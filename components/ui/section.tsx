import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, container = true, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn("section-padding relative", className)}
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
      <p className={cn("section-kicker mb-4", centered && "justify-center")}>
        {subtitle}
      </p>
    )}
    <h2 className="font-display text-display-sm md:text-display-md text-mz-text-primary mb-4 text-balance">
      {title}
    </h2>
    {description && (
      <p className={cn("text-body-lg text-mz-text-secondary max-w-3xl", centered && "mx-auto")}>
        {description}
      </p>
    )}
  </div>
  )
);

SectionHeader.displayName = "SectionHeader";
