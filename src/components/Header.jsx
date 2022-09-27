import logo from '../assets/img/algodones.png'
import '../assets/style/header.css'

function Header() {
  return (
    <header>
        <img src={logo}></img>
        <h1>ALGODONES DE AZUCAR</h1>
        <button name="button">Solicitar pedido</button>
    </header>
  );
}
export default Header;
