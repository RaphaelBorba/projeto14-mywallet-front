import { useState } from "react";
import { PagesDefault } from "../../Assets/GlobalStyles/pagesFormat";
import Input from "../../Components/Inputs";


export default function SingInPage() {

    const [form, setForm] = useState({
        email:'',
        password:''
    })

    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    function handleSubmit(e){
        e.preventDefault()


    }

    return (

        <PagesDefault>
            <p>MyWallet</p>
            <form onSubmit={handleSubmit} >
                <Input placeH='E-mail' type='email' handleForm={handleForm} />
                <Input placeH='Senha' type='password' handleForm={handleForm} />
                <Input type='submit' />
            </form>
        </PagesDefault>
    );
}