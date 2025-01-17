import React, { createContext, useContext, useState } from 'react';


// 创建初始状态
const initialState = {
    current: 0,
    lifeAssured: {
        name: '',
        idx: '',
    },
};


const InsuranceContext = createContext(initialState);



export function InsuranceProvider({ children }) {

    const [formState, setFormState] = useState(initialState);

    const setCurrent = (step) => {
        setFormState(prevState => ({
            ...prevState,
            current: step
        }));
    }

    const lifeAssured = (info) => {
        setFormState(prevState => ({
            ...prevState,
            lifeAssured: info
        }));
    };

   

    const submitInsurance = async () => {
        try {
            console.log('Submitting insurance data:', formState);
            return true;
        } catch (error) {
            console.error('Error submitting insurance:', error);
            return false;
        }
    };

    return (
        <InsuranceContext.Provider value={{
            formState,
            setCurrent,
            lifeAssured,            
            submitInsurance
        }}>
            {children}
        </InsuranceContext.Provider>
    );
};

export const useInsurance = () => {
    const context = useContext(InsuranceContext);
    if (!context) {
        throw new Error('useInsurance must be used within an InsuranceProvider');
    }
    return context;
};