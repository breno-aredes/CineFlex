import styled from "styled-components"
import FILMES from "../mock"
import ASSENTOS from "../mock1"

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

            <h1>Selecione os assentos</h1>

            <SeatsContainer>
                {ASSENTOS.seats.map((A) =>
                    <Seats>
                        {A.name}
                    </Seats>
                )}

            </SeatsContainer>

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
    width:375px;
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

const SeatsContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    width: 375px;
    align-items: center;
    justify-content: center;
    padding-left: 24px;
    padding-right: 17px;
`

const Seats = styled.div`
    height: 26px;
    width: 26px;
    border-radius: 15px;
    margin-right:7px;
    margin-bottom:18px;
    background-color: #C3CFD9;
    border: 1px solid #808F9D;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 11px;
    letter-spacing: 0.04em;

`