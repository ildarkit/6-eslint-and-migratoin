import { UpdateIcon } from "@/shared/ui/ui-icons";
import clsx from "clsx";
import { useState } from "react";
import { UpdateBoardEditorsModal } from "../modals/update-editors-modal";
import { Board } from "@/entities/board";

export function UpdateBoardEditorsButton({
  className,
  board,
  onClick,
}: {
  className?: string;
  board: Board;
  onClick: () => void;
}) {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
    onClick();
  };

  return (
    <>
      <button className={clsx(className)} onClick={() => setOpen(true)}>
        <UpdateIcon className="w-8 h-8 text-teal-600" />
      </button>
      {open && (
        <UpdateBoardEditorsModal board={board} onClose={onClose} />
      )}
    </>
  );
}
