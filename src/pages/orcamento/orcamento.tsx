import { Footer } from '../../components/footer/footer'
import { SoliciteUmOrcamento } from '../../components/soliciteUmOrcamento/soliciteUmOrcamento'
import './orcamento.scss'

const Orcamento = () => {
    return (
        <main className='orcamento'>
            <SoliciteUmOrcamento />
            <Footer />
        </main>
    )
}

export { Orcamento }