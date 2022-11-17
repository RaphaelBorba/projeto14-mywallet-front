import styled from "styled-components";



export default function Recipes({ value, date, description, type }) {



    return (

        <Recipe type={type}>
            <article>
                <span>{date.slice(0, 5)}</span>
                <h4>{description}</h4>
            </article>
            <article>
                <h4 style={{ "color": (type === 'saida') ? "red" : "green" }}>{Number(value).toFixed(2)}</h4>
                <ion-icon name="close-outline"></ion-icon>
            </article>
        </Recipe>

    );
}


const Recipe = styled.li`

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
    }

`;