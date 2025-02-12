import { UiModal } from "@/shared/ui/ui-modal";
import { UiButton } from "@/shared/ui/ui-button";
import { Controller, useForm } from "react-hook-form";
import { useUpdateEditorsBoard } from "../../model/use-update-editors";
import { BoardPartial, UpdateBoardData } from "@/entities/board";
import { UserMultiSelect } from "@/entities/user";

export function UpdateBoardEditorsModal({
  onClose,
  board,
}: {
  onClose: () => void;
  board: BoardPartial;
}) {
  const { control, handleSubmit } = useForm<UpdateBoardData>({
    defaultValues: board,
  });

  const { updateEditorsBoard } = useUpdateEditorsBoard(board);

  const onSubmit = handleSubmit((data) => updateEditorsBoard(data, onClose));

  return (
    <UiModal isOpen onClose={onClose} width="md">
      <form onSubmit={onSubmit}>
        <UiModal.Header>
          <h1>Редактирование доски</h1>
        </UiModal.Header>
        <UiModal.Body className="flex flex-col gap-4">
          <Controller
            control={control}
            name="editorsIds"
            render={({ field: { value, onChange }, fieldState }) => (
              <UserMultiSelect
                label="Редакторы"
                userIds={value ?? []}
                onChangeUserIds={onChange}
                error={fieldState.error?.message}
                className="w-full"
              />
            )}
          />
        </UiModal.Body>
        <UiModal.Footer>
          <UiButton type="button" variant="outlined" onClick={onClose}>
            Отмена
          </UiButton>
          <UiButton type="submit" variant="primary">
            Обновить
          </UiButton>
        </UiModal.Footer>
      </form>
    </UiModal>
  );
}
