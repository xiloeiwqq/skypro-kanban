import { Link } from "react-router-dom";
import { NotFound, NotFoundContent } from "./Pages.styled.js";

function NotFoundPage() {
  return (
    <NotFound>
      <NotFoundContent>
        <h1>404</h1>
        <p>Страница не найдена</p>
        <Link to="/">На главную</Link>
      </NotFoundContent>
    </NotFound>
  );
}

export default NotFoundPage;
