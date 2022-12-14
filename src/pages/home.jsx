import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const request = axios.get(
      "https://mock-api.driven.com.br/api/v8/cineflex/movies"
    );

    request.then((answer) => {
      setMovies(answer.data);
    });
  }, []);

  return (
    <BodyContainer>
      <h1>Selecione o filme</h1>

      <PosterContainer>
        {movies.map((m) => (
          <ImgContainer data-test="movie" key={m.id}>
            <Link to={`/sessoes/${m.id}`}>
              <img src={m.posterURL} />
            </Link>
          </ImgContainer>
        ))}
      </PosterContainer>
    </BodyContainer>
  );
}

const BodyContainer = styled.div`
  height: 100%;
  display: flex;
  margin-top: 67px;
  flex-direction: column;
  align-items: center;
  background-color: #293845;

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
    color: white;
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
  box-shadow: 0px 2px 4px 2px black;
  margin-bottom: 11px;
  margin-right: 30px;
  border-radius: 3px;

  img {
    width: 129px;
    height: 193px;
  }
`;
