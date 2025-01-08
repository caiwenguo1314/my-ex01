import React from 'react'
import { Layout, Row, Col, Radio, Card, Typography, Space } from 'antd';
import { useState } from 'react';


const { Title, Text, Paragraph } = Typography;

const { Content, } = Layout;

export default function AppContent1th() {
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
    )
}
