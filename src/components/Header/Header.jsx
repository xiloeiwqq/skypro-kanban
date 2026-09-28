import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../App.styled.js";
import { useAuth } from "../../useAuth.js";
import PopUser from "../PopUser/PopUser.jsx";
import {
  CreateTaskButton,
  HeaderBlock,
  HeaderNav,
  HeaderRoot,
  Logo,
  UserToggle,
} from "./Header.styled.js";

function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user } = useAuth();
  const displayName = user.name || user.login || "Пользователь";

  return (
    <HeaderRoot>
      <Container>
        <HeaderBlock>
          <Logo>
            <Link to="/">
              <img src="/images/logo.png" alt="logo" />
            </Link>
          </Logo>
          <HeaderNav>
            <CreateTaskButton as={Link} id="btnMainNew" to="/tasks/new">
              Создать новую задачу
            </CreateTaskButton>
            <UserToggle
              href="#user-set-target"
              aria-expanded={isUserMenuOpen}
              aria-controls="user-set-target"
              onClick={(event) => {
                event.preventDefault();
                setIsUserMenuOpen((isOpen) => !isOpen);
              }}
            >
              {displayName}
            </UserToggle>
            {isUserMenuOpen && <PopUser />}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderRoot>
  );
}

export default Header;
