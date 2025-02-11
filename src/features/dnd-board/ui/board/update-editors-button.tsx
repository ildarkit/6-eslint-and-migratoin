import { UpdateIcon } from "@/shared/ui/ui-icons";
import clsx from "clsx";
import { useState } from "react";
import { UpdateBoardEditorsModal } from "../modals/update-editors-modal";
import { Board } from "@/entities/board";

export function UpdateBoardEditorsButton({
  className,
  board,
}: {
  className?: string;
  board: Board;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className={clsx(className)} onClick={() => setOpen(true)}>
        <UpdateIcon className="w-8 h-8 text-teal-600" />
      </button>
      {open && (
        <UpdateBoardEditorsModal board={board} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
