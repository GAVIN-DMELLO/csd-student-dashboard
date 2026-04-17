import { LucideIcon } from 'lucide-react';

type AnalyticProps = {
  measuringMetric: string;
  metricValue: number;
  className?: string; 
  Icon: LucideIcon;
}

export default function AnalysisCard({measuringMetric , metricValue , className , Icon}:AnalyticProps) {
  return (
    <div className={`${className}`}>
      <Icon className="w-6 h-6 text-white" />
      <p className="text-[rgba(86,87,105,1)]">{measuringMetric}</p>
      <span className="text-[rgba(253,253,255,1)]">{metricValue}</span>
    </div>
  );
}


