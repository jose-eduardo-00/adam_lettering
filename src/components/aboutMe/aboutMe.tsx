import fotoDoDono from '../../assets/sobre/foto-do-dono.png'
import './aboutMe.scss'

const AboutMe = () => {
    return (
        <div className='aboutme'>
            <img src={fotoDoDono} alt="foto do dono do site" className="aboutme-img" />
            <p className="aboutme-text">
                Pode me chamar de Adam (nome artístico)<br />
                Amo tornar real os sentimentos através da arte. Faço artes que contam histórias e sentimentos!<br />
                Sou artista, desde 2020, trabalhando com ilustração e handlettering para empresas, comércios, residências e 
                eventos. <br />
                Em 2022 mudei do desenho tradicional para o digital. Hoje em dia, tenho um estilo de design artístico que 
                mescla o design gráfico e ilustrações próprias.<br />
                É um prazer te conhecer!
            </p>
        </div>
    )
}

export { AboutMe }