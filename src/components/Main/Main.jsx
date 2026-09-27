import { useEffect, useState } from "react";
import cardsData from "../../../data.js";
import { Container } from "../../App.styled.js";
import Column from "../Column/Column.jsx";
import { LoadingText, MainBlock, MainContent, MainRoot } from "./Main.styled.js";

const columns = [
  { title: "Без статуса", status: "Без статуса" },
  { title: "Нужно сделать", status: "Нужно сделать" },
  { title: "В работе", status: "В работе" },
  { title: "Тестирование", status: "Тестирование" },
  { title: "Готово", status: "Готово" },
];

function Main() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => setIsLoading(false), 1000);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <MainRoot>
      <Container>
        <MainBlock>
          <MainContent>
            {isLoading ? (
              <LoadingText role="status">Данные загружаются</LoadingText>
            ) : (
              columns.map((column, index) => (
                <Column
                  key={column.status}
                  title={column.title}
                  cards={cardsData.filter((card) => card.status === column.status)}
                  isFirst={index === 0}
                />
              ))
            )}
          </MainContent>
        </MainBlock>
      </Container>
    </MainRoot>
  );
}

export default Main;
