import { Link } from "react-router-dom";
import { useAuth } from "../../useAuth.js";
import { LogoutButton, ThemeCheckbox, ThemeToggleRow, UserEmail, UserName, UserPopup } from "./PopUser.styled.js";

function PopUser() {
  const { user } = useAuth();

  return (
    <UserPopup id="user-set-target">
      <UserName>{user.name || user.login || "Пользователь"}</UserName>
      <UserEmail>{user.login || ""}</UserEmail>
      <ThemeToggleRow>
        <p>Темная тема</p>
        <ThemeCheckbox className="checkbox" name="checkbox" />
      </ThemeToggleRow>
      <LogoutButton as={Link} to="/logout">Выйти</LogoutButton>
    </UserPopup>
  );
}

export default PopUser;
