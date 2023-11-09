import { useEffect } from 'react'
import depoisDoCafe from '../../assets/canecas/caneca-depois_do_cafe_eu_me_expresso.png'
import depoisDoCafe2 from '../../assets/canecas/caneca-2-depois_do_cafe_eu_me_expresso.png'
import melhorPaiDoMundo from '../../assets/canecas/caneca-melhor_pai_do_mundo.png'
import melhorPaiDoMundo2 from '../../assets/canecas/caneca-2-melhor_pai_do_mundo.png'
import melhorPaiDoMundo3 from '../../assets/canecas/caneca-3-melhor_pai_do_mundo.png'
import pinturaEPoesia from '../../assets/canecas/caneca-a_pintura_e_uma_poesia_sem_palavras.png'
import tenhoOMelhorPai from '../../assets/canecas/caneca-eu_tenho_o_melhor_pai_do_mundo.png'
import foqueNoProcesso from '../../assets/canecas/caneca-foque_no_processo.png'
import valorizeseGratis from '../../assets/canecas/caneca-valorize_se_gratis.png'
import './canecas.scss'
import { imgCanecaSelect } from './utils'

const Canecas = () => {

    useEffect(() => {
        imgCanecaSelect()
    }, [])

    return (
        <section className="canecas">
            <h3 className='canecas-title'>Canecas</h3>
            <div className='canecas-img'>
                <div className="div-img">
                    <img src={depoisDoCafe} alt="caneca depois do cafe" className='img' />
                    <a className="btn-comprar" href="https://www.elo7.com.br/caneca-depois-do-cafe-eu-me-expresso/dp/1C6128C#dvbc=1&dwhc=1&dcc=0&lpfcm=0&sedk=1&osrlt7=0&sek=0&fsfv=0&wch=0&sbc=1&wcld=1&oppb=0&ses=1&pssb=0&seb=0&dtm1=1&usb=1&dvsbs=1&sei=1&pcpe=1&dtm2=0&df=d&hpa=0&hsotb=0&srwv=1&sewb=0&sepi=0&vpl=1&wppbd=0&wsld=1&utp=0&dld=1&uje=0&carf=1&lvbbpm=1&sgta=1&wpm=0&sed=1&sea=0&pdp=0&wppbm=0&doar=0&csdm=0&dhbc=0&sep=1&osrl=0&disc=1&sew=0&psedm=0&hsv=1&cscws=0&uso=o&vsbs=1&deac=0&droam=0&lvbbob=0&psews=0&set=0&accb=1&sseov=0" target="_blank">Comprar</a>
                </div>
                <div className="div-img">
                    <img src={depoisDoCafe2} alt="caneca 2 depois do cafe" className='img' />
                    <a className="btn-comprar" href="https://www.elo7.com.br/caneca-depois-do-cafe-eu-me-expresso/dp/1C6128C#dvbc=1&dwhc=1&dcc=0&lpfcm=0&sedk=1&osrlt7=0&sek=0&fsfv=0&wch=0&sbc=1&wcld=1&oppb=0&ses=1&pssb=0&seb=0&dtm1=1&usb=1&dvsbs=1&sei=1&pcpe=1&dtm2=0&df=d&hpa=0&hsotb=0&srwv=1&sewb=0&sepi=0&vpl=1&wppbd=0&wsld=1&utp=0&dld=1&uje=0&carf=1&lvbbpm=1&sgta=1&wpm=0&sed=1&sea=0&pdp=0&wppbm=0&doar=0&csdm=0&dhbc=0&sep=1&osrl=0&disc=1&sew=0&psedm=0&hsv=1&cscws=0&uso=o&vsbs=1&deac=0&droam=0&lvbbob=0&psews=0&set=0&accb=1&sseov=0" target="_blank">Comprar</a>
                </div>
                <div className="div-img">
                    <img src={melhorPaiDoMundo} alt="caneca melhor pai do mundo" className='img' />
                    <a className="btn-comprar" href="https://www.elo7.com.br/caneca-melhor-pai-do-mundo/dp/1C8A6FB#dvbc=1&dwhc=1&dcc=0&lpfcm=0&sedk=1&osrlt7=0&sek=0&fsfv=0&wch=0&sbc=1&wcld=1&oppb=0&ses=1&pssb=0&seb=0&dtm1=1&usb=1&dvsbs=1&sei=1&pcpe=1&dtm2=0&df=d&hpa=0&hsotb=0&srwv=1&sewb=0&sepi=0&vpl=1&wppbd=0&wsld=1&utp=0&dld=1&uje=0&carf=1&lvbbpm=1&sgta=1&wpm=0&sed=1&sea=0&pdp=0&wppbm=0&doar=0&csdm=0&dhbc=0&sep=1&osrl=0&disc=1&sew=0&psedm=0&hsv=1&cscws=0&uso=o&vsbs=1&deac=0&droam=0&lvbbob=0&psews=0&set=0&accb=1&sseov=0" target="_blank">Comprar</a>
                </div>
                <div className="div-img">
                    <img src={melhorPaiDoMundo2} alt="caneca 2 melhor pai do mundo" className='img' />
                    <a className="btn-comprar" href="https://www.elo7.com.br/caneca-melhor-pai-do-mundo-medico/dp/1C8A708#dvbc=1&dwhc=1&dcc=0&lpfcm=0&sedk=1&osrlt7=0&sek=0&fsfv=0&wch=0&sbc=1&wcld=1&oppb=0&ses=1&pssb=0&seb=0&dtm1=1&usb=1&dvsbs=1&sei=1&pcpe=1&dtm2=0&df=d&hpa=0&hsotb=0&srwv=1&sewb=0&sepi=0&vpl=1&wppbd=0&wsld=1&utp=0&dld=1&uje=0&carf=1&lvbbpm=1&sgta=1&wpm=0&sed=1&sea=0&pdp=0&wppbm=0&doar=0&csdm=0&dhbc=0&sep=1&osrl=0&disc=1&sew=0&psedm=0&hsv=1&cscws=0&uso=o&vsbs=1&deac=0&droam=0&lvbbob=0&psews=0&set=0&accb=1&sseov=0" target="_blank">Comprar</a>
                </div>
                <div className="div-img">
                    <img src={melhorPaiDoMundo3} alt="caneca 3 melhor pai do mundo" className='img' />
                    <a className="btn-comprar" href="https://www.elo7.com.br/caneca-melhor-pai-do-mundo-pedreiro/dp/1C8A712#dvbc=1&dwhc=1&dcc=0&lpfcm=0&sedk=1&osrlt7=0&sek=0&fsfv=0&wch=0&sbc=1&wcld=1&oppb=0&ses=1&pssb=0&seb=0&dtm1=1&usb=1&dvsbs=1&sei=1&pcpe=1&dtm2=0&df=d&hpa=0&hsotb=0&srwv=1&sewb=0&sepi=0&vpl=1&wppbd=0&wsld=1&utp=0&dld=1&uje=0&carf=1&lvbbpm=1&sgta=1&wpm=0&sed=1&sea=0&pdp=0&wppbm=0&doar=0&csdm=0&dhbc=0&sep=1&osrl=0&disc=1&sew=0&psedm=0&hsv=1&cscws=0&uso=o&vsbs=1&deac=0&droam=0&lvbbob=0&psews=0&set=0&accb=1&sseov=0" target="_blank">Comprar</a>
                </div>
                <div className="div-img">
                    <img src={pinturaEPoesia} alt="caneca pintura é poesia" className='img' />
                    <a className="btn-comprar" href="https://www.elo7.com.br/caneca-a-pintura-e-poesia-sem-palavras/dp/1C660BE#dvbc=1&dwhc=1&dcc=0&lpfcm=0&sedk=1&osrlt7=0&sek=0&fsfv=0&wch=0&sbc=1&wcld=1&oppb=0&ses=1&pssb=0&seb=0&dtm1=1&usb=1&dvsbs=1&sei=1&pcpe=1&dtm2=0&df=d&hpa=0&hsotb=0&srwv=1&sewb=0&sepi=0&vpl=1&wppbd=0&wsld=1&utp=0&dld=1&uje=0&carf=1&lvbbpm=1&sgta=1&wpm=0&sed=1&sea=0&pdp=0&wppbm=0&doar=0&csdm=0&dhbc=0&sep=1&osrl=0&disc=1&sew=0&psedm=0&hsv=1&cscws=0&uso=o&vsbs=1&deac=0&droam=0&lvbbob=0&psews=0&set=0&accb=1&sseov=0" target="_blank">Comprar</a>
                </div>
                <div className="div-img">
                    <img src={tenhoOMelhorPai} alt="caneca tenho o melhor pai do mundo" className='img' />
                    <a className="btn-comprar" href="https://www.elo7.com.br/caneca-eu-tenho-o-melhor-pai-do-mundo/dp/1C8A6EA#dvbc=1&dwhc=1&dcc=0&lpfcm=0&sedk=1&osrlt7=0&sek=0&fsfv=0&wch=0&sbc=1&wcld=1&oppb=0&ses=1&pssb=0&seb=0&dtm1=1&usb=1&dvsbs=1&sei=1&pcpe=1&dtm2=0&df=d&hpa=0&hsotb=0&srwv=1&sewb=0&sepi=0&vpl=1&wppbd=0&wsld=1&utp=0&dld=1&uje=0&carf=1&lvbbpm=1&sgta=1&wpm=0&sed=1&sea=0&pdp=0&wppbm=0&doar=0&csdm=0&dhbc=0&sep=1&osrl=0&disc=1&sew=0&psedm=0&hsv=1&cscws=0&uso=o&vsbs=1&deac=0&droam=0&lvbbob=0&psews=0&set=0&accb=1&sseov=0" target="_blank">Comprar</a>
                </div>
                <div className="div-img">
                    <img src={foqueNoProcesso} alt="caneca foque no processo" className='img' />
                    <a className="btn-comprar" href="https://www.elo7.com.br/caneca-foque-no-processo/dp/1C6120C#dvbc=1&dwhc=1&dcc=0&lpfcm=0&sedk=1&osrlt7=0&sek=0&fsfv=0&wch=0&sbc=1&wcld=1&oppb=0&ses=1&pssb=0&seb=0&dtm1=1&usb=1&dvsbs=1&sei=1&pcpe=1&dtm2=0&df=d&hpa=0&hsotb=0&srwv=1&sewb=0&sepi=0&vpl=1&wppbd=0&wsld=1&utp=0&dld=1&uje=0&carf=1&lvbbpm=1&sgta=1&wpm=0&sed=1&sea=0&pdp=0&wppbm=0&doar=0&csdm=0&dhbc=0&sep=1&osrl=0&disc=1&sew=0&psedm=0&hsv=1&cscws=0&uso=o&vsbs=1&deac=0&droam=0&lvbbob=0&psews=0&set=0&accb=1&sseov=0" target="_blank">Comprar</a>
                </div>
                <div className="div-img">
                    <img src={valorizeseGratis} alt="caneca valorize-se grátis" className='img' />
                    <a className="btn-comprar" href="https://www.elo7.com.br/caneca-valorize-se-e-gratis/dp/1C61233#dvbc=1&dwhc=1&dcc=0&lpfcm=0&sedk=1&osrlt7=0&sek=0&fsfv=0&wch=0&sbc=1&wcld=1&oppb=0&ses=1&pssb=0&seb=0&dtm1=1&usb=1&dvsbs=1&sei=1&pcpe=1&dtm2=0&df=d&hpa=0&hsotb=0&srwv=1&sewb=0&sepi=0&vpl=1&wppbd=0&wsld=1&utp=0&dld=1&uje=0&carf=1&lvbbpm=1&sgta=1&wpm=0&sed=1&sea=0&pdp=0&wppbm=0&doar=0&csdm=0&dhbc=0&sep=1&osrl=0&disc=1&sew=0&psedm=0&hsv=1&cscws=0&uso=o&vsbs=1&deac=0&droam=0&lvbbob=0&psews=0&set=0&accb=1&sseov=0" target="_blank">Comprar</a>
                </div>
            </div>
        </section>
    )
}

export { Canecas }