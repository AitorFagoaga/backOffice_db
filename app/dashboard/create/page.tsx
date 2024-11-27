"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { FormBrands } from "/Users/aitorfagoaga/Documents/projects/project/components/create/form-brands"
import { CreateBrandDialog } from "@/components/brands/create-brand-dialog";

export default function CreatePage() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Brands</h1>
        <Button onClick={() => setIsCreateDialogOpen(true)}>
          <PlusIcon className="h-4 w-4 mr-2" />
          Add Brand
        </Button>
      </div>
      <FormBrands />
      <CreateBrandDialog
        open={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
      />
    </div>
  );
}