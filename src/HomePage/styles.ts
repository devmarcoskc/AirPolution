import styled from "styled-components";

type Props = {
    coResult?: number;
    nh3Result?: number;
    no2Result?: number;
    o3Result?: number;
    pm2Result?: number;
    pm10Result?: number;
    so2Result?: number;
}

export const Section = styled.section`
    height: 100vh;
    width: 100%;
    position: relative;
    overflow:hidden;
    background-size: cover;
    background-position: center;

    .background-rgba{
        height: 100%;
        width: 100%;
        background-color: rgba(0, 128, 0, 0.43);
    }
`;

export const Header = styled.header`
    height: 10vh;
    width: 100%;
`

export const Navigation = styled.nav`
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
        transition: all ease .8s;


        &:hover {
            color: #01411C;
            text-decoration: underline;
        }
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
    height: 100%;
    max-width: 60%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SearPolutionArea = styled.div`
    height: auto;
    width: 80%;
    display: flex;
    padding: 15px;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 20px #004526;

    h1 {
        color: white;
        text-align: center;
    }

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
    gap: 20px;

    h1 {
        font-weight: 300;
    }

    label {
        font-size: 19px;
        color: white;
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
        }
    }

    h2 {
        font-weight: 300;
        font-size: 17px;
    }

    span {
        font-size: 15px;
        color: white;
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

export const ResultPolutionArea = styled.div<Props>`
    height: auto;
    width: 100%;
    display: flex;
    padding: 15px;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 23px #004526;
    margin-bottom: 60px;

    h1 {
        color:#004526;
        margin-bottom: 20px;
        text-align: center;
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
        margin-top: 10px;
        color: white;
        font-weight: 300;
    }

    p {
        margin-top: 10px;
        color: white;
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