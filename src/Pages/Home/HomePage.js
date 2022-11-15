import { colors } from "../../Assets/GlobalStyles/colors";
import { PagesDefault } from "../../Assets/GlobalStyles/pagesDefault";
import { Board, Buttons } from "./style";



export default function HomePage() {

    return (

        <PagesDefault>

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

        </PagesDefault>
    );
}