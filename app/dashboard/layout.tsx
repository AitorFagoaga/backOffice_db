"use client";

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
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 border-r bg-card">
          <div className="flex h-16 items-center px-6">
            <h1 className="text-2xl font-bold">PILCHA</h1>
          </div>
          <nav className="space-y-1 px-3 py-2">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
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