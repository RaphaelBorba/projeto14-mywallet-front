
import { useNavigate } from "react-router-dom";
import { PagesDefault } from "../../Assets/GlobalStyles/pagesDefault";
import { useAuth } from "../../provider/auth";
import { Board, Buttons } from "./style";



export default function HomePage() {

    const navigate = useNavigate()

    const { user } = useAuth()

    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }

    console.log(user)

    function logout(){
        const log = window.confirm('Deseja sair?')
        if(log){
            navigate('/')
        }
    }

    try {
        


    } catch (error) {
        
    }

    return (

        <PagesDefault>
            {(!user.token) ?
                <p style={{'margin-top': '300px'}} >Você não está logado!! <br /> Clique <a href="/">aqui</a> para voltar ao login</p>
                :
                <>
                    <nav>
                        <h2>Olá, {user.name}</h2>
                        <ion-icon onClick={logout} name="log-out-outline"></ion-icon>
                    </nav>
                    <Board>

                    </Board>
                    <Buttons>
                        <div onClick={()=>navigate('/recipes/entrada')}>
                            <ion-icon name="add-circle-outline"></ion-icon>
                            <span>Nova <br /> entrada</span>
                        </div>
                        <div onClick={()=>navigate('/recipes/saida')}>
                            <ion-icon name="remove-circle-outline"></ion-icon>
                            <span>Nova <br /> saída</span>
                        </div>
                    </Buttons>
                </>}


        </PagesDefault>
    );
}