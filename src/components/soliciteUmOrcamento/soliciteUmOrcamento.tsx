import './soliciteUmOrcamento.scss'
import { copyEmail } from "./utils"

const SoliciteUmOrcamento = () => {
    return (
        <>
            <h1 className="orcamento-title">Solicite um Orçamento</h1>
            <p className="orcamento-text">
                Para solicitar um orçamento de uma arte personalizada, envie um e-mail para:
                <button className="btn-email" onClick={copyEmail}>
                    contato.adamn@gmail.com
                    <span className="copy-email">
                        Email Copiado
                    </span>
                </button>
                ou para o número de WhatsApp:
                <a href="http://wa.me/5561994611797?" target="_blank">
                    (61) 9 9461-1797
                </a>
                com as informações citadas abaixo.
            </p>
            <div className="orcamento-info">
                <div>
                    <p><span>O que é?</span>(Arte para quadro ou caneca? Para sua casa ou para sua empresa?)</p>
                </div>
                <div>
                    <p><span>Medidas:</span>(Qual o tamanho do quadro ou da caneca?)</p>
                </div>
                <div>
                    <p><span>Conteúdo da arte:</span>Frases, palavras, tema que gostaria de ter na sua arte (Se não tiver o tema, posso ajudar com o conteúdo).</p>
                </div>
                <div>
                    <p><span>Endereço de entrega:</span>Envie seu endereço com CEP para o cálculo do frete.</p>
                </div>
            </div>
        </>
    )
}

export { SoliciteUmOrcamento }