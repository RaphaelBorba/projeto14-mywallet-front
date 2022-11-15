import { PagesDefault } from "../../Assets/GlobalStyles/pagesFormat";
import Input from "../../Components/Inputs";


export default function SingInPage() {

    return (

        <PagesDefault>
            <p>MyWallet</p>
            <form>
                <Input placeH='E-mail' type='text' required/>
                <Input placeH='Senha' type='password' />
            </form>
        </PagesDefault>
    );
}