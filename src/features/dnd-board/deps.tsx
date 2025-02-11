import { createStrictContext, useStrictContext } from "@/shared/lib/react";
import { BoardCardStore } from "./model/board.store";

type BoardDeps = BoardCardStore;

type BoardActionDeps = {
  canUpdateEditorsBoard: (userId?: string) => boolean;
};

export const boardActionDepsContext = createStrictContext<BoardActionDeps>();

export const useBoardActionDeps = () => useStrictContext(boardActionDepsContext);

export const boardDepsContext = createStrictContext<BoardDeps>();
