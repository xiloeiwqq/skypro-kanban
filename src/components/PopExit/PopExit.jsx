import { ExitActions, ExitDialog, ExitNoButton, ExitOverlay, ExitOverlayContent, ExitTitle, ExitYesButton } from "./PopExit.styled.js";

function PopExit() {
  return (
    <ExitOverlay id="popExit">
      <ExitOverlayContent>
        <ExitDialog>
          <ExitTitle>Выйти из аккаунта?</ExitTitle>
          <form id="formExit" action="#">
            <ExitActions>
              <ExitYesButton id="exitYes"><a href="modal/signin.html">Да, выйти</a></ExitYesButton>
              <ExitNoButton id="exitNo"><a href="main.html">Нет, остаться</a></ExitNoButton>
            </ExitActions>
          </form>
        </ExitDialog>
      </ExitOverlayContent>
    </ExitOverlay>
  );
}

export default PopExit;
