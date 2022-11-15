import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PagesDefault } from "../../Assets/GlobalStyles/pagesFormat";
import Input from "../../Components/Inputs";


export default function SingInPage() {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        email:'',
        password:''
    })

    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
        console.log(form)
    }

    function handleSubmit(e){
        e.preventDefault()

        
    }


    return (

        <PagesDefault>
            <p>MyWallet</p>
            <form onSubmit={handleSubmit} >
                <Input placeH='E-mail' type='email' handleForm={handleForm} id='email' />
                <Input placeH='Senha' type='password' handleForm={handleForm} id='password' />
                <Input type='submit' />
            </form>

            <h1 onClick={()=> navigate('/sing_up')} >Primeira vez? Cadastre-se!</h1>
        </PagesDefault>
    );
}