
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PagesDefault } from "../../Assets/GlobalStyles/pagesDefault";
import { urlAxios } from "../../Assets/URLaxios";
import Recipes from "./Recipes";
import { useAuth } from "../../provider/auth";
import { Board, Buttons } from "./style";



export default function HomePage() {

    const navigate = useNavigate()

    const [userRecipes, setUserRecipes] = useState([])
    const [amount, setAmount] = useState(0)
    const [renderRecipes, setRenderRecipes] = useState(true)

    const { user } = useAuth()

    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }

    function logOut() {
        const logout = window.confirm('Deseja sair?')
        if (logout) {
            navigate('/')
        }
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const recipes = await axios.get(`${urlAxios}/recipes`, config)
                setUserRecipes(recipes.data)
                countAmount(recipes.data)
                console.log(recipes.data)

            } catch (error) {
                console.log(error)
            }
        }
        fetchData();

        function countAmount(userRecipes) {
            let val = 0
            userRecipes.forEach((e) => {
                if (e.type === 'entrada') {
                    val += Number(e.value)
                } else {
                    val -= Number(e.value)
                }
            })
            setAmount(val)
        }


        // eslint-disable-next-line
    }, [renderRecipes]);






    return (

        <PagesDefault>
            {(!user.token) ?
                <p style={{ 'margin-top': '300px' }} >Você não está logado!! <br /> Clique <a href="/">aqui</a> para voltar ao login</p>
                :
                <>
                    <nav>
                        <h2>Olá, {user.name}</h2>
                        <ion-icon onClick={logOut} name="log-out-outline"></ion-icon>
                    </nav>
                    <Board amount={amount} userRecipes={userRecipes}>
                        {(userRecipes.length === 0) ? <h3>Não há registro de <br /> entrada ou saida</h3>
                            :

                            userRecipes.map((e, i) => <Recipes
                                setRenderRecipes={setRenderRecipes}
                                renderRecipes={renderRecipes}
                                key={i}
                                value={e.value}
                                _id={e._id}
                                date={e.date}
                                description={e.description}
                                type={e.type} />)

                        }
                        {(userRecipes.length === 0) ? <></>
                            :
                            <div>
                                <h4>Saldo</h4>
                                <span>{amount.toFixed(2)}</span>
                            </div>
                        }
                    </Board>
                    <Buttons>
                        <div onClick={() => navigate('/recipes/entrada')}>
                            <ion-icon name="add-circle-outline"></ion-icon>
                            <span>Nova <br /> entrada</span>
                        </div>
                        <div onClick={() => navigate('/recipes/saida')}>
                            <ion-icon name="remove-circle-outline"></ion-icon>
                            <span>Nova <br /> saída</span>
                        </div>
                    </Buttons>
                </>}
        </PagesDefault>
    );
}