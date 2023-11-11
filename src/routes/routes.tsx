import { BrowserRouter, Routes , Route } from "react-router-dom"
import { Home } from "../pages/home/home"
import { Portfolio } from "../pages/portfolio/portfolio"
import { Header } from "../components/header/header"
import { Orcamento } from "../pages/orcamento/orcamento"
import { Sobre } from "../pages/sobre/sobre"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/adam_lettering" element={<Home />}></Route>
                <Route path="/Portfolio" element={<Portfolio />}></Route>
                <Route path="/Orçamento" element={<Orcamento />}></Route>
                <Route path="/Sobre" element={<Sobre />}></Route>
            </Routes>
        </BrowserRouter>
    )
} 

export { AppRoutes }