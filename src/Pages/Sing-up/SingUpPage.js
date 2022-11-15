import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PagesDefault } from "../../Assets/GlobalStyles/pagesFormat";
import Input from "../../Components/Inputs";
import axios from 'axios'
import { urlAxios } from "../../Assets/URLaxios";


export default function SingInPage() {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        name:'',
        email: '',
        password: '',
        confirmPassword: ''

    })

    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    async function handleSubmit(e) {
        e.preventDefault()


        if(form.password !== form.confirmPassword){
            alert('Senhas precisam ser iguais')
        }else{
            
            try {
                
                delete form.confirmPassword
                
                await axios.post(`${urlAxios}/sing_up`, form)

                alert('Registrado')
                
                navigate('/')

            } catch (error) {
                
                error.response.data.forEach(e => {
                    alert(e)
                });
            }
            
        }
        

    }


    return (

        <PagesDefault>
            <p>MyWallet</p>
            <form onSubmit={handleSubmit} >
                <Input placeH='Nome' type='text' handleForm={handleForm} id='name' />
                <Input placeH='E-mail' type='email' handleForm={handleForm} id='email' />
                <Input placeH='Senha' type='password' handleForm={handleForm} id='password' />
                <Input placeH='Confirme a senha' type='password' handleForm={handleForm} id='confirmPassword' />
                <Input type='submit' />
            </form>

            <h1 onClick={() => navigate('/')} >Primeira vez? Cadastre-se!</h1>
        </PagesDefault>
    );
}