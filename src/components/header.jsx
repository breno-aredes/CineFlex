import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
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
