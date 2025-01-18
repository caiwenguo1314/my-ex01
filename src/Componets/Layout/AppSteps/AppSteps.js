import React from 'react'
import { Steps, Row } from 'antd'
import { useInsurance } from '../../../context/InsuranceContext'


export default function AppSteps() {
    const { formState } = useInsurance()
    // console.log('formState.current:', formState.current);
    return (
        <Row justify="center" align="middle">
            <Steps
                current={formState.current}
                style={{
                    marginTop: '60px',
                    maxWidth: '1400px',
                    width: '100%'
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
