import styled from "styled-components"
import { Button } from "../Button";

export const Header = () => {

    return(
        <Section> 
            <img src="/img/pokedex.png" alt="Pokedex" />
            <h1>Pokedex React</h1>
            <Button/>
        </Section>
    )
}

const Section = styled.section`
    margin: 20px 50px;
    font-size: 24px;
    display: flex;
    justify-content: space-between;
    text-align: center;

    img {
        width: 80px;
        height:85px;
        text-align:center;
        margin-top: 10px;
    }

    button{
        display:none
    }

`;


