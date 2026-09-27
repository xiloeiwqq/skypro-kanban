import styled from "styled-components";

export const MainRoot = styled.main`
  width: 100%;
  background-color: #eaEEF6;
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media screen and (max-width: 1200px) {
    padding: 40px 0 64px;
  }
`;

export const MainContent = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 1200px) {
    display: block;
  }
`;

export const LoadingText = styled.p`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 134px);
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 16px;
  text-align: center;
`;

export const ErrorMessage = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 134px);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  color: #c0392b;
  font-size: 14px;
  text-align: center;

  button {
    padding: 8px 14px;
    border: 0;
    border-radius: 4px;
    background: #565eef;
    color: #ffffff;
  }
`;
