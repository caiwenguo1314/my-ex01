import React from 'react'
import { Steps, Row } from 'antd'

export default function AppSteps() {
    return (
        <Row justify="center" align="middle">
            <Steps 
                style={{
                    margin: '24px 40px',
                    maxWidth: '1400px',  // 限制最大宽度，使步骤条不会太宽
                    width: '100%'       // 确保在最大宽度内占满空间
                }}
                current={0}
                direction="horizontal"
                labelPlacement="vertical"
                items={[
                    { title: 'Life Assured' },
                    { title: 'Claim Details' },
                    { title: 'Payout Details' },
                    { title: 'Review' },
                ]}
            />
        </Row>
    )
}
