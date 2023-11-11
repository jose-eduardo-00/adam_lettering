import { Link } from 'react-router-dom'
import logoHeader from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons/faTiktok'
import { faBehance } from '@fortawesome/free-brands-svg-icons/faBehance'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF'
import './header.scss'
import { menuAnimation } from './utils'

const Header = () => {
    return (
        <header className='header'>
            <div className='header-div'>
                <div className='logo'>
                    <img src={logoHeader} alt="logo do site" />
                    <h1>Loja Lettering Arte</h1>
                </div>
                <nav className='header-navigation'>
                    <ul className='navigation-options'>
                        <li>
                            <Link to='/' className='link'>Home</Link>
                        </li>
                        <li>
                            <Link to='/Portfolio' className='link'>Portfolio</Link>
                        </li>
                        <li>
                            <Link to='/Orçamento' className='link'>
                                Orçamento
                            </Link>
                        </li>
                        <li>
                            <Link to='/Sobre' className='link'>
                                Sobre
                            </Link>
                        </li>
                    </ul>
                </nav>
                <FontAwesomeIcon icon={faMobileScreenButton} className='menu-social-media' onClick={menuAnimation} />
                <nav className='navigation-social-media'>
                    <div>
                        <a href="https://www.elo7.com.br/LojaLetteringArte?utm_source=copy&utm_medium=store" target="_blank">
                            <FontAwesomeIcon icon={faBagShopping} className='icon' />
                        </a>
                        <p>Store</p>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/loja_letteringarte/" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} className='icon' />
                        </a>
                        <p>Instagram</p>
                    </div>
                    <div>
                        <a href="https://www.tiktok.com/@loja_letteringarte" target="_blank">
                            <FontAwesomeIcon icon={faTiktok} className='icon' />
                        </a>
                        <p>TikTok</p>
                    </div>
                    <div>
                        <a href="https://www.behance.net/LojaLetteringArte" target="_blank">
                            <FontAwesomeIcon icon={faBehance} className='icon' />
                        </a>
                        <p>Behance</p>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/LojaLetteringArte" target="_blank">
                            <FontAwesomeIcon icon={faFacebookF} className='icon' />
                        </a>
                        <p>Facebook</p>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export { Header }