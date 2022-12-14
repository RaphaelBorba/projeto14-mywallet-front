
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

    const { user, setUser } = useAuth()

    const config = {
        headers: {
            Authorization: `Bearer ${(localStorage.getItem('user'))? JSON.parse(localStorage.getItem('user')).token :user.token}`
        }
    }
    
    function logOut() {
        
        const logout = window.confirm('Deseja sair?')
        
        if (logout) {
            localStorage.removeItem('user')
            navigate('/')
        }
    }
    
    useEffect(() => {        

        takeUserLocalStorage()
        
        async function fetchData() {
            
            
            try {
                
                const recipes = await axios.get(`${urlAxios}/recipes`, config)
                setUserRecipes(recipes.data)
                countAmount(recipes.data)

            } catch (error) {
                console.log(error)
            }
        }
        
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

        function takeUserLocalStorage(){

            if(localStorage.getItem('user')){
                setUser(JSON.parse(localStorage.getItem('user')))
                return
            }
        }
        
        fetchData();
        
        // eslint-disable-next-line
    }, [renderRecipes]);






    return (

        <PagesDefault>
            {(!user.token) ?
                <p style={{ 'margin-top': '300px' }} >Voc?? n??o est?? logado!! <br /> Clique <a href="/">aqui</a> para voltar ao login</p>
                :
                <>
                    <nav>
                        <h2>Ol??, {user.name}</h2>
                        <ion-icon onClick={logOut} name="log-out-outline"></ion-icon>
                    </nav>
                    <Board amount={amount} userRecipes={userRecipes}>
                        {(userRecipes.length === 0) ? <h3>N??o h?? registro de <br /> entrada ou saida</h3>
                            :

                            userRecipes.map((e, i) => <Recipes
                                setRenderRecipes={setRenderRecipes}
                                recipe={e}
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
                            <span>Nova <br /> sa??da</span>
                        </div>
                    </Buttons>
                </>}
        </PagesDefault>
    );
}