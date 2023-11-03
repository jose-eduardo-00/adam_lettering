import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './footer.scss'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faBehanceSquare } from '@fortawesome/free-brands-svg-icons/faBehanceSquare'
import { faTiktok } from '@fortawesome/free-brands-svg-icons/faTiktok'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'

const Footer = () => {
    return (
        <footer className='footer'>
            <h1 className='contact-title'>Contatos</h1>
            <div className='contact-options'>
                <a href="#">
                    <FontAwesomeIcon icon={faEnvelope} className='icon' />
                    Email
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faWhatsapp} className='icon' />
                    Whatsapp
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faInstagram} className='icon' />
                    Instagram
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faBehanceSquare} className='icon' />
                    Behance
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faFacebook} className='icon' />
                    Facebook
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faTiktok} className='icon' />
                    TikTok
                </a>
            </div>
        </footer>
    )
}

export { Footer }