import styled from "styled-components";


export const PagesDefault = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 400px;
    height: 800px;
    margin: auto;
    

    
    p{
        font-size: 32px;
        color: white;
        font-family: 'Saira Stencil One', cursive;
        margin-bottom: 30px;
        text-align: center;
    }

    form{
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
    }

    h1{
        color: white;
        margin-top: 20px;
        text-align: center;
    }

    nav{
        width: 90%;
        margin: 30px 0;
        color: white;
        display: flex;
        justify-content: space-between;
        font-size: 30px;
        ion-icon{
            cursor: pointer;
        }
    }

    h2{
        text-align: start;
    }

    @media (max-width:400px) {
        &{
            width: 100%;
        }
    }
`;