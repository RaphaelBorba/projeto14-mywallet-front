import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { PagesDefault } from "../../Assets/GlobalStyles/pagesDefault";
import { urlAxios } from "../../Assets/URLaxios";
import Input from "../../Components/Inputs";



export default function CreateRPage() {

    const { type } = useParams()

    const [form, setForm] = useState({
        type: '',
        value: '',
        description: '',
    })

    /* const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    } */

    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    function handleSubmit(e){

        e.preventDefault()
        
        const recipe = {...form, type}
        
        axios.post(`${urlAxios}/recipes`)
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