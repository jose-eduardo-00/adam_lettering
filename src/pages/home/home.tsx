import { Slider } from '../../components/slider/slider'
import './home.scss'

const Home = () => {
    return (
        <main className='home'>
            <div className='home-text'>
                <p>Olá, seja bem-vindo.</p>
                <p>Pode me chamar de Adam (Nome artístico).</p>
                <p>Divirta-se explorando o meu trabalho pelo site.</p>
                <p>A loja online e todas as redes sociais estão nos</p>
                <p>botões no canto inferior direito do banner acima.</p>
            </div>
            <Slider />
        </main>
    )
}

export { Home }