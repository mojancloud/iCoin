import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Main from "./pages/Main";
import Boost from "./pages/Boost";
import Earn from "./pages/Earn";
import { GameProvider } from './GameContext';

const App = () => {
    return (
        <GameProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/iCoin/" element={<Layout />}>
                        <Route index element={<Main />}></Route>
                        <Route path="boost" element={<Boost />}></Route>
                        <Route path="earn" element={<Earn />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </GameProvider>
    );
}

export default App;
