import logoHeader from '../../assets/logo.png'
import './header.scss'

const Header = () => {
    return (
        <header className='header'>
            <div className='header-div'>
                <div>
                    <img src={logoHeader} alt="logo do site" />
                </div>
                <nav className='header-navigation'>
                    <ul className='navigation-options'>
                        <li>Home</li>
                        <li>Portfólio</li>
                        <li>Orçamento</li>
                        <li>Sobre</li>
                        <li>Contatos</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export { Header }