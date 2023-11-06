import { useEffect } from 'react'
import quadroPinturaEPoesia from '../../assets/quadro-a_pintura_e_poesia_sem_palavras.png'
import quadroDepooisDoCafe from '../../assets/quadro-depois_do_cafe_eu_me_expresso.png'
import quadroFoqueNoProcesso from '../../assets/quadro-foque_no_processo.png'
import { slidesImgToggle } from './utils'
import './slider.scss'


const Slider = () => {

    useEffect(() => {
        slidesImgToggle()
    })

    return (
        <div className='home-slider'>
                <div className="slides">
                    <img src={quadroPinturaEPoesia} alt="foto 1 de exposição na home" className='slide 1 active' />
                    <img src={quadroDepooisDoCafe} alt="foto 2 de exposição na home" className='slide 2' />
                    <img src={quadroFoqueNoProcesso} alt="foto 3 de exposição na home" className='slide 3' />
                </div>
                <div className="slides-navigation">
                    <button className='btn 1 btn-active'></button>
                    <button className='btn 2'></button>
                    <button className='btn 3'></button>
                </div>
            </div>
    )
}

export { Slider }