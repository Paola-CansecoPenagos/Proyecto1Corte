import logoFacebook from '../assets/img/facebook.svg';
import logoTwitter from '../assets/img/twitter.svg';
import logoYoutube from '../assets/img/youtube.svg';
import '../assets/style/footer.css'
import '../components/Contacto.jsx'
import Contacto from '../components/Contacto.jsx';

function Footer() {
    return (
        <footer>                
            <Contacto></Contacto>
            <div className='footer_img'>
                <img src={logoFacebook} alt="Logo Facebook" />
                <img src={logoTwitter} alt="Logo Twitter" />
                <img src={logoYoutube} alt="Logo Youtube" />
            </div>
        </footer>
    );
}

export default Footer;