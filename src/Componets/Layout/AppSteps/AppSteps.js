import React from 'react'
import { Steps, } from 'antd';

export default function AppSteps() {
    return (        
            <Steps style={{margin: '24px 40px'}}
                current={0}
                // 设置方向为水平
                direction="horizontal"
                labelPlacement="vertical"
                items={[
                    { title: 'Life Assured' },
                    { title: 'Claim Details' },
                    { title: 'Payout Details' },
                    { title: 'Review' },
                ]}
            />        
    )
}
