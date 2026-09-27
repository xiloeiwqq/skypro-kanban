import Card from "../Card/Card.jsx";
import { Cards, ColumnRoot, ColumnTitle } from "./Column.styled.js";

function Column({ title, cards, isFirst = false }) {
  return (
    <ColumnRoot $isFirst={isFirst}>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <Cards>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </Cards>
    </ColumnRoot>
  );
}

export default Column;
