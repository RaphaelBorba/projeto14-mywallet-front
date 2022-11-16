
import { useNavigate } from "react-router-dom";
import { colors } from "../../Assets/GlobalStyles/colors";
import { PagesDefault } from "../../Assets/GlobalStyles/pagesDefault";
import { useAuth } from "../../provider/auth";
import { Board, Buttons } from "./style";



export default function HomePage() {

    const navigate = useNavigate()

    const { user } = useAuth()

    console.log(user)

    function logout(){
        const log = window.confirm('Deseja sair?')
        if(log){
            navigate('/')
        }
    }

    return (

        <PagesDefault>
            {(!user.token) ?
                <p>Você não está logado!! <br /> Clique <a href="/">aqui</a> para voltar ao login</p>
                :
                <>
                    <nav>
                        <h2>Olá, {user.name}</h2>
                        <ion-icon onClick={logout} name="log-out-outline"></ion-icon>
                    </nav>
                    <Board>

                    </Board>
                    <Buttons>
                        <div>
                            <ion-icon name="add-circle-outline"></ion-icon>
                            <span>Nova <br /> entrada</span>
                        </div>
                        <div>
                            <ion-icon name="remove-circle-outline"></ion-icon>
                            <span>Nova <br /> saída</span>
                        </div>
                    </Buttons>
                </>}


        </PagesDefault>
    );
}