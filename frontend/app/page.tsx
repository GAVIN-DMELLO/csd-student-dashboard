"use client";

import Image from "next/image";

import AnalysisCard from './components/AnalysisCards';
import Sidebar from './components/Sidebar';
import MarksChart from './components/MarksChart';
import Logo from './components/Logo'



import { Users, EllipsisVertical } from 'lucide-react';
import { useState, useEffect } from "react";

export default function Home() {

  const [studentCount, setStudentCount] = useState<string | number>("...");

  const getStudentCount = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/students`);
      
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
        <aside className=" min-h-screen">
          <Sidebar/>
        </aside>
        <main>
          <header className="flex justify-between items-center">
            <h1>
              <span className="block text-4xl font-bold tracking-tighter text-white leading-tight ml-25 mt-5">Computer</span>
              <span className="block text-sm font-medium tracking-wide text-slate-400 ml-25">Science And Design</span>
            </h1>
            <input type="text" placeholder="search" className="bg-[#303033] text-white placeholder-white w-70 h-10 rounded-2xl pl-7 mr-25 mt-10 "/>
          </header>

          <section className="flex flex-col ">    

            <div className="flex flex-row gap-4 ml-25 mt-15 mb-10"> 
            
            <AnalysisCard 
              measuringMetric="Class Strength" 
              metricValue={studentCount}
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
            </div>   


            <MarksChart/>


          </section>
        </main>
        <aside >
          <Logo />
        </aside>
      </div>
    </>
  );
}
