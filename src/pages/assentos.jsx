import styled from "styled-components";
import ASSENTOS from "../mock1";
import Footer from "../components/footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Seats() {
  const sessions = useParams();

  const [seat, setSeat] = useState(undefined);

  useEffect(() => {
    const request = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessions.idSession}/seats`
    );

    request.then((answer) => {
      setSeat(answer.data);
    });
  }, []);

  if (seat === undefined) {
    return;
  }

  return (
    <Container>
      <h1>Selecione o(s) assento(s)</h1>

      <SeatsContainer>
        {seat.seats.map((s) => (
          <Seat key={s.id} isAvailable={s.isAvailable}>
            {s.name}
          </Seat>
        ))}
      </SeatsContainer>

      <SubtitleContainer>
        <Subtitle>
          <Seat isAvailable={"selected"}></Seat>
          <p>Selecionado</p>
        </Subtitle>
        <Subtitle>
          <Seat isAvailable={true}></Seat>
          <p>Disponível</p>
        </Subtitle>
        <Subtitle>
          <Seat></Seat>
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
    </Container>
  );
}

const Container = styled.div`
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

const SeatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 375px;
  align-items: center;
  justify-content: center;
  padding-left: 24px;
  padding-right: 17px;
`;

const Seat = styled.div`
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
    box-sizing: border-box;
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
