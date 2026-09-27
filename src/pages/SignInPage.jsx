import { Navigate, useNavigate } from "react-router-dom";
import {
  AuthForm,
  AuthInput,
  AuthLink,
  AuthPage,
  AuthPanel,
  AuthPrompt,
  AuthSubmit,
  AuthTitle,
} from "./Pages.styled.js";

function SignInPage() {
  const navigate = useNavigate();

  if (localStorage.getItem("isAuthenticated") === "true") {
    return <Navigate to="/" replace />;
  }

  function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem("isAuthenticated", "true");
    navigate("/", { replace: true });
  }

  return (
    <AuthPage>
      <AuthPanel>
        <AuthTitle>Вход</AuthTitle>
        <AuthForm onSubmit={handleSubmit}>
          <AuthInput type="email" name="email" placeholder="Эл. почта" required />
          <AuthInput type="password" name="password" placeholder="Пароль" required />
          <AuthSubmit type="submit">Войти</AuthSubmit>
        </AuthForm>
        <AuthPrompt>
          Нужно зарегистрироваться? <AuthLink to="/register">Регистрируйтесь здесь</AuthLink>
        </AuthPrompt>
      </AuthPanel>
    </AuthPage>
  );
}

export default SignInPage;
