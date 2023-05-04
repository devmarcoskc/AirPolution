import styled from "styled-components";

export const PolutionCausesContainer = styled.div<{opacityToShow: number}>`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: rgba(2, 124, 32, 0.4);
    box-shadow: 0px 0px 23px #004526;
    position: relative;
    transition: all ease .9s;
    padding: 15px;
    opacity: ${props => props.opacityToShow === 3 ? '1' : '0'};

    h1 {
        color: #004526;
        font-size: 20px;
        text-align: center;
    }
`;

export const PolutionTextsArea = styled.div`
    display: flex;
    height: auto;
    width: 100%;
    margin-top: 10px;
`

export const LeftSide = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;

    h2 {
        color: #004526;
        font-size: 18px;
        font-weight: bold;
        margin-top: 10px;
    }
    
    p {
        color: white;
        margin-top: 5px;
        font-size: 13px;
    }

    @media(max-width: 768px) {
        h2 {
            font-size: 14px;
            margin-top: 5px;
        }
        p {
            font-size: 11px;
            text-align: justify;
        }
    }
`;

export const RightSide = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-left: 15px;

    h2 {
        color: #004526;
        font-size: 18px;
        font-weight: bold;
        margin-top: 10px;
    }
    
    p {
        color: white;
        margin-top: 5px;
        font-size: 14px;
    }

    @media(max-width: 768px) {
        h2 {
            font-size: 14px;
            margin-top: 5px;
        }
        p {
            font-size: 11px;
            text-align: justify;
        }
    }

`