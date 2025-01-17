import React, { createContext, useContext, useState } from 'react';


// 创建初始状态
const initialState = {
    current: 0, // 当前步骤，初始为0
    insurantInfo: {
        name: '',
        idNumber: '',
        phone: '',

    },
    insuredInfo: {
        name: '',
        idNumber: '',
        relationship: '',

    },
    planInfo: {
        planType: '',
        coverage: '',
        period: '',

    }
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

    const updateInsurantInfo = (info) => {
        setFormState(prevState => ({
            ...prevState,
            insurantInfo: info
        }));
    };

    const updateInsuredInfo = (info) => {
        setFormState(preState => ({
            ...preState,
            insuredInfo: info
        }));
    };

    const updatePlanInfo = (info) => {
        setFormState(preState => ({
            ...preState,
            planInfo: info
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
            updateInsurantInfo,
            updateInsuredInfo,
            updatePlanInfo,
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