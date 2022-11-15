import { PagesDefault } from "../../Assets/GlobalStyles/pagesDefault";
import { Board, Buttons } from "./style";



export default function HomePage(){

    return(

        <PagesDefault>

            <nav><h2>Olá, {'fulano'}</h2></nav>
            <Board>

            </Board>
            <Buttons>
                <div>
                    
                </div>
            </Buttons>

        </PagesDefault>
    );
}