import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Calendar from "../Calendar/Calendar.jsx";
import { useTasks } from "../../useTasks.js";
import {
  BrowseActions,
  BrowseBottomCategory,
  BrowseButtons,
  BrowseCloseButton,
  BrowseContent,
  BrowseDialog,
  BrowseEditButton,
  BrowseError,
  BrowseFieldLabel,
  BrowseForm,
  BrowseFormField,
  BrowseOverlay,
  BrowseOverlayContent,
  BrowseStatus,
  BrowseStatusLabel,
  BrowseStatusList,
  BrowseStatusOption,
  BrowseTextArea,
  BrowseTitle,
  BrowseTop,
  BrowseTopic,
  BrowseTopicLabel,
  BrowseWrap,
} from "./PopBrowse.styled.js";

function PopBrowse({ taskId, editable = false }) {
  const navigate = useNavigate();
  const { getTaskById, updateTask, deleteTask } = useTasks();
  const [task, setTask] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState("");
  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  useEffect(() => {
    let isCurrent = true;
    getTaskById(taskId)
      .then((loadedTask) => {
        if (isCurrent) setTask(loadedTask);
      })
      .catch((requestError) => {
        if (isCurrent) setError(requestError.message);
      })
      .finally(() => {
        if (isCurrent) setIsLoading(false);
      });

    return () => {
      isCurrent = false;
    };
  }, [getTaskById, taskId]);

  async function handleSave(event) {
    event.preventDefault();
    setError("");
    const title = task.title.trim();
    const description = (task.description || "").trim();
    if (!title || !description) {
      setError("Название и описание задачи не могут быть пустыми.");
      return;
    }

    setIsSaving(true);
    try {
      await updateTask(taskId, {
        title,
        topic: task.topic,
        status: task.status,
        description,
        date: task.date,
      });
      navigate(`/tasks/${taskId}`, { replace: true });
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDelete() {
    setError("");
    setIsDeleting(true);
    try {
      await deleteTask(taskId);
      navigate("/", { replace: true });
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <BrowseOverlay id="popBrowse">
      <BrowseOverlayContent>
        <BrowseDialog>
          <BrowseContent>
            {isLoading ? (
              <BrowseTitle>Загружаем задачу...</BrowseTitle>
            ) : !task ? (
              <>
                <BrowseTitle>Не удалось загрузить задачу</BrowseTitle>
                {error && <BrowseError role="alert">{error}</BrowseError>}
                <BrowseCloseButton as={Link} to="/">
                  Закрыть
                </BrowseCloseButton>
              </>
            ) : (
              <>
                <BrowseTop>
                  <BrowseTitle>{task.title}</BrowseTitle>
                  <BrowseTopic $topic={task.topic}>{task.topic}</BrowseTopic>
                </BrowseTop>
                <BrowseStatus>
                  <BrowseStatusLabel>Статус</BrowseStatusLabel>
                  <BrowseStatusList>
                    {statuses.map(
                      (status) =>
                        (editable || task.status === status) && (
                          <BrowseStatusOption
                            as="button"
                            type="button"
                            key={status}
                            $active={task.status === status}
                            disabled={!editable || isSaving || isDeleting}
                            onClick={() =>
                              editable && setTask({ ...task, status })
                            }
                          >
                            {status}
                          </BrowseStatusOption>
                        ),
                    )}
                  </BrowseStatusList>
                </BrowseStatus>
                <BrowseWrap>
                  <BrowseForm id="formBrowseCard" onSubmit={handleSave}>
                    <BrowseFormField>
                      <BrowseFieldLabel htmlFor="textArea01">
                        Описание задачи
                      </BrowseFieldLabel>
                      <BrowseTextArea
                        name="description"
                        id="textArea01"
                        readOnly={!editable}
                        placeholder="Введите описание задачи..."
                        value={task.description || ""}
                        onChange={(event) =>
                          setTask({ ...task, description: event.target.value })
                        }
                      />
                    </BrowseFormField>
                  </BrowseForm>
                  <Calendar mode="browse" />
                </BrowseWrap>
                <BrowseBottomCategory>
                  <BrowseTopicLabel>Категория</BrowseTopicLabel>
                  <BrowseTopic $topic={task.topic}>{task.topic}</BrowseTopic>
                </BrowseBottomCategory>
                {error && <BrowseError role="alert">{error}</BrowseError>}
                <BrowseActions $hidden={editable}>
                  <BrowseButtons>
                    <BrowseEditButton as={Link} to={`/tasks/${taskId}/edit`}>
                      Редактировать задачу
                    </BrowseEditButton>
                    <BrowseEditButton
                      type="button"
                      onClick={handleDelete}
                      disabled={isDeleting || isSaving}
                    >
                      {isDeleting ? "Удаляем..." : "Удалить задачу"}
                    </BrowseEditButton>
                  </BrowseButtons>
                  <BrowseCloseButton as={Link} to="/">
                    Закрыть
                  </BrowseCloseButton>
                </BrowseActions>
                <BrowseActions $hidden={!editable}>
                  <BrowseButtons>
                    <BrowseCloseButton
                      as="button"
                      type="submit"
                      form="formBrowseCard"
                      disabled={isSaving || isDeleting}
                    >
                      {isSaving ? "Сохраняем..." : "Сохранить"}
                    </BrowseCloseButton>
                    <BrowseEditButton as={Link} to={`/tasks/${taskId}`}>
                      Отменить
                    </BrowseEditButton>
                    <BrowseEditButton
                      type="button"
                      id="btnDelete"
                      onClick={handleDelete}
                      disabled={isSaving || isDeleting}
                    >
                      {isDeleting ? "Удаляем..." : "Удалить задачу"}
                    </BrowseEditButton>
                  </BrowseButtons>
                  <BrowseCloseButton as={Link} to="/">
                    Закрыть
                  </BrowseCloseButton>
                </BrowseActions>
              </>
            )}
          </BrowseContent>
        </BrowseDialog>
      </BrowseOverlayContent>
    </BrowseOverlay>
  );
}

export default PopBrowse;
