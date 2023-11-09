import { Canecas } from '../../components/canecas/canecas'
import { Footer } from '../../components/footer/footer'
import { Quadros } from '../../components/quadros/quadros'
import './portfolio.scss'

const Portfolio = () => {
    return (
        <main className='portfolio'>
            <h1 className='portfolio-title'>Portfolio</h1>
            <Quadros />
            <Canecas />
            <Footer />
        </main>
    )
}

export { Portfolio }