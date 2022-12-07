import styled from "styled-components";
import FILMES from "../mock";
import ASSENTOS from "../mock1";
import Footer from "./footer";

export default function Body() {
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

      <h1>Selecione o(s) assento(s)</h1>

      <SeatsContainer>
        {ASSENTOS.seats.map((A) => (
          <Seats isAvailable={A.isAvailable}>{A.name}</Seats>
        ))}
      </SeatsContainer>
      <SubtitleContainer>
        <Subtitle>
          <Seats isAvailable={"selected"}></Seats>
          <p>Selecionado</p>
        </Subtitle>
        <Subtitle>
          <Seats isAvailable={true}></Seats>
          <p>Disponível</p>
        </Subtitle>
        <Subtitle>
          <Seats></Seats>
          <p>Indisponível</p>
        </Subtitle>
      </SubtitleContainer>
      <InputContainer>
        <p>Nome do comprador:</p>
        <input placeholder="Digite seu nome..."></input>
        <p>CPF do comprador:</p>
        <input placeholder="Digite seu CPF..."></input>
      </InputContainer>

      <Button>Reservar assento(s)</Button>

      <Footer />
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
  margin-left: 30px;
  border-radius: 3px;

  img {
    width: 129px;
    height: 193px;
  }
`;

const SeatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 375px;
  align-items: center;
  justify-content: center;
  padding-left: 24px;
  padding-right: 17px;
`;

const Seats = styled.div`
  height: 26px;
  width: 26px;
  border-radius: 15px;
  margin-right: 7px;
  margin-bottom: 18px;
  background-color: ${(props) =>
    props.isAvailable === "selected"
      ? "#1AAE9E"
      : `${props.isAvailable ? "#C3CFD9" : "#FBE192"}`};
  border: 1px solid
    ${(props) =>
      props.isAvailable === "selected"
        ? "#0E7D71"
        : `${props.isAvailable ? "#808F9D" : "#F7C52B"}`};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 11px;
  letter-spacing: 0.04em;
`;

const SubtitleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 375px;

  p {
    font-family: "Roboto";
    font-size: 13px;
    font-weight: 400;
    line-height: 15px;
    color: #4e5a65;
    margin-top: -10px;
  }
`;
const Subtitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InputContainer = styled.div`
  margin-top: 42px;
  width: 327px;

  input {
    height: 51px;
    width: 327px;
    border-radius: 3px;
    font-family: "Roboto";
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    padding-left: 18px;
    border: 1px solid #afafaf;
    color: #afafaf;
    margin-top: 3px;
    margin-bottom: 7px;
  }
  p {
    font-family: "Roboto";
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    text-align: left;
  }
`;
const Button = styled.div`
  margin-top: 57px;
  height: 42px;
  width: 225px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.04em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background-color: #e8833a;
  border-radius: 3px;
`;
