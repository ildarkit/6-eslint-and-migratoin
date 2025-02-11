import { ReactNode } from "react";
import { UiButton } from "@/shared/ui/ui-button";
import clsx from "clsx";
import { AddColumnModal } from "./modals/add-column-modal";
import { useState } from "react";

export function BoardActions({ 
  className,
  children,
}: { 
  className?: string,
  children?: ReactNode;
}) {
  const [addColumnModalOpen, setAddColumnModalOpen] = useState(false);

  return (
    <div className={clsx("flex gap-5", className)}>
      <UiButton variant="primary" onClick={() => setAddColumnModalOpen(true)}>
        Добавить колонку
      </UiButton>
      {children}
      {addColumnModalOpen && (
        <AddColumnModal onClose={() => setAddColumnModalOpen(false)} />
      )}
    </div>
  );
}
