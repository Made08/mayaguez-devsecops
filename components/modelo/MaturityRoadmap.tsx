import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

interface RoadmapPhase {
  month: string;
  title: string;
  items: string[];
}

interface MaturityRoadmapProps {
  phases: RoadmapPhase[];
}

export function MaturityRoadmap({ phases }: MaturityRoadmapProps) {
  return (
    <div className="relative grid gap-6 lg:grid-cols-3">
      <div className="absolute left-6 top-0 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-mz-cyan via-mz-green to-mz-border lg:block" />
      {phases.map((phase, index) => (
        <div key={phase.month} className="relative">
          <div className="mb-5 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-mz-cyan/40 bg-mz-cyan/10 text-heading-md text-mz-cyan shadow-mz-glow">
              {index + 1}
            </div>
            <div>
              <p className="text-label uppercase text-mz-cyan">{phase.month}</p>
              <h3 className="text-heading-md text-mz-text-primary">{phase.title}</h3>
            </div>
          </div>
          <Card>
            <ul className="space-y-3">
              {phase.items.map((item) => (
                <li key={item} className="flex gap-3 text-body-sm text-mz-text-secondary">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-mz-green" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      ))}
    </div>
  );
}
