import { AboutMe } from '../../components/aboutMe/aboutMe'
import { Footer } from '../../components/footer/footer'
import { SkillsAndHobbies } from '../../components/skillsAndHobbies/skillsAndHobbies'
import './sobre.scss'

const Sobre = () => {
    return (
        <main className='about'>
            <h1>Sobre</h1>
            <AboutMe />
            <SkillsAndHobbies />
            <Footer />
        </main>
    )
}

export { Sobre }