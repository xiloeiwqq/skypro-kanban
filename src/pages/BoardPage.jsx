import Header from "../components/Header/Header.jsx";
import Main from "../components/Main/Main.jsx";

function BoardPage({ children }) {
  return (
    <>
      <Header />
      <Main />
      {children}
    </>
  );
}

export default BoardPage;
