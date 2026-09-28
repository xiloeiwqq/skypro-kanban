import { Link } from "react-router-dom";
import {
  CardContent,
  CardDate,
  CardGroup,
  CardItem,
  CardSurface,
  CardTitle,
  MoreButton,
  MoreLink,
  Topic,
} from "./Card.styled.js";

function Card({ card }) {
  const parsedDate = new Date(card.date);
  const dateLabel = Number.isNaN(parsedDate.getTime())
    ? card.date
    : parsedDate.toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      });

  return (
    <CardItem>
      <CardSurface>
        <CardGroup>
          <Topic $topic={card.topic}>
            <p>{card.topic}</p>
          </Topic>
          <MoreLink as={Link} to={`/tasks/${card.id}`}>
            <MoreButton>
              <div></div>
              <div></div>
              <div></div>
            </MoreButton>
          </MoreLink>
        </CardGroup>
        <CardContent>
          <Link to={`/tasks/${card.id}`}>
            <CardTitle>{card.title}</CardTitle>
          </Link>
          <CardDate>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <path
                d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125ZM11.7812 4.0625H1.21875M3.25 1.21875V2.03125M9.75 1.21875V2.03125"
                stroke="#94A6BE"
                strokeWidth="0.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>{dateLabel}</p>
          </CardDate>
        </CardContent>
      </CardSurface>
    </CardItem>
  );
}

export default Card;
