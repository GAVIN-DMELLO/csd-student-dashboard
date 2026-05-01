import { useQuery } from "@tanstack/react-query";

export function useStudentMarks(usn: string | undefined) {
  return useQuery({
    queryKey: ["marks", usn],
    queryFn: async () => {
      if (!usn) return [];
      const response = await fetch(`https://csd-student-dashboard.onrender.com/api/marks/analysis/${usn}`);
      if (!response.ok) throw new Error("Failed to fetch marks");
      return response.json();
    },
    enabled: !!usn, 
    staleTime: 1000 * 60 * 5, 
  });
}