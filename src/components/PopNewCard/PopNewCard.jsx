import Calendar from "../Calendar/Calendar.jsx";
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
  NewOverlay,
  NewOverlayContent,
  NewTitle,
  TextInput,
} from "./PopNewCard.styled.js";

function PopNewCard() {
  return (
    <NewOverlay id="popNewCard">
      <NewOverlayContent>
        <NewDialog>
          <NewContent>
            <NewTitle>Создание задачи</NewTitle>
            <NewClose href="#">&#10006;</NewClose>
            <NewFormLayout>
              <NewForm id="formNewCard" action="#">
                <FormField>
                  <FieldLabel htmlFor="formTitle">Название задачи</FieldLabel>
                  <TextInput type="text" name="name" id="formTitle" placeholder="Введите название задачи..." autoFocus />
                </FormField>
                <FormField>
                  <FieldLabel htmlFor="textArea">Описание задачи</FieldLabel>
                  <DescriptionInput name="text" id="textArea" placeholder="Введите описание задачи..." />
                </FormField>
              </NewForm>
              <Calendar />
            </NewFormLayout>
            <CategoryLabel>Категория</CategoryLabel>
            <CategoryList>
              <CategoryOption $topic="Web Design" $active>Web Design</CategoryOption>
              <CategoryOption $topic="Research">Research</CategoryOption>
              <CategoryOption $topic="Copywriting">Copywriting</CategoryOption>
            </CategoryList>
            <CreateButton id="btnCreate">Создать задачу</CreateButton>
          </NewContent>
        </NewDialog>
      </NewOverlayContent>
    </NewOverlay>
  );
}

export default PopNewCard;
