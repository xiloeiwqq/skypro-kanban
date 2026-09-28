import styled from "styled-components";
import { Link } from "react-router-dom";

export const AuthPage = styled.main`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  background: #eaedf5;
`;

export const AuthPanel = styled.section`
  width: 100%;
  max-width: 368px;
  padding: 40px 48px;
  border: 1px solid #d4dbe5;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 4px 40px -16px rgba(0, 0, 0, 0.2);

  @media (max-width: 420px) {
    padding: 36px 24px;
  }
`;

export const AuthTitle = styled.h1`
  margin-bottom: 28px;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  text-align: center;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const AuthInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 8px;
  border: 0;
  border-bottom: 1px solid #d4dbe5;
  outline-color: #565eef;
  font: inherit;
  font-size: 14px;

  &::placeholder {
    color: #94a6be;
  }
`;

export const AuthSubmit = styled.button`
  min-height: 40px;
  margin-top: 16px;
  border: 0;
  border-radius: 4px;
  background: #565eef;
  color: #fff;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background: #33399b;
  }
`;

export const AuthPrompt = styled.p`
  margin-top: 20px;
  color: #94a6be;
  font-size: 14px;
  text-align: center;
`;

export const AuthError = styled.p`
  color: #c0392b;
  font-size: 13px;
  line-height: 1.4;
`;

export const AuthLink = styled(Link)`
  color: #565eef;
  text-decoration: underline;
`;

export const NotFound = styled.main`
  display: grid;
  min-height: 100vh;
  align-content: center;
  justify-items: center;
  padding: 24px;
  background: #eaedf5;
  text-align: center;
`;

export const NotFoundContent = styled.section`
  display: flex;
  width: 100%;
  max-width: 368px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 36px 32px;
  border: 1px solid #d4dbe5;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 4px 40px -16px rgba(0, 0, 0, 0.2);

  h1 {
    color: #000000;
    font-size: 32px;
  }

  p {
    color: #64748b;
  }

  a {
    color: #565eef;
    text-decoration: underline;
  }

  a:hover {
    color: #64748b;
  }
`;
