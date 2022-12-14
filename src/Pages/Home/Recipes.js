import axios from "axios";
import { useNavigate } from "react-router-dom";
import { urlAxios } from "../../Assets/URLaxios";
import { useAuth } from "../../provider/auth";
import {Recipe} from './style'



export default function Recipes({ value, date, description, type, _id, setRenderRecipes, renderRecipes, recipe }) {

    const { user } = useAuth()
    const navigate = useNavigate()

    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }

    async function deleteRecipe() {

        const deleteOrder = window.confirm('Deseja deletar este valor?')

        if (deleteOrder) {
            try {
                await axios.delete(`${urlAxios}/recipes/${_id}`, config)
                setRenderRecipes(!renderRecipes)

            } catch (error) {
                alert(error.response.data)
            }
        }


    }

    function attRecipe(){

        navigate('/att_recipe', {state: {recipe}})
    }


    return (

        <Recipe type={type}>
            <article>
                <span>{date.slice(0, 5)}</span>
                <h4 onClick={attRecipe} >{description}</h4>
            </article>
            <article>
                <h4 style={{ "color": (type === 'saida') ? "red" : "green" }}>{Number(value).toFixed(2)}</h4>
                <ion-icon onClick={deleteRecipe} name="close-outline"></ion-icon>
            </article>
        </Recipe>

    );
}


