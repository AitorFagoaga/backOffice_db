"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PencilIcon, TrashIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function BrandList() {
  // TODO: Implement actual data fetching
  const brands = [
    {
      id: "1",
      name: "Sample Brand",
      logo: "https://via.placeholder.com/40",
      createdAt: new Date(),
    },
  ];

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {brands.map((brand) => (
            <TableRow key={brand.id}>
              <TableCell>
                <Avatar className="h-10 w-10">
                  <AvatarImage src={brand.logo} alt={brand.name} />
                  <AvatarFallback>{brand.name[0]}</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="font-medium">{brand.name}</TableCell>
              <TableCell>
                {brand.createdAt.toLocaleDateString()}
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="icon">
                  <PencilIcon className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <TrashIcon className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}