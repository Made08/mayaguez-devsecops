"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
}

export function CodeBlock({ code, language = "text", filename = "snippet", className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className={cn("overflow-hidden rounded-card border border-mz-border bg-[#0D1117] shadow-mz-card", className)}>
      <div className="flex items-center justify-between border-b border-mz-border bg-mz-void px-4 py-3">
        <div className="flex items-center gap-3 text-caption uppercase text-mz-text-tertiary">
          <span>{filename}</span>
          <span className="rounded-badge bg-mz-cyan/10 px-2 py-1 text-mz-cyan">{language}</span>
        </div>
        <button onClick={copy} className="inline-flex items-center gap-2 text-caption uppercase text-mz-text-tertiary transition-colors hover:text-mz-cyan">
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>
      <pre className="scrollbar-mz overflow-x-auto p-5 font-mono text-[14px] leading-6 text-mz-text-secondary">
        <code>{code}</code>
      </pre>
    </div>
  );
}
