import React from 'react'
import { Steps, Row } from 'antd'
import { useInsurance } from '../../../context/InsuranceContext'


export default function AppSteps() {
    const { formState } = useInsurance()
    // console.log('formState.current:', formState.current);
    return (
        <Row justify="center" align="middle" style={{ height: '100%' }}>
            <Steps
                current={formState.current}
                style={{
                    maxWidth: '1400px',
                    width: '100%',
                    padding: '0 20px'
                }}
                items={[
                    { title: 'Life assured' },
                    { title: 'Claim details' },
                    { title: 'Payout details' },
                    { title: 'Review' },
                ]}
            />
        </Row>
    )
}
