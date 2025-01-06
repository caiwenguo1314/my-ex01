import React from 'react';
import { Layout, Row, Col, Radio, Input, Steps, Menu, Card, Typography, Button, Space } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import { useState } from 'react';

const { Header, Footer, Content } = Layout;
const { Title, Text, Paragraph } = Typography;

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_4798402_1kd47iq67va.js',
});

const AppLayout = () => {
  const menuItems = [
    { key: 'home', label: 'Home' },
    { key: 'payment', label: 'Payment' },
    { key: 'claims', label: 'Claims' },
    { key: 'investments', label: 'Investments' },
    { key: 'documents', label: 'Documents' },
  ];
  const nameData = [
    { name: "Jay Wong", inx: "1" },
    { name: "Lane Lou", inx: "2" },
    { name: "Stallia Wong Yanghe", inx: "3" },]

  const [selectedValues, setSelectedValues] = useState([]);

  const handleRadioChange = (value) => {
    setSelectedValues((prev) => {
      if (prev.includes(value)) {
        // 如果已选中，则取消选中
        return prev.filter((item) => item !== value);
      } else {
        // 如果未选中，则添加到选中列表
        return [...prev, value];
      }
    });
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        {/* Header */}
        <Header style={{ background: '#fff', padding: '0 16px', width: '100%' }}>
          <Row justify="space-between" align="middle">
            <Col >
              <Space size={10}>
                <Text strong style={{ color: 'red', fontSize: '22px' }}>
                  PRUDENTIAL
                </Text>
                <Menu
                  // 设置菜单项的排列方式为水平排列
                  mode="horizontal"
                  // 设置菜单项的数据源
                  items={menuItems}
                  // 设置菜单项的样式，字体大小为20px，字体加粗
                  style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
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

        {/* Steps */}
        <div style={{ margin: '24px 40px' }}>
          <Steps
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
        </div>

        {/* Content */}
        <Content style={{ padding: '0 24px' }}>
          <Space direction="vertical" size="large" style={{ display: 'flex' }}>
            <div>
              <Title level={2}>Select Life Assured</Title>
              <Paragraph>Please select 1 life assured for this medical claim</Paragraph>
            </div>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              {nameData.map((name, idx) => (
                <Card key={idx} style={{ borderRadius: 30 }}>
                  <Radio value={idx} onClick={() => handleRadioChange(idx)} checked={selectedValues.includes(idx)} style={{ fontSize: 24, fontWeight: 'bold' }} >
                    {name.name}
                  </Radio>
                  <Row justify="space-between" style={{ marginTop: 40 }}>
                    {['A', 'B', 'C'].map((suffix, i) => (
                      <Col key={i} span={8}>
                        <Text strong>Piece of Cake Term Insurance {suffix}</Text>
                        <br />
                        <Text strong>P30000000421</Text>
                      </Col>
                    ))}
                  </Row>
                </Card>
              ))}
            </Space>

          </Space>
        </Content>

        {/* Footer */}
        <Footer style={{ textAlign: 'left' }}>
          <Text>
            In case of any queries, please contact our customer relations officer at PRUDENTIAL Customerline: 150008/15008
          </Text>
        </Footer>

        {/* Bottom Buttons */}
        <div style={{ padding: '16px 24px', background: '#fff' }}>
          <Row justify="end">
            <Space size="middle">
              <Button size="large" style={{ width: 200 }} type="default" danger>
                Back
              </Button>
              <Button size="large" style={{ width: 200 }} type="primary">
                Continue
              </Button>
            </Space>
          </Row>
        </div>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
