import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PagesDefault } from "../../Assets/GlobalStyles/pagesDefault";
import { urlAxios } from "../../Assets/URLaxios";
import Input from "../../Components/Inputs";
import { useAuth } from "../../provider/auth";



export default function CreateRPage() {

    const navigate = useNavigate()

    const { type } = useParams()

    const {user} = useAuth()

    const [form, setForm] = useState({
        type: '',
        value: '',
        description: '',
    })

    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }

    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    async function handleSubmit(e){

        e.preventDefault()
        
        const recipe = {...form, type}
        
        try {
            await axios.post(`${urlAxios}/recipes`, recipe, config)
            
            navigate('/home')
        } catch (error) {
            alert(error.response.data)
        }
        

        
    }

    return (

        <PagesDefault>
            <nav>
                <h2>Nova {type}</h2>
            </nav>

            <form onSubmit={handleSubmit}>

            <Input placeH='Valor' type='number' handleForm={handleForm} id='value' step={'0.01'} />
            <Input placeH='Descrição' type='text' handleForm={handleForm} id='description' />
            <Input type='submit' text={`Salvar ${type}`} />

            </form>
        </PagesDefault>
    );
}