import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faGamepad, faMusic, faPencil, faQuestion } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './skillsAndHobbies.scss'

const SkillsAndHobbies = () => {
    return (
        <section className="skills-hobbies">
            <div className="skills">
                <h3>Habilidades</h3>
                <div>
                    <FontAwesomeIcon icon={faQuestion} className="icon" />
                    <p>Designer artístico</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faPencil} className="icon" />
                    <p>Ilustrador</p>
                </div>
            </div>
            <div className="hobbies">
                <h3>Hobby's</h3>
                <div className="hobbies">
                    <div className="gamepad">
                        <FontAwesomeIcon icon={faGamepad} className="icon" />
                        <p>Video Games</p>
                    </div>
                    <div className="pencil">
                        <FontAwesomeIcon icon={faPencil} className="icon" />
                        <p>Desenhar</p>
                    </div>
                    <div className="youtube">
                        <FontAwesomeIcon icon={faYoutube} className="icon" />
                        <p>Filmes e Séries</p>
                    </div>
                    <div className="music">
                        <FontAwesomeIcon icon={faMusic} className="icon" />
                        <p>Música</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { SkillsAndHobbies }