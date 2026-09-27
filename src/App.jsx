import { GlobalStyle, PageWrapper } from "./App.styled.js";
import AppRoutes from "./pages/AppRoutes.jsx";
import { TasksProvider } from "./TasksContext.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <TasksProvider>
          <AppRoutes />
        </TasksProvider>
      </PageWrapper>
    </>
  );
}

export default App;