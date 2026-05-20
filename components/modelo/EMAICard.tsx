import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { EMAILevel, MIGIncentive } from "@/lib/mayaguez-data";

interface EMAICardProps {
  level: EMAILevel;
  incentive?: MIGIncentive;
  className?: string;
}

const levelStyles = {
  0: { text: "text-mz-text-tertiary", glow: "hover:shadow-mz-card", gradient: "from-mz-text-tertiary to-mz-border" },
  1: { text: "text-mz-red", glow: "hover:shadow-[0_0_28px_rgba(255,61,0,0.16)]", gradient: "from-mz-red to-mz-border" },
  2: { text: "text-mz-amber", glow: "hover:shadow-[0_0_28px_rgba(255,179,0,0.16)]", gradient: "from-mz-amber to-mz-border" },
  3: { text: "text-mz-amber-light", glow: "hover:shadow-[0_0_28px_rgba(252,211,77,0.16)]", gradient: "from-mz-amber-light to-mz-border" },
  4: { text: "text-mz-green", glow: "hover:shadow-mz-elite", gradient: "from-mz-green to-mz-border" },
  5: { text: "text-mz-cyan", glow: "hover:shadow-mz-glow", gradient: "from-mz-cyan to-mz-border" },
};

export function EMAICard({ level, incentive, className }: EMAICardProps) {
  const style = levelStyles[level.level as keyof typeof levelStyles] ?? levelStyles[0];
  const progress = Math.max(8, (level.level / 5) * 100);

  return (
    <Card className={cn("group overflow-hidden", style.glow, className)}>
      <CardContent className="p-0">
        <div className="mb-6 flex items-start justify-between">
          <div className={cn("font-display text-display-lg", style.text)}>{level.level}</div>
          <div className="flex flex-col items-end gap-2">
            <Badge variant="emai" emaiLevel={level.level}>EMAI {level.level}</Badge>
            {incentive && <Badge variant="medal">{incentive.medalEmoji} {incentive.medal}</Badge>}
          </div>
        </div>
        <h3 className="mb-3 text-heading-md text-mz-text-primary">{level.name}</h3>
        <p className="mb-4 text-body-sm text-mz-text-secondary">{level.description}</p>
        <p className="mb-6 text-body-sm text-mz-text-secondary"><span className="text-mz-cyan">DevSecOps/SRE:</span> {level.devsecOps}</p>
        <div className="h-2 overflow-hidden rounded-pill bg-mz-border/60">
          <div className={cn("h-full rounded-pill bg-gradient-to-r", style.gradient)} style={{ width: `${progress}%` }} />
        </div>
      </CardContent>
    </Card>
  );
}
