"use client";

import Image from "next/image";

import AnalysisCard from './components/AnalysisCards';


import { Users, EllipsisVertical } from 'lucide-react';
import { useState, useEffect } from "react";

export default function Home() {

  const [studentCount, setStudentCount] = useState<string | number>("...");

  const getStudentCount = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/students`);
      
      if (!response.ok) throw new Error("Network response failed");
      
      const data = await response.json();

      setStudentCount(data.count); 
    } catch (error) {
      console.error("Fetch error:", error);
      setStudentCount("Error");
    }
  };

  useEffect(() => {
    getStudentCount();
  }, []);




  return (
    <>
      <div className="grid grid-cols-[150px_1fr_300px] gap-4">
        <aside className="bg-red-500 min-h-screen">sidebar</aside>
        <main>
          <header className="flex justify-between">
            <h1>
              <span className="block text-4xl font-bold tracking-tighter text-white leading-tight">Computer</span>
              <span className="block text-sm font-medium tracking-wide text-slate-400">Science And Design</span>
            </h1>
            <input type="text" placeholder="search" className="bg-[#303033] text-white placeholder-white w-70 h-10 rounded-2xl pl-7 "/>
          </header>

          <section className="flex gap-4 ml-25 mt-15">        
            
            <AnalysisCard 
              measuringMetric="Class Strength" 
              metricValue={`${studentCount}`}
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
