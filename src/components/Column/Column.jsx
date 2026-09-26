import Card from "../Card/Card.jsx";

function Column({ title, cards, isFirst = false }) {
  return (
    <div className={`main__column${isFirst ? " column" : ""}`}>
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default Column;
