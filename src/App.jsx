import { GlobalStyle, PageWrapper } from "./App.styled.js";
import AppRoutes from "./pages/AppRoutes.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <AppRoutes />
      </PageWrapper>
    </>
  );
}

export default App;