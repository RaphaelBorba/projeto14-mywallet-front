import styled from "styled-components";
import { colors } from "../../Assets/GlobalStyles/colors";


export const Board = styled.div`

    width: 90%;
    height: 550px;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 20px;
`;

export const Buttons = styled.div`

    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div{
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 48%;
        height: 114px;
        background: ${colors.button};
        border-radius: 5px;
        color: white;
        padding: 10px;
        font-size: 20px;
        font-weight: 700;
        line-height: 25px;
        ion-icon {
            font-size: 30px;
        }       
    }
`;