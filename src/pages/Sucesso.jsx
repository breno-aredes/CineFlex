import styled from "styled-components";

export default function Success() {
  return (
    <Container>
      <H1>Pedido feito com sucesso!</H1>
      <H2>Filme e sessão</H2>
      <H3> filme hora</H3>
      <H2>Ingressos</H2>
      <H3>proltrona </H3>
      <H2>Comprador</H2>
      <H3>nome cpf</H3>
      <Button>Voltar pra Home</Button>
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
  color: #247a6b;
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
  color: #293845;
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
  color: #293845;
`;
const Button = styled.div`
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
  background-color: #e8833a;
  border-radius: 3px;
`;
