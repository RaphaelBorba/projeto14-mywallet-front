import e from "express";
import { PagesDefault } from "../../Assets/GlobalStyles/pagesFormat";
import Input from "../../Components/Inputs";


export default function SingInPage() {

    

    return (

        <PagesDefault>
            <p>MyWallet</p>
            <form >
                <Input placeH='E-mail' type='text'/>
                <Input placeH='Senha' type='password'/>
                <Input placeH='asdasdaqwe' type='submit' />
            </form>
        </PagesDefault>
    );
}