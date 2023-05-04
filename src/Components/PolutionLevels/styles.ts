import styled from "styled-components";
import { motion } from "framer-motion";

type Props = {
    setOpacity?: number;
}

export const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const SearchPolutionArea = styled(motion.div)<Props>`
    height: auto;
    width: 70%;
    display: flex;
    padding: 15px;
    flex-direction: column;
    background-color: rgba(2, 124, 32, 0.4);
    box-shadow: 0px 0px 30px #004526;
    transition: all ease 0.9s;
    opacity: ${props => props.setOpacity === 1 ? '1' : '0'};

    h2 {
        color: white;
        font-weight: 300;
        margin-top: 20px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    h1 {
        font-weight: 600;
        color: #004526;
        font-size: 20px;
    }

    label {
        font-size: 19px;
        color: #004526;
        font-weight: bold;
    }

    .lat-and-lon-flex-div{
        display: flex;
        gap: 20px;
        width: 100%;
        justify-content: space-between;
    }

    .lat-and-lon-flex-column{
        display: flex;
        flex-direction: column;
        gap: 10px;

        input {
            width: 220px;
            outline: none;
            padding: 5px;
            color: #004526;
            font-weight: bold;
            border: none;
            background-color: rgba(0, 0, 0, 0.1);
        }
    }

    h2 {
        font-weight: 300;
        font-size: 17px;
    }

    span {
        font-size: 16px;
        color:#004526;
        font-weight: bold;
    }

    .error-condition {
        color: red;
        font-weight: bold;
        font-size: 13px;
    }

    button {
        border: none;
        padding: 17px;
        background-color: none;
        cursor: pointer;
        width: 150px;
        border-radius: 10px;
        background-color: #004526;
        color: white;
        transition: all ease .8s;
        opacity: 0.88;

        &:hover {
            opacity: 1;
            background-color: #01411C;
        }
    }
`;

export const ResultPolutionArea = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    padding: 15px;
    flex-direction: column;
    background-color: rgba(2, 124, 32, 0.4);
    box-shadow: 0px 0px 30px #004526;
    margin-bottom: 40x;

    h1 {
        color:#004526;
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: 600;
    }

    h2 {
        color: white;
        font-weight: 300;
        margin-top: 20px;
    }

    table {
        border-collapse: collapse;
        width: 100%;
    }

    thead th{
        background-color: rgba(0, 128, 0, 0.4);
    }

    thead tr {
        color: white;
        text-align: left;
        border: none;
        font-weight: bold;
    }

    th, td {
        padding: 10px; 10px;
        font-size: 15px;
    }

    td {
        color: white;
        font-weight: bold;
    }

    tbody, tr {
        border-bottom: 1px solid rgb(0, 128, 0);
    }

    tbody tr:nth-of-type(even) {
        background-color: rgba(0, 50, 0, 0.4);
    }

    h3 {
        margin-top: 5px;
        color: #004526;
        font-weight: bold;
    }

    p {
        margin-top: 5px;
        color: white;
        text-align: justify;
    }

    button {
        border: none;
        padding: 15px;
        background-color: none;
        cursor: pointer;
        width: 100px;
        border-radius: 10px;
        background-color: #004526;
        color: white;
        transition: all ease .8s;
        opacity: 0.88;
        margin-top: 10px;

        &:hover {
            opacity: 1;
            background-color: #01411C;
        }
    }
`;