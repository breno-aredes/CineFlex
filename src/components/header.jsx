import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  function backPage() {
    navigate(-1);
  }

  return (
    <HeaderContainer>
      {location.pathname != "/" && (
        <BackButton onClick={() => backPage()} data-test="go-home-header-btn">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </BackButton>
      )}
      <h1>CINEFLEX</h1>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  background-color: #c3cfd9;
  color: #e8833a;
  width: 100%;
  height: 67px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 34px;
  font-weight: 400;
  line-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0px;
  top: 0px;
`;

const BackButton = styled.button`
  position: absolute;
  left: 4px;
  top: 4px;
  font-size: 34px;
  height: 55px;
  width: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c3cfd9;
  color: #e8833a;
  border: none;
`;
