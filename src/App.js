import styled from "styled-components";
import Header from "./components/Header";
import GlobalStyle from "./style/GlobalStyle";


function App() {
  return (
    <ScreenContainer>

      <GlobalStyle />
      <Header />

    </ScreenContainer>
  );
}

export default App;

const ScreenContainer = styled.div`
  background-color: #E5E5E5;
width: 100%;
height: 100vw;
  `