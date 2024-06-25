import React, { createContext, useState, useContext } from 'react';

const PromptContext = createContext();

export const PromptProvider = ({ children }) => {
    const [prompt, setPrompt] = useState({ message: '', isVisible: false });

    const showPrompt = (message) => {
        setPrompt({ message, isVisible: true });

        setTimeout(() => {
            setPrompt({ message: '', isVisible: false });
        }, 5000); // Close after 3 seconds
    };

    return (
        <PromptContext.Provider value={{ showPrompt }}>
            {children}
            {prompt.isVisible && <Prompt message={prompt.message} isVisible={prompt.isVisible} />}
        </PromptContext.Provider>
    );
};

export const usePrompt = () => useContext(PromptContext);

const Prompt = ({ message, isVisible }) => (
    <div className={`prompt-container ${isVisible ? 'visible' : ''}`}>
        <div className='prompt'>
            {message}
        </div>
    </div>
);
