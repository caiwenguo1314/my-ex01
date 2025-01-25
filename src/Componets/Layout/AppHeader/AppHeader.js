import React, { useState } from 'react';
import { Row, Col, Input, Menu, Space, Typography, Layout, Button, Drawer } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import { MenuOutlined } from '@ant-design/icons';
import './AppHeader.css';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/c/font_4798402_1kd47iq67va.js',
});

const { Header } = Layout;
const { Text } = Typography;

export default function AppHeader() {
    const [drawerVisible, setDrawerVisible] = useState(false);

    const menuItems = [
        { key: 'home', label: 'Home' },
        { key: 'payment', label: 'Payment' },
        { key: 'claims', label: 'Claims' },
        { key: 'investments', label: 'Investments' },
        { key: 'documents', label: 'Documents' },
    ];

    return (
        <Header className="app-header">
            <div className="header-content">
                <div className="header-left">
                    <Text strong className="logo">
                        PRUDENTIAL
                    </Text>
                    <Menu
                        mode="horizontal"
                        items={menuItems}
                        className="header-menu desktop-menu"
                        selectedKeys={['home']}
                    />
                </div>
                <div className="header-right">
                    <IconFont type="icon-shezhi" style={{ fontSize: '20px' }} />
                    <Input
                        className="profile-input"
                        placeholder="My Profile"
                    />
                    <Button
                        className="menu-button"
                        icon={<MenuOutlined style={{ fontSize: '20px' }} />}
                        onClick={() => setDrawerVisible(true)}
                    />
                </div>
            </div>
            <Drawer
                placement="right"
                onClose={() => setDrawerVisible(false)}
                open={drawerVisible}
                className="mobile-menu-drawer"
                width={280}
            >
                <Menu
                    mode="vertical"
                    items={menuItems}
                    className="mobile-menu"
                    selectedKeys={['home']}
                />
            </Drawer>
        </Header>
    );
}
