import styled from "styled-components";
import { motion } from "framer-motion";

type Props = {
    menuToShow?: number;
    colorToChange?: number;
}

export const Section = styled.section`
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-position: center;

    .background-rgba{
        height: 100%;
        width: 100%;
        background-color: rgba(0, 128, 0, 0.45);
    }

    @media(max-width: 768px) {
        overflow: hidden;
    }
`;

export const Header = styled.header`
    height: 10vh;
    width: 100%;
`

export const Navigation = styled.nav<Props>`
    height: 100%;
    max-width: 60%;
    margin:auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        color: #004526;
        font-weight: bold;
        font-size: 18px;
        cursor: pointer;
        transition: all ease .6s;


        &:hover {
            scale: 1.05;
        }
    }

    @media(max-width: 768px) {
        max-width: 80%;
    }
`;

export const RightSideNav = styled.div`
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
    height: 100%;
`

export const Container = styled.div`
    max-width: 60%;
    height: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;
