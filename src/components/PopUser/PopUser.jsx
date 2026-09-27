import { Link } from "react-router-dom";
import { LogoutButton, ThemeCheckbox, ThemeToggleRow, UserEmail, UserName, UserPopup } from "./PopUser.styled.js";

function PopUser() {
  return (
    <UserPopup id="user-set-target">
      <UserName>Ivan Ivanov</UserName>
      <UserEmail>ivan.ivanov@gmail.com</UserEmail>
      <ThemeToggleRow>
        <p>Темная тема</p>
        <ThemeCheckbox className="checkbox" name="checkbox" />
      </ThemeToggleRow>
      <LogoutButton as={Link} to="/logout">Выйти</LogoutButton>
    </UserPopup>
  );
}

export default PopUser;
