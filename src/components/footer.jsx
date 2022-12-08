import styled from "styled-components";

export default function Footer(props) {
  const { title, img, day, hour } = props;

  return (
    <FooterContainer>
      <ImgContainer>
        <img src={img} />
      </ImgContainer>
      <TextContainer>
        <p>{title} </p>
        <p>{day ? `${day} - ${hour}` : ""}</p>
      </TextContainer>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  height: 117px;
  width: 100%;
  background-color: #dfe6ed;
  border: 1px solid #9eadba;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
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
