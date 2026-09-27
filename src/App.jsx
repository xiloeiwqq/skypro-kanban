import { GlobalStyle, PageWrapper } from "./App.styled.js";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import PopExit from "./components/PopExit/PopExit.jsx";
import PopBrowse from "./components/PopBrowse/PopBrowse.jsx";
import PopNewCard from "./components/PopNewCard/PopNewCard.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header />
        <Main />
      </PageWrapper>
    </>
  );
}

export default App;