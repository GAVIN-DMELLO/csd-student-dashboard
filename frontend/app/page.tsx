import Image from "next/image";

import AnalysisCard from './components/AnalysisCards';
import { Users, GraduationCap, Award, BookOpen } from 'lucide-react';

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

          <section className="flex gap-4 ml-4">        
            
            <AnalysisCard 
              measuringMetric="Class Strength" 
              metricValue={47} 
              className="w-60 h-42 rounded-3xl border border-white/5 bg-[radial-gradient(circle_at_top_left,#282c4d,#21222d,#21222d)] shadow-2xl text-[rgba(86,87,105,1)]
              " 
              Icon={Users}
            />


            <AnalysisCard 
              measuringMetric="Class Average Marks" 
              metricValue={0} 
              className="w-60 h-42 rounded-3xl border border-white/5 bg-[radial-gradient(circle_at_top_left,#282c4d,#21222d,#21222d)] shadow-2xl text-[rgba(86,87,105,1)]" 
              Icon={Users}
            />

            <AnalysisCard 
              measuringMetric="Total Students" 
              metricValue={0} 
              className="w-60 h-42 rounded-3xl border border-white/5 bg-[radial-gradient(circle_at_top_left,#282c4d,#21222d,#21222d)] shadow-2xl text-[rgba(86,87,105,1)]" 
              Icon={Users}
            />

            <AnalysisCard 
              measuringMetric="Attendance Rate" 
              metricValue={0} 
              className="w-60 h-42 rounded-3xl border border-white/5 bg-[radial-gradient(circle_at_top_left,#282c4d,#21222d,#21222d)] shadow-2xl text-[rgba(86,87,105,1)]" 
              Icon={Users}
            />

          </section>
        </main>
        <aside className="bg-red-500">right panel</aside>
      </div>
    </>
  );
}
