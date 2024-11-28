"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { TagsIcon, ShirtIcon, ShoppingBagIcon, PencilRuler } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Estado para controlar la visibilidad del sidebar

  const navigation = [
    {
      name: "Creacion",
      href: "/dashboard/create",
      icon: PencilRuler,
    },
    {
      name: "Brands",
      href: "/dashboard/brands",
      icon: ShoppingBagIcon,
    },
    {
      name: "Categories",
      href: "/dashboard/categories",
      icon: TagsIcon,
    },
    {
      name: "Garments",
      href: "/dashboard/garments",
      icon: ShirtIcon,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col md:flex-row h-screen">
        {/* Botón de hamburguesa para móviles */}
        <button
          className="p-4 md:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Sidebar */}
        <div className={`fixed inset-0 z-40 w-64 bg-card border-r transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:relative md:translate-x-0 md:block`}>
          <div className="flex h-16 items-center px-6">
            <h1 className="text-2xl font-bold">PILCHA</h1>
          </div>
          <nav className="space-y-1 px-3 py-2">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} onClick={() => setIsSidebarOpen(false)}>
                <Button
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className={cn(
                    "w-full mt-2 justify-start gap-2",
                    pathname === item.href && "bg-secondary"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-auto">
          <header className="border-b">
            <div className="flex h-16 items-center px-6">
              <h2 className="text-lg font-semibold">
                {navigation.find((item) => item.href === pathname)?.name ||
                  "Dashboard"}
              </h2>
            </div>
          </header>
          <main className="p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}