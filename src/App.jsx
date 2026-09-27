import { GlobalStyle, PageWrapper } from "./App.styled.js";
import AppRoutes from "./pages/AppRoutes.jsx";
import { AuthProvider } from "./AuthContext.jsx";
import { TaskProvider } from "./TaskContext.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <AuthProvider>
          <TaskProvider>
            <AppRoutes />
          </TaskProvider>
        </AuthProvider>
      </PageWrapper>
    </>
  );
}

export default App;