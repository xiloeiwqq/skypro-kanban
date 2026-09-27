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

function PopBrowse() {
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
                  <BrowseTextArea name="text" id="textArea01" readOnly placeholder="Введите описание задачи..." />
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
                <BrowseEditButton><a href="#">Редактировать задачу</a></BrowseEditButton>
                <BrowseEditButton><a href="#">Удалить задачу</a></BrowseEditButton>
              </BrowseButtons>
              <BrowseCloseButton><a href="#">Закрыть</a></BrowseCloseButton>
            </BrowseActions>
            <BrowseActions $hidden>
              <BrowseButtons>
                <BrowseCloseButton><a href="#">Сохранить</a></BrowseCloseButton>
                <BrowseEditButton><a href="#">Отменить</a></BrowseEditButton>
                <BrowseEditButton id="btnDelete"><a href="#">Удалить задачу</a></BrowseEditButton>
              </BrowseButtons>
              <BrowseCloseButton><a href="#">Закрыть</a></BrowseCloseButton>
            </BrowseActions>
          </BrowseContent>
        </BrowseDialog>
      </BrowseOverlayContent>
    </BrowseOverlay>
  );
}

export default PopBrowse;
