import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Components/Home"

export const AppRoutes = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}