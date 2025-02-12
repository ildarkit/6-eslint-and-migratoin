import { AvatarsList, useUsers } from "@/entities/user";
import { Board, BoardPartial, useBoards } from "@/entities/board";
import { useBoardActionDeps } from "../../deps";
import { UpdateBoardEditorsButton } from "../board/update-editors-button";
import { Session } from "@/entities/session";
import { useState } from "react";

export function BoardEditors({ 
  session,
  board,
}: { 
  session: Session,
  board: Board,
}) {
  const users = useUsers((s) => s.usersMap());
  const { canUpdateEditorsBoard } = useBoardActionDeps();
  const [ editorsBoard, setEditorsBoard ] = useState<BoardPartial>(board);
  const getBoardById = useBoards((s) => s.getBoardById);

  const handleClick = () => {
    const updatedBoard = getBoardById(board.id);
    setEditorsBoard(updatedBoard!);
  };

  return (
    <div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-start">Редакторы:</th>
          </tr>
        </thead>
        <tbody>
          <tr key={board.id} className="px-5 py-2 ">
            <td className="p-2">
              <AvatarsList
                avatarsIds={editorsBoard.editorsIds.map((id) => users[id].avatarId)}
              />
            </td>
            {canUpdateEditorsBoard(session.userId) && ( 
              <td className="p-2">
                <div className="flex gap-2 ml-auto">
                  <UpdateBoardEditorsButton board={editorsBoard} onClick={handleClick}/>
                </div>
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
