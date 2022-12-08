import { useParams } from "react-router";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Sessions() {
  const movie = useParams();

  const [session, setSessions] = useState(undefined);

  useEffect(() => {
    const request = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/movies/${movie.idMovie}/showtimes`
    );

    request.then((answer) => {
      setSessions(answer.data);
    });
  }, []);

  if (session === undefined) {
    return <Loading>...carregando</Loading>;
  }

  return (
    <SessionsContainer>
      <h1>Selecione o horário</h1>

      {session.days.map((S) => (
        <div key={S.id}>
          <DateAndDay>
            {S.weekday} - {S.date}
          </DateAndDay>
          <ContainerButtons>
            {S.showtimes.map((show) => (
              <Button key={show.id}>{show.name}</Button>
            ))}
          </ContainerButtons>
        </div>
      ))}
    </SessionsContainer>
  );
}

const SessionsContainer = styled.div`
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

const Loading = styled.div`
  margin-top: 100px;
`;
