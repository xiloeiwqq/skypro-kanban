import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../useAuth.js";
import {
  AuthError,
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
  const { isAuthenticated, register } = useAuth();
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    const normalizedName = name.trim();
    const normalizedLogin = login.trim();
    if (!normalizedName || !normalizedLogin || !password.trim()) {
      setError("Заполните все поля.");
      return;
    }

    setIsSubmitting(true);
    try {
      await register(normalizedLogin, normalizedName, password);
      navigate("/", { replace: true });
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AuthPage>
      <AuthPanel>
        <AuthTitle>Регистрация</AuthTitle>
        <AuthForm onSubmit={handleSubmit}>
          <AuthInput
            type="text"
            name="name"
            placeholder="Имя"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <AuthInput
            type="email"
            name="login"
            placeholder="Эл. почта"
            value={login}
            onChange={(event) => setLogin(event.target.value)}
            required
          />
          <AuthInput
            type="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          {error && <AuthError role="alert">{error}</AuthError>}
          <AuthSubmit type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Регистрируем..." : "Зарегистрироваться"}
          </AuthSubmit>
        </AuthForm>
        <AuthPrompt>
          Уже есть аккаунт? <AuthLink to="/login">Войдите здесь</AuthLink>
        </AuthPrompt>
      </AuthPanel>
    </AuthPage>
  );
}

export default SignUpPage;
