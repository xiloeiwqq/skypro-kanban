import styled from "styled-components";

export const UserPopup = styled.div`
  position: absolute;
  z-index: 2;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  padding: 34px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 10px 39px 0 rgba(26, 56, 101, 0.21);
  text-align: center;
`;

export const UserName = styled.p`
  margin-bottom: 4px;
  color: #000000;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
`;

export const UserEmail = styled.p`
  margin-bottom: 10px;
  color: #94a6be;
  font-size: 14px;
  line-height: 21px;
`;

export const ThemeToggleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  p {
    color: #000000;
    font-size: 14px;
    line-height: 21px;
  }
`;

export const ThemeCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: relative;
  width: 24px;
  height: 13px;
  appearance: none;
  border-radius: 100px;
  outline: none;
  background: #eaeeF6;

  &::before {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #94a6be;
    content: "";
    transition: 0.5s;
  }

  &:checked::before {
    left: 12px;
  }
`;

export const LogoutButton = styled.button`
  width: 72px;
  height: 30px;
  border: 1px solid #565eef;
  border-radius: 4px;
  background: transparent;
  color: #565eef;

  a {
    color: inherit;
  }

  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;
