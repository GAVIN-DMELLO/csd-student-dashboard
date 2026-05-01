import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
// import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import data from "./data.json"

import { useStudents } from "@/app/customComponents/fetchTableData"
import { Loader2 } from "lucide-react"

import dynamic from 'next/dynamic';


const DataTable = dynamic(
  () => import('@/components/data-table').then((mod) => mod.DataTable),
  { 
    ssr: false,
    loading: () => (
      <div className="flex h-64 w-full items-center justify-center">
        Initializing CSD Dashboard...
      </div>
    )
  }
);



export default function Page() {

  const { data: studentData, isLoading, isError } = useStudents()


  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>

              {isLoading ? (
                <div className="flex justify-center py-10">
                  <Loader2 className="animate-spin h-8 w-8 text-muted-foreground" />
                  <span className="ml-2">Loading CSD Records...</span>
                </div>
              ) : isError ? (
                <div className="text-center py-10 text-destructive">
                  Failed to load student database.
                </div>
              ) : (
                <DataTable data={studentData ?? []} />
              )}

            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
