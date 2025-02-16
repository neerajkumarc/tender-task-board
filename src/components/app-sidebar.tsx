"use client";

import * as React from "react";
import { Phone, Search, SquareKanban, TrendingUp } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";

const items = [
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Kanban",
    url: "#",
    icon: SquareKanban,
  },
  {
    title: "Trending",
    url: "#",
    icon: TrendingUp,
  },
  {
    title: "Phone",
    url: "#",
    icon: Phone,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="bg-black">
      <SidebarHeader className="flex justify-end items-end py-5">
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="py-8 px-2">
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
