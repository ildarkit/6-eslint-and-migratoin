import { BoardPartial, UpdateBoardData, useBoards } from "@/entities/board";
import { useSession } from "@/entities/session";
import { useBoardActionDeps } from "../deps";

export function useUpdateEditorsBoard(board?: BoardPartial) {
  const ownerId = useSession((s) => s.currentSession?.userId);
  const updateBoardRaw = useBoards((s) => s.updateBoard);
  const { canUpdateEditorsBoard } = useBoardActionDeps();

  const updateEditorsBoard = async (data: UpdateBoardData, onUpdate: () => void) => {
    if (!board || !canUpdateEditorsBoard(ownerId)) return;

    if (board.editorsIds !== data.editorsIds) {
      await updateBoardRaw(board.id, data);
      onUpdate();
    }
  };

  return { updateEditorsBoard };
}
