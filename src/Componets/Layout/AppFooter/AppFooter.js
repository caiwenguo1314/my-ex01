import React from 'react'
import { Layout, Row, Typography, Button, Space } from 'antd';


const { Text, } = Typography;
const { Footer } = Layout;
export default function AppFooter() {
    return (
        <Footer style={{ textAlign: 'left' }}>
            <Text>
                In case of any queries, please contact our customer relations officer at PRUDENTIAL Customerline: 150008/15008
            </Text>

            <Row justify="end" style={{ background: '#fff', width: 'calc(100% + 100px)', height: '80px', marginLeft: '-50px' }}>
                <Space size="middle" style={{ marginRight: '20px' }}>
                    <Button size="large" style={{ width: 200 }} type="default" danger>
                        Back
                    </Button>
                    <Button size="large" style={{ width: 200 }} type="primary">
                        Continue
                    </Button>
                </Space>
            </Row>

        </Footer>

    )
}
