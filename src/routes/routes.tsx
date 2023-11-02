import { BrowserRouter, Routes , Route } from "react-router-dom"
import { Home } from "../pages/home/home"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    )
} 

export { AppRoutes }