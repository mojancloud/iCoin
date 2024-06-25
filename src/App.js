import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Main from './pages/Main';
import Boost from './pages/Boost';
import Earn from './pages/Earn';
import { GameProvider } from './GameContext';

const App = () => {
    useEffect(() => {
        const setVh = () => {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        // Initial setting of the custom property
        setVh();

        // Update the custom property on resize
        window.addEventListener('resize', setVh);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', setVh);
        };
    }, []);

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
