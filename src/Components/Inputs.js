import styled from "styled-components";
import { colors } from "../Assets/GlobalStyles/colors";


export default function Input({placeH, type}) {

    return (

        <InputDefault placeholder={placeH} type={type} required/>
    );
}


const InputDefault = styled.input`

    width: 90%;
    height: 58px;
    background-color: ${props => props.type==='submit'?colors.button:'#ffffff'};
    font-size: 20px;
    color: ${props => props.type==='submit'?'#ffffff':'#000000'};
    border: none;
    border-radius: 5px;
    padding-left: 15px;
    margin-block: 10px;
    
    

`;