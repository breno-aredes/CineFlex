import styled from "styled-components";
import Header from "../components/Header";
import FILMES from "../mock";
import GlobalStyle from "../style/GlobalStyle";


export default function TodoMain() {

    alert(FILMES[1].title)
    return (
        <ScreenContainer>

            <GlobalStyle />
            <Header />

        </ScreenContainer>
    );
}


const ScreenContainer = styled.div`
  background-color: #E5E5E5;
  width: 100%;
  height: 100vw;
  `