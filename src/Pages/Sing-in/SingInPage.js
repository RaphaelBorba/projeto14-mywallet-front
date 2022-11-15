import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PagesDefault } from "../../Assets/GlobalStyles/pagesFormat";
import axios from 'axios'
import { urlAxios } from "../../Assets/URLaxios";
import Input from "../../Components/Inputs";
import { useAuth } from "../../provider/auth";


export default function SingInPage() {

    const navigate = useNavigate()

    const {user, setUser} = useAuth()

    const [form, setForm] = useState({
        email:'',
        password:''
    })

    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    async function handleSubmit(e){
        e.preventDefault()

        try {
            const response = await axios.post(`${urlAxios}/sing_in`, form)
            
            setUser({token:response.data}) 

            console.log(user)

            
        } catch (error) {
            alert(error.response.data.message)
        }
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