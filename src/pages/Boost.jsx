import React, { useContext } from 'react';
import { GameContext } from '../GameContext';
import upgradeConfig from '../upgradeConfig';
import Counter from '../components/Counter';

const Boost = () => {
    const {
        score,
        upgradeEnergyLimit,
        upgradeMultiTap,
        upgradeRechargingSpeed,
        energyLimitLevel,
        multiTapLevel,
        rechargingSpeedLevel
    } = useContext(GameContext);

    const energyLimitUpgrade = upgradeConfig.energyLimit[energyLimitLevel];
    const multiTapUpgrade = upgradeConfig.multiTap[multiTapLevel];
    const rechargingSpeedUpgrade = upgradeConfig.rechargingSpeed[rechargingSpeedLevel];

    return (
        <div className="boost-container">
            <div className='boost-counter'>
                <p>Your score:</p>
                <Counter score={score} />
            </div>
            <div className='boost-upgrade'>
                <div className="upgrade-section">
                    <h2 className="upgrade-title">Energy Limit Upgrade</h2>
                    <p className="upgrade-level">Current Level: {energyLimitLevel}</p>
                    {energyLimitUpgrade ? (
                        <button className="upgrade-button" onClick={upgradeEnergyLimit}>
                            Upgrade Energy Limit (Cost: {energyLimitUpgrade.cost}, Benefit: +{energyLimitUpgrade.benefit})
                        </button>
                    ) : (
                        <p className="upgrade-info">Energy Limit is fully upgraded.</p>
                    )}
                </div>
                <div className="upgrade-section">
                    <h2 className="upgrade-title">Multi Tap Upgrade</h2>
                    <p className="upgrade-level">Current Level: {multiTapLevel}</p>
                    {multiTapUpgrade ? (
                        <button className="upgrade-button" onClick={upgradeMultiTap}>
                            Upgrade Multi Tap (Cost: {multiTapUpgrade.cost}, Benefit: +{multiTapUpgrade.benefit})
                        </button>
                    ) : (
                        <p className="upgrade-info">Multi Tap is fully upgraded.</p>
                    )}
                </div>
                <div className="upgrade-section">
                    <h2 className="upgrade-title">Recharging Speed Upgrade</h2>
                    <p className="upgrade-level">Current Level: {rechargingSpeedLevel}</p>
                    {rechargingSpeedUpgrade ? (
                        <button className="upgrade-button" onClick={upgradeRechargingSpeed}>
                            Upgrade Recharging Speed (Cost: {rechargingSpeedUpgrade.cost}, Benefit: +{rechargingSpeedUpgrade.benefit})
                        </button>
                    ) : (
                        <p className="upgrade-info">Recharging Speed is fully upgraded.</p>
                    )}
                </div>

                <div className='upgrade-section'>
                    
                </div>
                <div className='upgrade-section'>
                    
                </div>
                <div className='upgrade-section'>
                    
                </div>
                <div className='upgrade-section'>
                    
                </div>
                <div className='upgrade-section'>
                    
                </div>
                <div className='upgrade-section'>
                    
                </div>
                <div className='upgrade-section'>
                    
                </div>
                <div className='upgrade-section'>
                    
                </div>
                <div className='upgrade-section'>
                    
                </div>
                <div className='upgrade-section'>
                    
                </div><div className='upgrade-section'>
                    
                </div>
                <div className='upgrade-section'>
                    
                </div>

            </div>
        </div>
    );
};

export default Boost;
