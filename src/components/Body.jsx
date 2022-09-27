import normales from '../assets/img/normales.jpg';
import grandes from '../assets/img/grandes.jpg';
import maquina from '../assets/img/maquina.jpg';
import vaso from '../assets/img/vaso.jpg';
import figuras from '../assets/img/figuras.jpg';
import mesaDulces from '../assets/img/mesaDulces.jpg';
import '../assets/style/body.css';

function Body(){
    return(
        <body>
            <p class='cajaText'>PEDIDOS COMUNMENTE</p>
                <div class="flex-container">
                    <div>
                        <img src={normales}></img><p class='productos'>Normales</p>
                    </div>
                    <div>
                    <img src={grandes}></img><p class='productos'>Grandes</p>
                    </div>
                    <div> <img src={maquina}></img><p class='productos'>Maquina</p></div>
                </div>
                <p class='cajaText'>PEDIDOS ESPECIALES</p>
                <div class="flex-container">
                    <div>
                        <img src={figuras}></img><p class='productos'>Figuras</p>
                    </div>
                    <div>
                    <img src={mesaDulces}></img><p class='productos'>Mesa de dulces</p>
                    </div>
                    <div> <img src={vaso}></img><p class='productos'>Vasos</p></div>
                </div>
        </body>
    );
}
export default Body;