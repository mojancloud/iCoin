import React, { createContext, useState, useEffect } from 'react';
import upgradeConfig from './upgradeConfig';
import { usePrompt } from './PromptContext';

const GameContext = createContext();

const GameProvider = ({ children }) => {
    const [energy, setEnergy] = useState(() => {
        const savedEnergy = localStorage.getItem('energy');
        return savedEnergy !== null ? parseInt(savedEnergy, 10) : 1000;
    });

    const [score, setScore] = useState(() => {
        const savedScore = localStorage.getItem('score');
        return savedScore !== null ? parseInt(savedScore, 10) : 0;
    });

    const [energyLimit, setEnergyLimit] = useState(() => {
        const savedEnergyLimit = localStorage.getItem('energyLimit');
        return savedEnergyLimit !== null ? parseInt(savedEnergyLimit, 10) : 1000;
    });

    const [multiTap, setMultiTap] = useState(() => {
        const savedMultiTap = localStorage.getItem('multiTap');
        return savedMultiTap !== null ? parseInt(savedMultiTap, 10) : 1;
    });

    const [rechargingSpeed, setRechargingSpeed] = useState(() => {
        const savedRechargingSpeed = localStorage.getItem('rechargingSpeed');
        return savedRechargingSpeed !== null ? parseInt(savedRechargingSpeed, 10) : 1;
    });

    const [energyLimitLevel, setEnergyLimitLevel] = useState(() => {
        const savedEnergyLimitLevel = localStorage.getItem('energyLimitLevel');
        return savedEnergyLimitLevel !== null ? parseInt(savedEnergyLimitLevel, 10) : 0;
    });

    const [multiTapLevel, setMultiTapLevel] = useState(() => {
        const savedMultiTapLevel = localStorage.getItem('multiTapLevel');
        return savedMultiTapLevel !== null ? parseInt(savedMultiTapLevel, 10) : 0;
    });

    const [rechargingSpeedLevel, setRechargingSpeedLevel] = useState(() => {
        const savedRechargingSpeedLevel = localStorage.getItem('rechargingSpeedLevel');
        return savedRechargingSpeedLevel !== null ? parseInt(savedRechargingSpeedLevel, 10) : 0;
    });

    const [coinTouched, setCoinTouched] = useState(false);

    const { showPrompt } = usePrompt();

    // Save to local storage whenever relevant state changes
    useEffect(() => {
        localStorage.setItem('energy', energy);
    }, [energy]);

    useEffect(() => {
        localStorage.setItem('score', score);
    }, [score]);

    useEffect(() => {
        localStorage.setItem('energyLimit', energyLimit);
    }, [energyLimit]);

    useEffect(() => {
        localStorage.setItem('multiTap', multiTap);
    }, [multiTap]);

    useEffect(() => {
        localStorage.setItem('rechargingSpeed', rechargingSpeed);
    }, [rechargingSpeed]);

    useEffect(() => {
        localStorage.setItem('energyLimitLevel', energyLimitLevel);
    }, [energyLimitLevel]);

    useEffect(() => {
        localStorage.setItem('multiTapLevel', multiTapLevel);
    }, [multiTapLevel]);

    useEffect(() => {
        localStorage.setItem('rechargingSpeedLevel', rechargingSpeedLevel);
    }, [rechargingSpeedLevel]);

    useEffect(() => {
        localStorage.setItem('coinTouched', coinTouched);
    }, [coinTouched]);

    // Update energy based on the last timestamp
    useEffect(() => {
        const updateEnergy = () => {
            const lastTimestamp = localStorage.getItem('lastTimestamp');
            const currentTimestamp = Math.floor(Date.now() / 1000);

            if (lastTimestamp) {
                const elapsedSeconds = currentTimestamp - parseInt(lastTimestamp, 10);

                setEnergy(prevEnergy => {
                    const newEnergy = Math.min(prevEnergy + elapsedSeconds * rechargingSpeed, energyLimit);
                    localStorage.setItem('energy', newEnergy.toString());
                    return newEnergy;
                });
            }

            localStorage.setItem('lastTimestamp', currentTimestamp.toString());
        };

        updateEnergy();

        const interval = setInterval(updateEnergy, 1000);

        return () => clearInterval(interval);
    }, [energyLimit, rechargingSpeed]);

    // Effect to handle before unload event to save timestamp
    useEffect(() => {
        const handleBeforeUnload = () => {
            const currentTimestamp = Math.floor(Date.now() / 1000);
            localStorage.setItem('lastTimestamp', currentTimestamp.toString());
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    const handleTap = () => {
        if (energy > 0) {
            setEnergy(prevEnergy => Math.max(0, prevEnergy - multiTap));
            setScore(prevScore => prevScore + multiTap);
            setCoinTouched(true);
            setTimeout(() => {
                setCoinTouched(false);
            }, 50);
        }
    };

    const upgradeEnergyLimit = () => {
        if (energyLimitLevel < upgradeConfig.energyLimit.length) {
            const { cost, benefit } = upgradeConfig.energyLimit[energyLimitLevel];
            if (score >= cost) {
                setScore(prevScore => prevScore - cost);
                setEnergyLimit(prevLimit => prevLimit + benefit);
                setEnergyLimitLevel(prevLevel => prevLevel + 1);
                showPrompt('Energy Limit Upgraded!');
            } else {
                showPrompt('Not enough score to upgrade Energy Limit.');
            }
        } else {
            showPrompt('Energy Limit is already at max level.');
        }
    };

    const upgradeMultiTap = () => {
        if (multiTapLevel < upgradeConfig.multiTap.length) {
            const { cost, benefit } = upgradeConfig.multiTap[multiTapLevel];
            if (score >= cost) {
                setScore(prevScore => prevScore - cost);
                setMultiTap(prevMultiTap => prevMultiTap + benefit);
                setMultiTapLevel(prevLevel => prevLevel + 1);
                showPrompt('Multi Tap Upgraded!');
            } else {
                showPrompt('Not enough score to upgrade Multi Tap.');
            }
        } else {
            showPrompt('Multi Tap is already at max level.');
        }
    };

    const upgradeRechargingSpeed = () => {
        if (rechargingSpeedLevel < upgradeConfig.rechargingSpeed.length) {
            const { cost, benefit } = upgradeConfig.rechargingSpeed[rechargingSpeedLevel];
            if (score >= cost) {
                setScore(prevScore => prevScore - cost);
                setRechargingSpeed(prevSpeed => prevSpeed + benefit);
                setRechargingSpeedLevel(prevLevel => prevLevel + 1);
                showPrompt('Recharging Speed Upgraded!');
            } else {
                showPrompt('Not enough score to upgrade Recharging Speed.');
            }
        } else {
            showPrompt('Recharging Speed is already at max level.');
        }
    };

    return (
        <GameContext.Provider value={{
            energy,
            score,
            energyLimit,
            multiTap,
            rechargingSpeed,
            handleTap,
            upgradeEnergyLimit,
            upgradeMultiTap,
            upgradeRechargingSpeed,
            energyLimitLevel,
            multiTapLevel,
            rechargingSpeedLevel,
            coinTouched
        }}>
            {children}
        </GameContext.Provider>
    );
};

export { GameContext, GameProvider };
