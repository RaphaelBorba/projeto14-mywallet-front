import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PagesDefault } from "../../Assets/GlobalStyles/pagesDefault";
import { urlAxios } from "../../Assets/URLaxios";
import Input from "../../Components/Inputs";
import { useAuth } from "../../provider/auth";



export default function ChangeRecipePage() {

    const navigate = useNavigate()

    const { state } = useLocation()
    const { type, description, value, _id } = state.recipe

    const { user } = useAuth()

    const [form, setForm] = useState({
        value: value,
        description: description,
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

    async function handleSubmit(e) {

        e.preventDefault()

        const recipe = { ...state.recipe, value: form.value, description: form.description }

        try {
            await axios.put(`${urlAxios}/recipes/${_id}`, recipe, config)

            navigate('/home')
        } catch (error) {
            alert(error.response.data)
        }



    }

    return (

        <PagesDefault>
            <nav>
                <h2>Editar {type}</h2>
            </nav>

            <form onSubmit={handleSubmit}>

                <Input placeH='Valor' type='number' handleForm={handleForm} id='value' step={'0.01'} text={form.value} />
                <Input placeH='Descrição' type='text' handleForm={handleForm} id='description' text={form.description} />
                <Input type='submit' text={`Atualizar ${type}`} />

            </form>
        </PagesDefault>
    );
}