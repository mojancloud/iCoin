import React from 'react';
import coin from '../assets/coin.png';

const Counter = ({ score, coinTouched }) => {
    // Format count with thousand separator in English
    const formattedCount = new Intl.NumberFormat('en-US').format(score);

    return (
        <div className="counter-container">
            <img
                src={coin}
                alt="Coin"
                width={60}
                className={coinTouched ? 'coin-enlarged' : ''}
            />
            <p>{formattedCount}</p>
        </div>
    );
}

export default Counter;