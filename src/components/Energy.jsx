import thunder from '../assets/thunder.png';

const energy = ({ energy, energyLimit }) => {
    return (
        <div className="energy">
            <img src={thunder} alt="Thunder" width={40} />
            <div className="energy-count">
                <span>{energy}</span>
                <span className="gray">/{energyLimit}</span>
            </div>
        </div>
    );
}

export default energy;