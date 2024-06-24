import React, { useContext } from 'react';
import { GameContext } from '../GameContext';
import upgradeConfig from '../upgradeConfig';

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
        <div>
            <h1>Boost</h1>
            <p>Score: {score}</p>
            <div>
                <h2>Energy Limit Upgrade</h2>
                <p>Current Level: {energyLimitLevel}</p>
                {energyLimitUpgrade ? (
                    <button onClick={upgradeEnergyLimit}>
                        Upgrade Energy Limit (Cost: {energyLimitUpgrade.cost}, Benefit: +{energyLimitUpgrade.benefit})
                    </button>
                ) : (
                    <p>Energy Limit is fully upgraded.</p>
                )}
            </div>
            <div>
                <h2>Multi Tap Upgrade</h2>
                <p>Current Level: {multiTapLevel}</p>
                {multiTapUpgrade ? (
                    <button onClick={upgradeMultiTap}>
                        Upgrade Multi Tap (Cost: {multiTapUpgrade.cost}, Benefit: +{multiTapUpgrade.benefit})
                    </button>
                ) : (
                    <p>Multi Tap is fully upgraded.</p>
                )}
            </div>
            <div>
                <h2>Recharging Speed Upgrade</h2>
                <p>Current Level: {rechargingSpeedLevel}</p>
                {rechargingSpeedUpgrade ? (
                    <button onClick={upgradeRechargingSpeed}>
                        Upgrade Recharging Speed (Cost: {rechargingSpeedUpgrade.cost}, Benefit: +{rechargingSpeedUpgrade.benefit})
                    </button>
                ) : (
                    <p>Recharging Speed is fully upgraded.</p>
                )}
            </div>
        </div>
    );
};

export default Boost;
