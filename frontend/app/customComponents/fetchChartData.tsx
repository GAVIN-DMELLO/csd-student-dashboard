"use client";



import { useQuery } from "@tanstack/react-query";



type ChartItem = {
  usn: string;
  _avg: {
    marks: number;
  };
};

async function getChartMarks() {
  try {
    const res = await fetch("https://csd-student-dashboard.onrender.com/chart");
    const data: ChartItem[] = await res.json();

    // transform data
    const result = data.map((item: any) => ({
      usn: item.usn,
      marks: item._avg.marks
    }));


    return result;

  } catch (error) {
    console.error("Error fetching chart data:", error);
    return [];
  }
}


type MarksData = {
  marks: number;
};

export function useChartData() {
  return useQuery({
    queryKey: ["chartData"],
    queryFn: getChartMarks
  });
}
