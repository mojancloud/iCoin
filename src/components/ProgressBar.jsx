import React from 'react';

const ProgressBar = ({ energy, energyLimit }) => {
    const percentage = (energy / energyLimit) * 100;

    return (
        <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: `${percentage}%` }}></div>
        </div>
    );
};

export default ProgressBar;