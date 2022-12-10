import { useNavigate } from "react-router";
import styled from "styled-components";

export default function Success(props) {
  const { dataSuccess } = props;

  const cpf = dataSuccess[2]
    .match(/.{1,3}/g)
    .join(".")
    .replace(/\.(?=[^.]*$)/, "-");

  const navigate = useNavigate();

  return (
    <Container>
      <H1>Pedido feito com sucesso!</H1>
      <div data-test="movie-info">
        <H2>Filme e sessão</H2>
        <H3>{dataSuccess[3]}</H3>
        <H3>
          {dataSuccess[5]} {dataSuccess[4]}
        </H3>
      </div>

      <div data-test="seats-info">
        <H2>Ingressos</H2>
        {dataSuccess[0].map((d) => (
          <H3 key={d}>poltrona {d}</H3>
        ))}
      </div>
      <div data-test="client-info">
        <H2>Comprador</H2>
        <H3>Nome: {dataSuccess[1]} </H3>
        <H3>CPF: {cpf} </H3>
      </div>
      <Button data-test="go-home-btn" onClick={() => navigate("/")}>
        Voltar pra Home
      </Button>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  margin-top: 67px;
  flex-direction: column;
  align-items: center;
  background-color: #293845;
  }
`;

const H1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110px;
  width: 180px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.04em;
  font-size: 24px;
  text-align: center;
  color: #bc2f2f;
`;

const H2 = styled.h2`
  width: 375px;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.04em;
  text-align: left;
  margin-left: 30px;
  margin-top: 30px;
  color: white;
`;

const H3 = styled.h3`
  width: 375px;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.04em;
  text-align: left;
  margin-left: 30px;
  margin-top: 3px;
  font-size: 22px;
  font-weight: 400;
  line-height: 26px;
  color: white;
`;
const Button = styled.button`
  border: none;
  margin-top: 60px;
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
  background-color: #bc2f2f;
  border-radius: 3px;
  margin-bottom: 150px;
`;
