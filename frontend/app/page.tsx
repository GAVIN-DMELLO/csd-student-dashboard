import Image from "next/image";

import AnalysisCard from './components/AnalysisCards';
import { Users, EllipsisVertical } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-[150px_1fr_300px] gap-4">
        <aside className="bg-red-500 min-h-screen">sidebar</aside>
        <main>
          <header className="flex justify-between">
            <h1>
              <span className="block text-3xl font-bold text-white">Computer</span>
              <span className="block text-sm text-white">Science And Design</span>
            </h1>
            <input type="text" placeholder="search" className="bg-[rgba(23,24,33,1)] text-white placeholder-white w-70 h-10 rounded-2xl pl-7 "/>
          </header>

          <section className="flex gap-4 ml-25 mt-15">        
            
            <AnalysisCard 
              measuringMetric="Class Strength" 
              metricValue="45/47" 
              className="w-50 h-42 rounded-3xl border border-white/5 bg-[radial-gradient(circle_at_top_left,#282c4d,#21222d,#21222d)] shadow-2xl text-[rgba(86,87,105,1)]
               flex flex-col justify-center pl-5 gap-3" 
              Icon={Users}
              MenuIcon={EllipsisVertical}

            />


            <AnalysisCard 
              measuringMetric="Class Average Marks" 
              metricValue="N/A" 
              className="w-50 h-42 rounded-3xl border border-white/5 bg-[radial-gradient(circle_at_top_right,#2b4241,#21222d,#21222d)] shadow-2xl text-[rgba(86,87,105,1)] flex flex-col justify-center pl-5 gap-1" 
              Icon={Users}
              MenuIcon={EllipsisVertical}
            />

            <AnalysisCard 
              measuringMetric="Total Students" 
              metricValue="N/A" 
              className="w-50 h-42 rounded-3xl border border-white/5 bg-[radial-gradient(circle_at_top_left,#282c4d,#21222d,#21222d)] shadow-2xl text-[rgba(86,87,105,1)] flex flex-col justify-center  pl-5 gap-5" 
              Icon={Users}
              MenuIcon={EllipsisVertical}
            />

            <AnalysisCard 
              measuringMetric="Attendance Rate" 
              metricValue="N/A" 
              className="w-50 h-42 rounded-3xl border border-white/5 bg-[radial-gradient(circle_at_top_right,#2b4241,#21222d,#21222d)] shadow-2xl text-[rgba(86,87,105,1)] flex flex-col justify-center pl-5 gap-5" 
              Icon={Users}
              MenuIcon={EllipsisVertical}
            />

          </section>
        </main>
        <aside className="bg-red-500">right panel</aside>
      </div>
    </>
  );
}
