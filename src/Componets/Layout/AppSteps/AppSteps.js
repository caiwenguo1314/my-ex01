import React from 'react'
import { Steps } from 'antd'
import { useInsurance } from '../../../context/InsuranceContext'
import './AppSteps.css'

export default function AppSteps() {
    const { formState } = useInsurance()
    return (
        <div className="steps-container">
            <Steps
                current={formState.current}
                className="app-steps"
                direction="horizontal"
                labelPlacement="vertical"
                items={[
                    { title: 'Life assured' },
                    { title: 'Claim details' },
                    { title: 'Payout details' },
                    { title: 'Review' }
                ]}
            />
        </div>
    )
}
