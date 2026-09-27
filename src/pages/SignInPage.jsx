import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { signIn } from "../api.js";
import {
  AuthForm,
  AuthError,
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
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (localStorage.getItem("token")) {
    return <Navigate to="/" replace />;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);
    try {
      const { user } = await signIn(login, password);
      localStorage.setItem("token", user.token);
      localStorage.setItem("user", JSON.stringify(user));
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
        <AuthTitle>Вход</AuthTitle>
        <AuthForm onSubmit={handleSubmit}>
          <AuthInput type="text" name="login" placeholder="Эл. почта или логин" autoComplete="username" value={login} onChange={(event) => setLogin(event.target.value)} required />
          <AuthInput type="password" name="password" placeholder="Пароль" value={password} onChange={(event) => setPassword(event.target.value)} required />
          {error && <AuthError role="alert">{error}</AuthError>}
          <AuthSubmit type="submit" disabled={isSubmitting}>{isSubmitting ? "Входим..." : "Войти"}</AuthSubmit>
        </AuthForm>
        <AuthPrompt>
          Нужно зарегистрироваться? <AuthLink to="/register">Регистрируйтесь здесь</AuthLink>
        </AuthPrompt>
      </AuthPanel>
    </AuthPage>
  );
}

export default SignInPage;
