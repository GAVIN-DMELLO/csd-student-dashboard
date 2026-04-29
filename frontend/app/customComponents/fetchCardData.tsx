"use client";


import { useQuery } from "@tanstack/react-query";





const fetchDataFromDB = async (endpoint:string) => {
  const response = await fetch(`https://csd-student-dashboard.onrender.com/${endpoint}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();
  return result;
};




export function useCardData(endpoint : string) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["cardData" , endpoint],
    queryFn: () => fetchDataFromDB(endpoint),
  });

  console.log("Data from TanStack Query:", data);
  return { data, isLoading, isError, error };
}


