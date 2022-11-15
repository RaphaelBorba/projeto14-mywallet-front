import styled from "styled-components";


export const  Board = styled.div`

    width: 90%;
    height: 550px;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 20px;
`;

export const Buttons= styled.div`

    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;