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



export function InsuranceContextProvider({ children }) {

    const [formState, setFormState] = useState(initialState);

    const setCurrent = (step) => {
        setFormState(prevState => ({
            ...prevState,
            current: step
        }));
    }


    return (
        <InsuranceContext.Provider value={{ formState, setFormState, setCurrent }}>
            {children}
        </InsuranceContext.Provider>
    )
}
