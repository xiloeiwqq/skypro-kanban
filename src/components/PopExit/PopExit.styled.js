import styled from "styled-components";

export const ExitOverlay = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  min-width: 320px;
  min-height: 100vh;

  &:target {
    display: block;
  }
`;

export const ExitOverlayContent = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  background: rgba(0, 0, 0, 0.4);
`;

export const ExitDialog = styled.div`
  display: block;
  width: 100%;
  max-width: 370px;
  margin: 0 auto;
  padding: 50px 60px;
  border: 0.7px solid #d4dbe5;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 67px -12px rgba(0, 0, 0, 0.13);

  @media only screen and (max-width: 375px) {
    padding: 50px 20px;
  }
`;

export const ExitTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  text-align: center;
`;

export const ExitActions = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 375px) {
    display: block;
  }
`;

const ExitButtonBase = styled.button`
  display: flex;
  width: 153px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;

  a {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }

  &:hover a {
    color: #ffffff;
  }

  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
  }
`;

export const ExitYesButton = styled(ExitButtonBase)`
  margin-right: 10px;
  border: none;
  background-color: #565eef;
  color: #ffffff;

  a {
    color: #ffffff;
  }

  @media only screen and (max-width: 375px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const ExitNoButton = styled(ExitButtonBase)`
  border: 0.7px solid #565eef;
  background-color: transparent;
  color: #565eef;

  a {
    color: #565eef;
  }
`;
