import styled from "styled-components";


export default function Input({placeH, type}) {

    return (

        <InputDefault placeholder={placeH} type={type} />
    );
}


const InputDefault = styled.input`

    width: 90%;
    height: 58px;
    background-color: white;
    font-size: 20px;
    color: #000000;
    border: none;
    border-radius: 5px;
    padding-left: 15px;
    margin-block: 10px;
    
    

`;