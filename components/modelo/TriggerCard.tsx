import { Activity, AlertTriangle, BriefcaseBusiness, ShieldAlert } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Trigger } from "@/lib/mayaguez-data";

interface TriggerCardProps {
  trigger: Trigger;
  status?: "ACTIVO" | "INACTIVO" | "ALERTA";
}

const typeMap = {
  technical: { label: "SRE", color: "text-mz-cyan", border: "border-mz-cyan/40", bg: "bg-mz-cyan/10", icon: Activity },
  security: { label: "DevSecOps", color: "text-mz-red", border: "border-mz-red/40", bg: "bg-mz-red/10", icon: ShieldAlert },
  maturity: { label: "CMMI/COBIT", color: "text-mz-green", border: "border-mz-green/40", bg: "bg-mz-green/10", icon: AlertTriangle },
  business: { label: "ITIL 4", color: "text-mz-amber", border: "border-mz-amber/40", bg: "bg-mz-amber/10", icon: BriefcaseBusiness },
};

export function TriggerCard({ trigger, status = "ACTIVO" }: TriggerCardProps) {
  const meta = typeMap[trigger.type];
  const Icon = meta.icon;

  return (
    <Card className={cn("border", meta.border)}>
      <CardContent className="p-0">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className={cn("flex h-11 w-11 items-center justify-center rounded-card border", meta.border, meta.bg)}>
            <Icon className={cn("h-5 w-5", meta.color)} />
          </div>
          <Badge variant={status === "ALERTA" ? "warning" : status === "INACTIVO" ? "danger" : "success"}>{status}</Badge>
        </div>
        <p className="mb-2 text-label uppercase text-mz-text-tertiary">{trigger.id} · {meta.label}</p>
        <h3 className="mb-4 text-heading-md text-mz-text-primary">{trigger.name}</h3>
        <div className="mb-4 rounded-card border border-mz-border bg-mz-void px-4 py-3 font-mono text-body-sm text-mz-text-secondary">
          {trigger.condition}
        </div>
        <p className={cn("text-body-sm", meta.color)}>{trigger.action}</p>
      </CardContent>
    </Card>
  );
}
