import styled from "styled-components";


export const PagesDefault = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 400px;
    height: 800px;
    margin: auto;
    border: 1px solid black;

    
    p{
        font-size: 32px;
        color: white;
        font-family: 'Saira Stencil One', cursive;
        margin-bottom: 40px;
    }

    form{
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width:400px) {
        &{
            width: 100%;
        }
    }
`;