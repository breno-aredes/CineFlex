import styled from "styled-components"
import FILMES from "../mock"

export default function Body() {
    return (
        <BodyContainer>

            <h1>Selecione o filme</h1>

            <PosterContainer>

                {FILMES.map((F) =>

                    <ImgContainer>
                        <img src={F.posterURL} />
                    </ImgContainer>

                )}

            </PosterContainer>

        </BodyContainer>
    )
}

const BodyContainer = styled.div`
    display: flex;
    margin-top: 67px;
    flex-direction: column;
    
    h1{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 110px;
        width: 374px;
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0.04em;
        text-align: center;
        color: #293845;
    }
`

const PosterContainer = styled.div`
    display:flex;
`

const ImgContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width: 149px;
    height: 209px;
    background-color: #ffffff;
    box-shadow: 0px 2px 4px 2px #0000001A;
    margin-bottom: 11px;
    margin-left:30px;
    border-radius: 3px;

    img{
        width: 129px;
        height: 193px;
    }
`