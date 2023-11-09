import { useEffect } from 'react'
import pinturaEPoesia from '../../assets/quadros/quadro-a_pintura_e_poesia_sem_palavras.png'
import depoisDoCafe from '../../assets/quadros/quadro-depois_do_cafe_eu_me_expresso.png'
import despoisDoCafe2 from '../../assets/quadros/quadro-2-depois_do_cafe_eu_me_expresso.png'
import foqueNoProcesso from '../../assets/quadros/quadro-foque_no_processo.png'
import tenhoOMelhorPaiDoMundo from '../../assets/quadros/quadro-eu_tenho_o_melhor_pai_do_mundo.png'
import meuPapaiEOMelhor from '../../assets/quadros/quadro-o_meu_papai_e_o_melhor_do_mundo.png'
import valorizeseGratis from '../../assets/quadros/quadro-valorize_se_gratis.png'
import './quadros.scss'
import { imgQuadroSelect } from './utils'

// terminar de fazer o responsivo do site

const Quadros = () => {

    useEffect(() => {
        imgQuadroSelect()
    }, [])

    return (
        <section className='quadros'>
            <h3 className='quadros-title'>Quadros</h3>
            <div className='quadros-img'>
                <div className='div-img'>
                    <img src={pinturaEPoesia} alt="quadro pintura é poesia" className='img' />
                    <a className="btn-comprar" href="https://www.elo7.com.br/quadro-a-pintura-e-poesia-sem-palavras/dp/1C660A6#dvbc=1&dwhc=1&dcc=0&lpfcm=0&sedk=1&osrlt7=0&sek=0&fsfv=0&wch=0&sbc=1&wcld=1&oppb=0&ses=1&pssb=0&seb=0&dtm1=1&usb=1&dvsbs=1&sei=1&pcpe=1&dtm2=0&df=d&hpa=0&hsotb=0&srwv=1&sewb=0&sepi=0&vpl=1&wppbd=0&wsld=1&utp=0&dld=1&uje=0&carf=1&lvbbpm=1&sgta=1&wpm=0&sed=1&sea=0&pdp=0&wppbm=0&doar=0&csdm=0&dhbc=0&sep=1&osrl=0&disc=1&sew=0&psedm=0&hsv=1&cscws=0&uso=o&vsbs=1&deac=0&droam=0&lvbbob=0&psews=0&set=0&accb=1&sseov=0" target="_blank">Comprar</a>
                </div>
                <div className='div-img'>
                    <img src={depoisDoCafe} alt="quadro depois do café" className='img' />
                    <a className="btn-comprar" href="https://www.elo7.com.br/quadro-depois-do-cafe-eu-me-expresso/dp/1C6118C#dvbc=1&dwhc=1&dcc=0&lpfcm=0&sedk=1&osrlt7=0&sek=0&fsfv=0&wch=0&sbc=1&wcld=1&oppb=0&ses=1&pssb=0&seb=0&dtm1=1&usb=1&dvsbs=1&sei=1&pcpe=1&dtm2=0&df=d&hpa=0&hsotb=0&srwv=1&sewb=0&sepi=0&vpl=1&wppbd=0&wsld=1&utp=0&dld=1&uje=0&carf=1&lvbbpm=1&sgta=1&wpm=0&sed=1&sea=0&pdp=0&wppbm=0&doar=0&csdm=0&dhbc=0&sep=1&osrl=0&disc=1&sew=0&psedm=0&hsv=1&cscws=0&uso=d&vsbs=1&deac=0&droam=0&lvbbob=0&psews=0&set=0&accb=1&sseov=0" target="_blank">Comprar</a>
                </div>
                <div className='div-img'>
                    <img src={despoisDoCafe2} alt="quadro 2 depois do café" className='img' />
                    <a className="btn-comprar" href="https://www.elo7.com.br/quadro-depois-do-cafe-eu-me-expresso/dp/1C6118C#dvbc=1&dwhc=1&dcc=0&lpfcm=0&sedk=1&osrlt7=0&sek=0&fsfv=0&wch=0&sbc=1&wcld=1&oppb=0&ses=1&pssb=0&seb=0&dtm1=1&usb=1&dvsbs=1&sei=1&pcpe=1&dtm2=0&df=d&hpa=0&hsotb=0&srwv=1&sewb=0&sepi=0&vpl=1&wppbd=0&wsld=1&utp=0&dld=1&uje=0&carf=1&lvbbpm=1&sgta=1&wpm=0&sed=1&sea=0&pdp=0&wppbm=0&doar=0&csdm=0&dhbc=0&sep=1&osrl=0&disc=1&sew=0&psedm=0&hsv=1&cscws=0&uso=d&vsbs=1&deac=0&droam=0&lvbbob=0&psews=0&set=0&accb=1&sseov=0" target="_blank">Comprar</a>
                </div>
                <div className='div-img'>
                    <img src={foqueNoProcesso} alt="quadro foque no processo" className='img' />
                    <a className="btn-comprar" href="https://www.elo7.com.br/quadro-foque-no-processo/dp/1C611BC#dvbc=1&dwhc=1&dcc=0&lpfcm=0&sedk=1&osrlt7=0&sek=0&fsfv=0&wch=0&sbc=1&wcld=1&oppb=0&ses=1&pssb=0&seb=0&dtm1=1&usb=1&dvsbs=1&sei=1&pcpe=1&dtm2=0&df=d&hpa=0&hsotb=0&srwv=1&sewb=0&sepi=0&vpl=1&wppbd=0&wsld=1&utp=0&dld=1&uje=0&carf=1&lvbbpm=1&sgta=1&wpm=0&sed=1&sea=0&pdp=0&wppbm=0&doar=0&csdm=0&dhbc=0&sep=1&osrl=0&disc=1&sew=0&psedm=0&hsv=1&cscws=0&uso=o&vsbs=1&deac=0&droam=0&lvbbob=0&psews=0&set=0&accb=1&sseov=0" target="_blank">Comprar</a>
                </div>
                <div className='div-img'>
                    <img src={tenhoOMelhorPaiDoMundo} alt="quadro tenho o melhor pai do mundo" className='img' />
                    <a className="btn-comprar" href="https://www.elo7.com.br/quadro-eu-tenho-o-melhor-pai-do-mundo/dp/1C8A6C1#dvbc=1&dwhc=1&dcc=0&lpfcm=0&sedk=1&osrlt7=0&sek=0&fsfv=0&wch=0&sbc=1&wcld=1&oppb=0&ses=1&pssb=0&seb=0&dtm1=1&usb=1&dvsbs=1&sei=1&pcpe=1&dtm2=0&df=d&hpa=0&hsotb=0&srwv=1&sewb=0&sepi=0&vpl=1&wppbd=0&wsld=1&utp=0&dld=1&uje=0&carf=1&lvbbpm=1&sgta=1&wpm=0&sed=1&sea=0&pdp=0&wppbm=0&doar=0&csdm=0&dhbc=0&sep=1&osrl=0&disc=1&sew=0&psedm=0&hsv=1&cscws=0&uso=o&vsbs=1&deac=0&droam=0&lvbbob=0&psews=0&set=0&accb=1&sseov=0" target="_blank">Comprar</a>
                </div>
                <div className='div-img'>
                    <img src={meuPapaiEOMelhor} alt="quadro meu papai e o melhor" className='img' />
                    <a className="btn-comprar" href="https://www.elo7.com.br/quadro-o-meu-papai-e-o-melhor-do-mundo/dp/1C8A6D4#dvbc=1&dwhc=1&dcc=0&lpfcm=0&sedk=1&osrlt7=0&sek=0&fsfv=0&wch=0&sbc=1&wcld=1&oppb=0&ses=1&pssb=0&seb=0&dtm1=1&usb=1&dvsbs=1&sei=1&pcpe=1&dtm2=0&df=d&hpa=0&hsotb=0&srwv=1&sewb=0&sepi=0&vpl=1&wppbd=0&wsld=1&utp=0&dld=1&uje=0&carf=1&lvbbpm=1&sgta=1&wpm=0&sed=1&sea=0&pdp=0&wppbm=0&doar=0&csdm=0&dhbc=0&sep=1&osrl=0&disc=1&sew=0&psedm=0&hsv=1&cscws=0&uso=o&vsbs=1&deac=0&droam=0&lvbbob=0&psews=0&set=0&accb=1&sseov=0" target="_blank">Comprar</a>
                </div>
                <div className='div-img'>
                    <img src={valorizeseGratis} alt="quadro valorize-se grátis" className='img' />
                    <a className="btn-comprar" href="https://www.elo7.com.br/quadro-valorize-se-e-gratis/dp/1C611E1#dvbc=1&dwhc=1&dcc=0&lpfcm=0&sedk=1&osrlt7=0&sek=0&fsfv=0&wch=0&sbc=1&wcld=1&oppb=0&ses=1&pssb=0&seb=0&dtm1=1&usb=1&dvsbs=1&sei=1&pcpe=1&dtm2=0&df=d&hpa=0&hsotb=0&srwv=1&sewb=0&sepi=0&vpl=1&wppbd=0&wsld=1&utp=0&dld=1&uje=0&carf=1&lvbbpm=1&sgta=1&wpm=0&sed=1&sea=0&pdp=0&wppbm=0&doar=0&csdm=0&dhbc=0&sep=1&osrl=0&disc=1&sew=0&psedm=0&hsv=1&cscws=0&uso=o&vsbs=1&deac=0&droam=0&lvbbob=0&psews=0&set=0&accb=1&sseov=0" target="_blank">Comprar</a>
                </div>
            </div>
        </section>
    )
}

export { Quadros }