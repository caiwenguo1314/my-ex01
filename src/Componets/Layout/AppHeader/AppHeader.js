import React from 'react';
import { Row, Col, Input, Menu, Space, Typography, Layout } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/c/font_4798402_1kd47iq67va.js',
});

const { Header } = Layout;
const { Text } = Typography;

export default function AppHeader() {
    const menuItems = [
        { key: 'home', label: 'Home' },
        { key: 'payment', label: 'Payment' },
        { key: 'claims', label: 'Claims' },
        { key: 'investments', label: 'Investments' },
        { key: 'documents', label: 'Documents' },
    ];
    
    return (
        <Header 
            style={{ 
                background: '#fff',
                padding: '0 16px',
                width: '100%',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 1000,
                height: '64px',
                lineHeight: '64px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
            }}
        >
            <Row justify="space-between" align="middle">
                <Col>
                    <Space size={10}>
                        <Text strong style={{ color: 'red', fontSize: '22px' }}>
                            PRUDENTIAL
                        </Text>
                        <Menu
                            mode="horizontal"
                            items={menuItems}
                            style={{
                                fontSize: '18px',
                                fontWeight: 'bold',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                width: '600px',
                                border: 'none'
                            }}
                        />
                    </Space>
                </Col>
                <Col>
                    <Space>
                        <IconFont type="icon-shezhi" style={{ fontSize: '20px', color: '#000' }} />
                        <Input
                            style={{
                                width: '100px',
                                height: '40px',
                                background: 'rgba(204, 204, 204, 0.5)',
                                color: '#000',
                            }}
                            placeholder="My Profile"
                        />
                    </Space>
                </Col>
            </Row>
        </Header>
    );
}
