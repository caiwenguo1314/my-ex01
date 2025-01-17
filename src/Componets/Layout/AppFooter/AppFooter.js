import React from 'react'
import { Layout, Row, Typography, Button, Space } from 'antd';
import { useInsurance } from '../../../context/InsuranceContext'

const { Text, } = Typography;
const { Footer } = Layout;
export default function AppFooter() {

    const { formState, setCurrent } = useInsurance()
    const addClickHandler = () => {
        setCurrent(formState.current + 1)
    }
    const subClickHandler = () => {
        setCurrent(formState.current - 1)
    }
    return (
        <Footer
            style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100%',
                padding: '16px 20px',
                background: '#fff',
                height: '80px',
                boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.06)',
                zIndex: 1000
            }}
        >
            <Row justify="space-between" align="middle" style={{ height: '100%' }}>
                <Text>
                    In case of any queries, please contact our customer relations officer at PRUDENTIAL Customerline: 150008/15008
                </Text>
                <Space size="middle">
                    <Button onClick={formState.current > 0 ? subClickHandler : null} size="large" style={{ width: 200 }} type="default" danger>
                        Back
                    </Button>
                    <Button
                        onClick={formState.current < 3 ? addClickHandler : null}
                        size="large" style={{ width: 200 }} type="primary">
                        Continue
                    </Button>
                </Space>
            </Row>
        </Footer>
    )
}
