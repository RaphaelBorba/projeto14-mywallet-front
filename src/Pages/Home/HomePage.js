import { colors } from "../../Assets/GlobalStyles/colors";
import { PagesDefault } from "../../Assets/GlobalStyles/pagesDefault";
import { useAuth } from "../../provider/auth";
import { Board, Buttons } from "./style";



export default function HomePage() {

    const { user } = useAuth()

    console.log(user)

    return (

        <PagesDefault>
            {(!user.token) ?
                <p>Você não está logado!! <br /> Clique <a href="/">aqui</a> para voltar ao login</p>
                :
                <>
                    <nav>
                        <h2>Olá, {'fulano'}</h2>
                        <ion-icon name="log-out-outline"></ion-icon>
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