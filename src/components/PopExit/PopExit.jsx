import { useNavigate } from "react-router-dom";
import { ExitActions, ExitDialog, ExitNoButton, ExitOverlay, ExitOverlayContent, ExitTitle, ExitYesButton } from "./PopExit.styled.js";

function PopExit() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  }

  return (
    <ExitOverlay id="popExit">
      <ExitOverlayContent>
        <ExitDialog>
          <ExitTitle>Выйти из аккаунта?</ExitTitle>
          <form id="formExit" action="#">
            <ExitActions>
              <ExitYesButton id="exitYes" type="button" onClick={handleLogout}>Да, выйти</ExitYesButton>
              <ExitNoButton id="exitNo" type="button" onClick={() => navigate("/")}>Нет, остаться</ExitNoButton>
            </ExitActions>
          </form>
        </ExitDialog>
      </ExitOverlayContent>
    </ExitOverlay>
  );
}

export default PopExit;
