import styled from "styled-components";
import { colors } from "../../Assets/GlobalStyles/colors";


export const Board = styled.div`

    display: ${props => (props.userRecipes.length===0)?'flex':'initial'};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 90%; 
    height: 550px;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 20px;
    overflow-y: scroll;
    padding-bottom: 20px;

    h3{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #868686;
    }

    div{
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding-inline: 20px 15px;
        position: static;
        left: 0;
        bottom: 0;

        h4{
            font-size: 20px;
        }
        span{
            font-size: 20px;
            color: ${props => (props.amount>=0)?'green':'red'};
        }
    }
`;

export const Buttons = styled.ul`

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

export const Recipe = styled.li`

min-height: 50px;
display: flex;
justify-content: space-between;
align-items: center;
padding-inline: 10px;
margin: 20px auto;

article{
    display: flex;
    justify-content: end;
    align-items: center;
    min-height: 50px;
}

article:first-child{
    justify-content: start;
    h4{
        word-break: break-all;
    }
}

span{
    font-size: 20px;
    color: #C6C6C6;
}
h4{ 
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 20px;
    color: #000000;
    margin-inline: 10px;
}
ion-icon{
    font-size: 20px;
    color: #C6C6C6;
    cursor: pointer;
}

`;