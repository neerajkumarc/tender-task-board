import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Bell, Search, SlidersVertical } from "lucide-react";

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="w-[calc(100vw-4rem)]  overflow-hidden">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-white text-2xl font-semibold">Tender Tasks</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for Tenders"
                  className="bg-white text-black rounded-sm px-4 py-1 w-[500px]"
                />
                <Search className="h-5 w-5 absolute right-3 top-1/2 translate-y-[-50%] text-black" />
              </div>
              <Bell className="text-white h-6 w-6" />
              <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center text-white border border-white">
                S
              </div>
            </div>
          </div>
          <Separator orientation="horizontal" className="mb-4 bg-neutral-600" />

          <div className="flex justify-between items-center gap-2 mb-6">
            <div className="flex gap-4 w-full bg-black rounded-full px-6">
              <button>List View</button>
              <button className="text-white border border-yellow-500 rounded-full py-2 px-4">
                Board View
              </button>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="text-white border-yellow-500"
              >
                View Tender Details
              </Button>
              <Button
                variant="outline"
                className="text-white rounded-full border-gray-400"
              >
                <SlidersVertical className="mr-1" /> Columns
              </Button>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
