import { PagesDefault } from "../../Assets/GlobalStyles/pagesFormat";
import Input from "../../Components/Inputs";


export default function SingInPage() {

    function handleSubmit(e){
        e.preventDefault()
    }

    return (

        <PagesDefault>
            <p>MyWallet</p>
            <form onSubmit={handleSubmit} >
                <Input placeH='E-mail' type='text'/>
                <Input placeH='Senha' type='password'/>
                <Input placeH='asdasdaqwe' type='submit' />
            </form>
        </PagesDefault>
    );
}