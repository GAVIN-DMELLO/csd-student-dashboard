"use client";


import { useQuery } from "@tanstack/react-query"


async function fetchStudents() {
  try {
    const response = await fetch("https://csd-student-dashboard.onrender.com/studentstable");
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log(`the student data is here + {data`);
    
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to fetch students:", error);
    return [];
  }
}


export function useStudents() {
  return useQuery({
    queryKey: ["students"], // Unique key for caching
    queryFn: fetchStudents,   // The function that does the work
    staleTime: 1000 * 60 * 5, // Data stays "fresh" for 5 minutes
  })
}

