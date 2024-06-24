import React, { useContext } from 'react';
import { GameContext } from '../GameContext';
import Counter from '../components/Counter'; // Import the Counter component
import Coin from '../components/Coin'; // Assuming Coin component is located here
import ProgressBar from '../components/ProgressBar';
import Energy from '../components/Energy';

const Main = () => {
    const { energy, score, handleTap, energyLimit, coinTouched } = useContext(GameContext);

    return (
        <div className="main">
            <Counter score={score} coinTouched={coinTouched} />
            <Coin incrementCount={handleTap} disabled={energy <= 0} />
            <div className='energy-container'>
                <Energy energy={energy} energyLimit={energyLimit} />
                <ProgressBar energy={energy} energyLimit={energyLimit} />
            </div>
        </div>
    );
};

export default Main;
