import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LikertQuestionProps {
  id: string;
  text: string;
  category: string;
  value?: number;
  onChange: (value: number) => void;
}

const labels = ["Nunca", "Raramente", "A veces", "Frecuentemente", "Siempre"];

export function LikertQuestion({ id, text, category, value, onChange }: LikertQuestionProps) {
  return (
    <div className={cn("rounded-card border p-4 transition-all", value ? "border-mz-cyan/30 bg-mz-cyan/5" : "border-mz-border bg-mz-deep/60")}>
      <div className="mb-3 flex items-start gap-3">
        <span className="mt-0.5 flex-shrink-0 font-mono text-caption uppercase text-mz-cyan">{id}</span>
        <div>
          <p className="text-body-sm text-mz-text-primary">{text}</p>
          <span className="text-caption uppercase text-mz-text-tertiary">{category}</span>
        </div>
        {value && <CheckCircle2 className="ml-auto mt-0.5 h-4 w-4 flex-shrink-0 text-mz-green" />}
      </div>
      <div className="flex flex-wrap gap-2">
        {[1, 2, 3, 4, 5].map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={cn(
              "min-w-[44px] flex-1 rounded-button border py-2 text-body-sm font-semibold transition-all",
              value === option
                ? "border-mz-cyan bg-mz-cyan text-mz-text-inverse shadow-mz-glow"
                : "border-mz-border text-mz-text-tertiary hover:border-mz-cyan/50 hover:text-mz-text-primary"
            )}
          >
            <span className="block">{option}</span>
            <span className="hidden text-[10px] font-normal opacity-75 md:block">{labels[option - 1]}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
