import { Link } from "react-router-dom";
import Calendar from "../Calendar/Calendar.jsx";
import {
  BrowseActions,
  BrowseBottomCategory,
  BrowseButtons,
  BrowseCloseButton,
  BrowseContent,
  BrowseDialog,
  BrowseEditButton,
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
  return (
    <BrowseOverlay id="popBrowse">
      <BrowseOverlayContent>
        <BrowseDialog>
          <BrowseContent>
            <BrowseTop>
              <BrowseTitle>Название задачи</BrowseTitle>
              <BrowseTopic $topic="Web Design">Web Design</BrowseTopic>
            </BrowseTop>
            <BrowseStatus>
              <BrowseStatusLabel>Статус</BrowseStatusLabel>
              <BrowseStatusList>
                <BrowseStatusOption $hidden>Без статуса</BrowseStatusOption>
                <BrowseStatusOption $active>Нужно сделать</BrowseStatusOption>
                <BrowseStatusOption $hidden>В работе</BrowseStatusOption>
                <BrowseStatusOption $hidden>Тестирование</BrowseStatusOption>
                <BrowseStatusOption $hidden>Готово</BrowseStatusOption>
              </BrowseStatusList>
            </BrowseStatus>
            <BrowseWrap>
              <BrowseForm id="formBrowseCard" action="#">
                <BrowseFormField>
                  <BrowseFieldLabel htmlFor="textArea01">Описание задачи</BrowseFieldLabel>
                  <BrowseTextArea name="text" id="textArea01" readOnly={!editable} placeholder="Введите описание задачи..." />
                </BrowseFormField>
              </BrowseForm>
              <Calendar mode="browse" />
            </BrowseWrap>
            <BrowseBottomCategory>
              <BrowseTopicLabel>Категория</BrowseTopicLabel>
              <BrowseTopic $topic="Web Design">Web Design</BrowseTopic>
            </BrowseBottomCategory>
            <BrowseActions>
              <BrowseButtons>
                <BrowseEditButton as={Link} to={`/tasks/${taskId}/edit`}>Редактировать задачу</BrowseEditButton>
                <BrowseEditButton as={Link} to="/">Удалить задачу</BrowseEditButton>
              </BrowseButtons>
              <BrowseCloseButton as={Link} to="/">Закрыть</BrowseCloseButton>
            </BrowseActions>
            <BrowseActions $hidden={!editable}>
              <BrowseButtons>
                <BrowseCloseButton as={Link} to={`/tasks/${taskId}`}>Сохранить</BrowseCloseButton>
                <BrowseEditButton as={Link} to={`/tasks/${taskId}`}>Отменить</BrowseEditButton>
                <BrowseEditButton as={Link} id="btnDelete" to="/">Удалить задачу</BrowseEditButton>
              </BrowseButtons>
              <BrowseCloseButton as={Link} to="/">Закрыть</BrowseCloseButton>
            </BrowseActions>
          </BrowseContent>
        </BrowseDialog>
      </BrowseOverlayContent>
    </BrowseOverlay>
  );
}

export default PopBrowse;
