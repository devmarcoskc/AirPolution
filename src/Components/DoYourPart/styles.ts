import styled from "styled-components";
import { motion } from "framer-motion";

export const DoYourPartContainer = styled(motion.div)<{menuControl: number}>`
    height: 340px;
    width: 700px;
    display: flex;
    flex-direction: column;
    background-color: rgba(2, 124, 32, 0.4);
    box-shadow: 0px 0px 23px #004526;
    overflow: hidden;
    position: relative;
    transition: all ease 0.9s;
    opacity: ${props => props.menuControl === 2 ? '1' : '0'};

    h1 {
        color: #004526;
    }

    .arrow-left {
        position: absolute;
        top: 40%;
        left: 10px;
        z-index: 10;

        svg {
            height: 50px;
            width: 40px;
            color: #004526;
            cursor: pointer;
        }
    }

    .arrow-right {
        position: absolute;
        top: 40%;
        right: 10px;
        z-index: 10;
        
        svg {
            height: 50px;
            width: 40px;
            color: #004526;
            cursor: pointer;
        }
    }

    .dots-area {
        display: flex;
        width: 100%;
        justify-content: center;
        gap: 15px;
    }

    .dots-area .dots {
        color: #004526;
        font-size: 25px;
        cursor: pointer;
    }

    @media(max-width: 768px) {
        height: auto;
        max-width: 320px;
        margin: auto;

        .arrow-right {
            right: 0px;

            svg {
                height: 40px;
                width: 30px;
            }
        }

        .arrow-left {
            left: 0px;

            svg {
                height: 40px;
                width: 30px;
            }
        }

        .dots-area .dots {
            font-size: 18px;
        }
    }
`;

export const Slider = styled.div<{sliderToMove:number}>`
    height: 100%;
    width: 1400px;
    transition: all ease .8s;
    display: flex;
    margin-left: ${(props) => {
        switch(props.sliderToMove) {
            case 0:
                return "0px";
                break;
            case 1:
                return "-700px";
                break;
            case 2: 
                return "-1400px";
                break;
        }
    }};
`;

export const SliderMobile = styled.div<{sliderToMove:number}>`
    height: 100%;
    min-width: 600px;
    transition: all ease .8s;
    display: flex;
    margin-left: ${(props) => {
        switch(props.sliderToMove) {
            case 0:
                return "0px";
                break;
            case 1:
                return "-320px";
                break;
            case 2: 
                return "-640px";
                break;
        }
    }};
`;

export const ItemSlider = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    transition: all ease .8s;
    padding: 5px;
    min-width: 700px;
    height: 100%;
    padding: 15px;

    h1 {
        color: #004526;
        font-size: 19px;
        margin-bottom: 20px;
    }

    .text-and-svg {
        max-width: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        p {
            font-size: 17px;
            color: white;
            text-align: justify;
        }
    
        svg {
            height: 70px;
            width: 80px;
            color: #004526;
        }
    }
    
    @media(max-width: 768px) {
        min-width: 320px;

        h1 {
            text-align: center;
            max-width: 80%;
        }

        .text-and-svg {
            max-width: 70%;

            p {
                font-size: 15px;
                text-align: center;
            }
        }
    }

`