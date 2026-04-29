'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

export default function Providers({ children }: { children: React.ReactNode }) {
  // We use useState to ensure the QueryClient is only initialized once
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        // With Next.js, it's often good to set a staleTime 
        // to avoid immediate refetching on the client
        staleTime: 60 * 1000, 
      },
    },
  }))

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}