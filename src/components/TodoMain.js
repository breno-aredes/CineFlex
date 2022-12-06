import styled from "styled-components"
import Header from "../components/Header"
import GlobalStyle from "../style/GlobalStyle"
import Body from "./Body";


export default function TodoMain() {

    return (
        <ScreenContainer>

            <GlobalStyle />
            <Header />
            < Body />

        </ScreenContainer>
    );
}


const ScreenContainer = styled.div`
  background-color: #E5E5E5;
  width: 100%;
  height:100%;
  display: flex;
  justify-content:center;
  `