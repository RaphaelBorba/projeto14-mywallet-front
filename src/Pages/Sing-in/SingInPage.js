import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PagesDefault } from "../../Assets/GlobalStyles/pagesDefault";
import axios from 'axios'
import { urlAxios } from "../../Assets/URLaxios";
import Input from "../../Components/Inputs";
import { useAuth } from "../../provider/auth";


export default function SingInPage() {

    const navigate = useNavigate()

    const { setUser } = useAuth()

    useEffect(()=>{

        SingInLocalStorage()
// eslint-disable-next-line
    },[])


    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    function SingInLocalStorage(){
    
        if(localStorage.getItem('user')){
    
            setUser(JSON.parse(localStorage.getItem('user')))
    
            navigate('/home')
            
        }
    
    }

    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            const response = await axios.post(`${urlAxios}/sing_in`, form)

            setUser(response.data)

            const lsUser = JSON.stringify(response.data)
            localStorage.setItem("user", lsUser)

            navigate('/home')


        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (

        <PagesDefault login={true}>
            <p>MyWallet</p>
            <form onSubmit={handleSubmit} >
                <Input placeH='E-mail' type='email' handleForm={handleForm} id='email' />
                <Input placeH='Senha' type='password' handleForm={handleForm} id='password' />
                <Input type='submit' text='Entrar' />
            </form>

            <h1 onClick={() => navigate('/sing_up')} >Primeira vez? Cadastre-se!</h1>
        </PagesDefault>
    );
}