import Column from "../Column/Column.jsx";

const columns = [
  {
    title: "Без статуса",
    cards: ["Web Design", "Research", "Web Design", "Copywriting", "Web Design"],
  },
  { title: "Нужно сделать", cards: ["Research"] },
  { title: "В работе", cards: ["Research", "Copywriting", "Web Design"] },
  { title: "Тестирование", cards: ["Research"] },
  { title: "Готово", cards: ["Research"] },
];

function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {columns.map((column, index) => (
              <Column
                key={column.title}
                title={column.title}
                cards={column.cards}
                isFirst={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
