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

function SignUpPage() {
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
        <AuthTitle>Регистрация</AuthTitle>
        <AuthForm onSubmit={handleSubmit}>
          <AuthInput type="text" name="name" placeholder="Имя" required />
          <AuthInput type="email" name="email" placeholder="Эл. почта" required />
          <AuthInput type="password" name="password" placeholder="Пароль" required />
          <AuthSubmit type="submit">Зарегистрироваться</AuthSubmit>
        </AuthForm>
        <AuthPrompt>
          Уже есть аккаунт? <AuthLink to="/login">Войдите здесь</AuthLink>
        </AuthPrompt>
      </AuthPanel>
    </AuthPage>
  );
}

export default SignUpPage;
