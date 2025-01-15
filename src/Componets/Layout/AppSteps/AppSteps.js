import React from 'react'
import { Steps, Row } from 'antd'

export default function AppSteps({ current = 0 }) {
    return (
        <Row justify="center" align="middle">
            <Steps
                current={current}
                style={{
                    marginTop: '60px',
                    maxWidth: '1400px',
                    width: '100%'
                }}
                items={[
                    { title: 'Select Life Assured' },
                    { title: 'Select Insurance' },
                    { title: 'Fill Information' },
                    { title: 'Review' },
                ]}
            />
        </Row>
    )
}
