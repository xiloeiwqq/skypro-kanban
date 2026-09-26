import Card from "../Card/Card.jsx";

function Column({ title, cards, isFirst = false }) {
  return (
    <div className={`main__column${isFirst ? " column" : ""}`}>
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cards.map((category, index) => (
          <Card key={`${category}-${index}`} category={category} />
        ))}
      </div>
    </div>
  );
}

export default Column;
