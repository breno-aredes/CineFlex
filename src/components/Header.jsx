import styled from "styled-components"

export default function Header() {
    return (
        <HeaderContainer>
            <h1>CINEFLEX</h1>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    background-color: #C3CFD9;
    color: #E8833A;
    width: 100%;
    position: absolute;
    height: 67px;
    left: 0px;
    top: 0px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    font-weight: 400;
    line-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

`