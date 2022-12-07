import styled from "styled-components";

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <ImgContainer>
          <img src="https://br.web.img2.acsta.net/r_1920_1080/pictures/14/04/09/13/23/045814.jpg" />
        </ImgContainer>
        <TextContainer>
          <p>nome do filme </p>
          <p>dia-da-semana e hora </p>
        </TextContainer>
      </FooterContainer>
    </>
  );
}

const FooterContainer = styled.div`
  height: 117px;
  width: 375px;
  background-color: #dfe6ed;
  border: 1px solid #9eadba;
  margin-top: 30px;
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 89px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px 2px #0000001a;
  margin-bottom: 11px;
  margin-right: 14px;
  border-radius: 3px;
  margin-left: 10px;

  img {
    width: 48px;
    height: 72px;
  }
`;
const TextContainer = styled.div`
  align-items: center;
  p {
    font-family: "Roboto";
    font-size: 26px;
    font-weight: 400;
    line-height: 30px;
    text-align: left;
    color: #293845;
    line-height: 30px;
  }
`;
