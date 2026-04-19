import { LucideIcon } from 'lucide-react';

type AnalyticProps = {
  measuringMetric: string;
  metricValue: string;
  className?: string; 
  Icon: LucideIcon;
  MenuIcon: LucideIcon;
  Marks : LucideIcon;
}

export default function AnalysisCard({measuringMetric , metricValue , className , Icon , MenuIcon}:AnalyticProps) {
  return (
    <div className={`${className}`}>
      <div className="flex justify-between">
        <Icon className="w-6 h-6 text-white" />
        <MenuIcon className="w-6 h-6 text-white" />
      </div>
      <p className="text-[rgba(86,87,105,1)] w-10">{measuringMetric}</p>
      <span className="text-[rgba(253,253,255,1)] font-bold text-2xl">{metricValue}</span>
    </div>
  );
}


