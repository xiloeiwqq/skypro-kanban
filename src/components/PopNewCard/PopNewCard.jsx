import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Calendar from "../Calendar/Calendar.jsx";
import { useTasks } from "../../useTasks.js";
import {
  CategoryLabel,
  CategoryList,
  CategoryOption,
  CreateButton,
  DescriptionInput,
  FieldLabel,
  FormField,
  NewClose,
  NewContent,
  NewDialog,
  NewForm,
  NewFormLayout,
  NewError,
  NewOverlay,
  NewOverlayContent,
  NewTitle,
  TextInput,
} from "./PopNewCard.styled.js";

function PopNewCard() {
  const navigate = useNavigate();
  const { createTask } = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [topic, setTopic] = useState("Web Design");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();
    if (!trimmedTitle || !trimmedDescription) {
      setError("Заполните название и описание задачи.");
      return;
    }

    setIsSubmitting(true);
    try {
      await createTask({
        title: trimmedTitle,
        description: trimmedDescription,
        topic,
        status: "Без статуса",
        date: new Date().toISOString(),
      });
      navigate("/", { replace: true });
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <NewOverlay id="popNewCard">
      <NewOverlayContent>
        <NewDialog>
          <NewContent>
            <NewTitle>Создание задачи</NewTitle>
            <NewClose as={Link} to="/" aria-label="Закрыть">
              &#10006;
            </NewClose>
            <NewFormLayout>
              <NewForm id="formNewCard" onSubmit={handleSubmit}>
                <FormField>
                  <FieldLabel htmlFor="formTitle">Название задачи</FieldLabel>
                  <TextInput
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                    autoFocus
                  />
                </FormField>
                <FormField>
                  <FieldLabel htmlFor="textArea">Описание задачи</FieldLabel>
                  <DescriptionInput
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    required
                  />
                </FormField>
              </NewForm>
              <Calendar />
            </NewFormLayout>
            <CategoryLabel>Категория</CategoryLabel>
            <CategoryList>
              {["Web Design", "Research", "Copywriting"].map((category) => (
                <CategoryOption
                  as="button"
                  type="button"
                  key={category}
                  $topic={category}
                  $active={topic === category}
                  onClick={() => setTopic(category)}
                >
                  {category}
                </CategoryOption>
              ))}
            </CategoryList>
            {error && <NewError role="alert">{error}</NewError>}
            <CreateButton
              id="btnCreate"
              type="submit"
              form="formNewCard"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Создаем..." : "Создать задачу"}
            </CreateButton>
          </NewContent>
        </NewDialog>
      </NewOverlayContent>
    </NewOverlay>
  );
}

export default PopNewCard;
