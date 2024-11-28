"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { AllForms } from "./components/AllForms"
import { CreateBrandDialog } from "@/components/brands/create-brand-dialog";
import { FormBrands } from "./components/FormBrands";

export default function CreatePage() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  return (
    <div className="space-y-4">
      <AllForms />
      <CreateBrandDialog
        open={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
      />
    </div>
  );
}