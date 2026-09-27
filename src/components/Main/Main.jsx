import { useEffect } from "react";
import { Container } from "../../App.styled.js";
import { useTasks } from "../../useTasks.js";
import Column from "../Column/Column.jsx";
import { ErrorMessage, LoadingText, MainBlock, MainContent, MainRoot } from "./Main.styled.js";

const columns = [
  { title: "Без статуса", status: "Без статуса" },
  { title: "Нужно сделать", status: "Нужно сделать" },
  { title: "В работе", status: "В работе" },
  { title: "Тестирование", status: "Тестирование" },
  { title: "Готово", status: "Готово" },
];

function Main() {
  const { tasks, isLoading, error, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <MainRoot>
      <Container>
        <MainBlock>
          <MainContent>
            {isLoading ? (
              <LoadingText role="status">Данные загружаются</LoadingText>
            ) : error ? (
              <ErrorMessage role="alert">
                <p>{error}</p>
                <button type="button" onClick={loadTasks}>Повторить</button>
              </ErrorMessage>
            ) : (
              columns.map((column, index) => (
                <Column
                  key={column.status}
                  title={column.title}
                  cards={tasks.filter((card) => card.status === column.status)}
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
