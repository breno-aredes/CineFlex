import styled from "styled-components";
import FILMES from "../mock";
import Seats from "./assentos";
import Sessions from "./sessoes";
import Success from "./Sucesso";

export default function home() {
  return (
    <BodyContainer>
      <h1>Selecione o filme</h1>

      <PosterContainer>
        {FILMES.map((F) => (
          <ImgContainer>
            <img src={F.posterURL} />
          </ImgContainer>
        ))}
      </PosterContainer>
      <Sessions />
      <Seats />
      <Success />
    </BodyContainer>
  );
}

const BodyContainer = styled.div`
  height: 100%;
  display: flex;
  margin-top: 67px;
  flex-direction: column;
  align-items: center;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110px;
    width: 374px;
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.04em;
    text-align: center;
    color: #293845;
  }
`;

const PosterContainer = styled.div`
  display: flex;
  width: 375px;
  flex-wrap: wrap;
  margin-left: 30px;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 149px;
  height: 209px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px 2px #0000001a;
  margin-bottom: 11px;
  margin-right: 30px;
  border-radius: 3px;

  img {
    width: 129px;
    height: 193px;
  }
`;
