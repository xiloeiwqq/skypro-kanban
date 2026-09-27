import { Link } from "react-router-dom";
import { NotFound } from "./Pages.styled.js";

function NotFoundPage() {
  return (
    <NotFound>
      <h1>404</h1>
      <p>Страница не найдена</p>
      <Link to="/">На главную</Link>
    </NotFound>
  );
}

export default NotFoundPage;
