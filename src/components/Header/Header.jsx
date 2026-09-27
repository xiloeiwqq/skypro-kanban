import { useState } from "react";
import { Container } from "../../App.styled.js";
import PopUser from "../PopUser/PopUser.jsx";
import { CreateTaskButton, HeaderBlock, HeaderNav, HeaderRoot, Logo, UserToggle } from "./Header.styled.js";

function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <HeaderRoot>
      <Container>
        <HeaderBlock>
          <Logo>
            <a href="" target="_self"><img src="/images/logo.png" alt="logo" /></a>
          </Logo>
          <HeaderNav>
            <CreateTaskButton id="btnMainNew"><a href="#popNewCard">Создать новую задачу</a></CreateTaskButton>
            <UserToggle
              href="#user-set-target"
              aria-expanded={isUserMenuOpen}
              aria-controls="user-set-target"
              onClick={(event) => {
                event.preventDefault();
                setIsUserMenuOpen((isOpen) => !isOpen);
              }}
            >
              Ivan Ivanov
            </UserToggle>
            {isUserMenuOpen && <PopUser />}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderRoot>
  );
}

export default Header;
