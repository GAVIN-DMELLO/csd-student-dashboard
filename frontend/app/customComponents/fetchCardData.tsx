"use client";


import { useQuery } from "@tanstack/react-query";





const fetchDataFromDB = async () => {
  const response = await fetch("https://csd-student-dashboard.onrender.com/students");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();
  return result;
};




export function useCardData() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["cardData"],
    queryFn: fetchDataFromDB,
  });

  console.log("Data from TanStack Query:", data);
  return { data, isLoading, isError, error };
}


