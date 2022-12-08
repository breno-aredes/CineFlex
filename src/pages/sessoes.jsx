import styled from "styled-components";
import SESSOES from "../mock2";

export default function Sessions() {
  return (
    <>
      <h1>Selecione o horário</h1>

      {SESSOES.days.map((S) => (
        <>
          <DateAndDay>
            {S.weekday} - {S.date}
          </DateAndDay>
          <ContainerButtons>
            {S.showtimes.map((show) => (
              <Button>{show.name}</Button>
            ))}
          </ContainerButtons>
        </>
      ))}
    </>
  );
}

const DateAndDay = styled.p`
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0.02em;
  text-align: left;
  margin-bottom: 22px;
  width: 375px;
  margin-left: 24px;
`;

const ContainerButtons = styled.div`
  display: flex;
  width: 375px;
  margin-left: 24px;
`;
const Button = styled.div`
  height: 43px;
  width: 82px;
  margin-bottom: 22px;
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
  margin-right: 8px;
`;
