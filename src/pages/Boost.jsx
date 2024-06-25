import React, { useContext } from 'react';
import { GameContext } from '../GameContext';
import upgradeConfig from '../upgradeConfig';
import Counter from '../components/Counter';
import { TouchAppRounded, ArrowForwardIosRounded, Battery5BarRounded, FlashOnRounded } from "@mui/icons-material";
import coin from '../assets/coin.png';

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

    const energyLimitUpgrade = energyLimitLevel < upgradeConfig.energyLimit.length ? upgradeConfig.energyLimit[energyLimitLevel] : null;
    const multiTapUpgrade = multiTapLevel < upgradeConfig.multiTap.length ? upgradeConfig.multiTap[multiTapLevel] : null;
    const rechargingSpeedUpgrade = rechargingSpeedLevel < upgradeConfig.rechargingSpeed.length ? upgradeConfig.rechargingSpeed[rechargingSpeedLevel] : null;

    return (
        <div className="boost-container">
            <div className='boost-counter'>
                <p>Your balance:</p>
                <Counter score={score} />
            </div>
            <div className='test'>
                <div className='boost-upgrade'>
                    <div className="upgrade-section" onClick={energyLimitUpgrade ? upgradeEnergyLimit : undefined}>
                        <div className='upgrade-section-1'>
                            <div>
                                <TouchAppRounded className='material-icons-boost' />
                            </div>
                            <div className='upgrade-info'>
                                <p className="upgrade-title">Energy Limit Upgrade</p>
                                <div>
                                    <img src={coin} alt='coin' width={20} />
                                    <p className='upgrade-title-bold'>
                                        {energyLimitUpgrade ? energyLimitUpgrade.cost : 'Max lvl'}
                                    </p>
                                    <p className='upgrade-title-level'> • {energyLimitLevel} lvl</p>
                                </div>
                            </div>
                        </div>
                        <div className='upgrade-section-2'>
                            <ArrowForwardIosRounded />
                        </div>
                    </div>
                    <div className="upgrade-section" onClick={multiTapUpgrade ? upgradeMultiTap : undefined}>
                        <div className='upgrade-section-1'>
                            <div>
                                <Battery5BarRounded className='material-icons-boost' />
                            </div>
                            <div className='upgrade-info'>
                                <p className="upgrade-title">Multi Tap Upgrade</p>
                                <div>
                                    <img src={coin} alt='coin' width={20} />
                                    <p className='upgrade-title-bold'>
                                        {multiTapUpgrade ? multiTapUpgrade.cost : 'Max lvl'}
                                    </p>
                                    <p className='upgrade-title-level'> • {multiTapLevel} lvl</p>
                                </div>
                            </div>
                        </div>
                        <div className='upgrade-section-2'>
                            <ArrowForwardIosRounded />
                        </div>
                    </div>
                    <div className="upgrade-section" onClick={rechargingSpeedUpgrade ? upgradeRechargingSpeed : undefined}>
                        <div className='upgrade-section-1'>
                            <div>
                                <FlashOnRounded className='material-icons-boost' />
                            </div>
                            <div className='upgrade-info'>
                                <p className="upgrade-title">Recharging Speed Upgrade</p>
                                <div>
                                    <img src={coin} alt='coin' width={20} />
                                    <p className='upgrade-title-bold'>
                                        {rechargingSpeedUpgrade ? rechargingSpeedUpgrade.cost : 'Max lvl'}
                                    </p>
                                    <p className='upgrade-title-level'> • {rechargingSpeedLevel} lvl</p>
                                </div>
                            </div>
                        </div>
                        <div className='upgrade-section-2'>
                            <ArrowForwardIosRounded />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Boost;
