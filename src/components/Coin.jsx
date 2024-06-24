import React, { useRef, useEffect, useContext } from 'react';
import golden from "../assets/golden.png";
import { GameContext } from '../GameContext';

const Coin = ({ incrementCount, disabled }) => {
    const {multiTap} = useContext(GameContext);
    const imageRef = useRef(null);
    const coinContainerRef = useRef(null);

    useEffect(() => {
        const image = imageRef.current;
    
        const handleImageClick = (e) => {
            if (disabled) return;
    
            const rect = image.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
    
            const x = e.clientX - centerX; // x distance from the center
            const y = e.clientY - centerY; // y distance from the center
    
            const distance = Math.sqrt(x * x + y * y);
            const radius = rect.width / 2;
    
            if (distance <= radius) {
                let translateX = x / 200; // Adjust the division factor for translation speed
                let translateY = y / 200; // Adjust the division factor for translation speed
                let skewX = x / 65; // Adjust the division factor for skew intensity
                let skewY = y / 65; // Adjust the division factor for skew intensity
    
                // Adjust skew direction based on mouse position relative to the center
                if (x < 0 && y < 0) {
                    // Top-left quadrant
                    skewX = Math.abs(skewX); // Ensure positive skew for top-left
                    skewY = Math.abs(skewY); // Ensure negative skew for top-left
                } else if (x < 0 && y > 0) {
                    // Bottom-left quadrant
                    skewX = -Math.abs(skewX); // Ensure positive skew for bottom-left
                    skewY = -Math.abs(skewY); // Ensure positive skew for bottom-left
                } else if (x > 0 && y > 0) {
                    // Bottom-right quadrant
                    skewX = Math.abs(skewX); // Ensure negative skew for bottom-right
                    skewY = Math.abs(skewY); // Ensure positive skew for bottom-right
                } else if (x > 0 && y < 0) {
                    // Top-right quadrant
                    skewX = -Math.abs(skewX); // Ensure negative skew for top-right
                    skewY = -Math.abs(skewY); // Ensure negative skew for top-right
                }
    
                // Apply the transformation (translate and skew)
                image.style.transform = `translate(${translateX}rem, ${translateY}rem) skewY(${skewY}deg) skewX(${skewX}deg)`;
    
                // Reset the transformation after a short delay
                setTimeout(() => {
                    image.style.transform = 'translate(0px, 0px)';
                }, 100);
    
                incrementCount();
    
                // Create the +1 span element
                const span = document.createElement('span');
                span.innerText = '+' + multiTap;
                span.className = 'plus-num';
    
                // Adjust the left and top to center the span element
                const spanWidth = 50; // Same as the width defined in CSS
                const spanHeight = 50; // Same as the height defined in CSS
    
                span.style.left = `${e.clientX - coinContainerRef.current.getBoundingClientRect().left - spanWidth / 2}px`;
                span.style.top = `${e.clientY - coinContainerRef.current.getBoundingClientRect().top - spanHeight / 2}px`;
    
                coinContainerRef.current.appendChild(span);
    
                setTimeout(() => {
                    span.remove();
                }, 1000);
    
                if (navigator.vibrate) {
                    navigator.vibrate(5);
                }
            }
        };
    
        image.addEventListener('pointerdown', handleImageClick);
    
        return () => {
            image.removeEventListener('pointerdown', handleImageClick);
        };
    }, [incrementCount, disabled, multiTap]);

    return (
        <div className="coin-container" ref={coinContainerRef}>
            <img
                src={golden}
                alt="Golden"
                width={350}
                ref={imageRef}
                id="coin"
                className={disabled ? 'disabled' : ''}
            />
        </div>
    );
};

export default Coin;