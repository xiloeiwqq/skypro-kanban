import styled from "styled-components";

export const HeaderRoot = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;

export const HeaderBlock = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  height: 70px;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const Logo = styled.div`
  img {
    width: 85px;
  }

  &:not(:first-child) {
    display: none;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  max-width: 290px;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

export const CreateTaskButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 178px;
  height: 30px;
  margin-right: 20px;
  border: none;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;

  a {
    color: inherit;
  }

  &:hover {
    background-color: #33399b;
  }

  @media screen and (max-width: 495px) {
    position: fixed;
    z-index: 3;
    top: auto;
    bottom: 30px;
    left: 16px;
    width: calc(100vw - 32px);
    height: 40px;
    margin-right: 0;
  }
`;

export const UserToggle = styled.a`
  display: flex;
  height: 20px;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #565eef;
  font-size: 14px;
  line-height: 20px;

  &::after {
    display: block;
    width: 6px;
    height: 6px;
    margin: -6px 0 0 5px;
    padding: 0;
    transform: rotate(-45deg);
    border: 0;
    border-bottom: 1.9px solid #565eef;
    border-left: 1.9px solid #565eef;
    border-radius: 1px;
    content: "";
  }

  &:hover {
    color: #33399b;

    &::after {
      border-bottom-color: #33399b;
      border-left-color: #33399b;
    }
  }
`;
