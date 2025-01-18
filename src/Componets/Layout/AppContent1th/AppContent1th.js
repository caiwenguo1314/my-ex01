import React from "react";
import { Layout, Row, Col, Radio, Card, Typography, Space } from "antd";
import { useState } from "react";
import { useInsurance } from "../../../context/InsuranceContext";

const { Title, Text, Paragraph } = Typography;

const { Content } = Layout;

export default function AppContent1th() {
  const {
    updateLifeAssured,
    formState,
    nameData,
    selectedValues,
    handleRadioChange,
  } = useInsurance();
//   console.log("selectedValues:", selectedValues);

//   console.log("lifeAssured:", formState.lifeAssured);

  return (
    <Content
      style={{
        padding: "0 24px",
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      <Space direction="vertical" size="large" style={{ display: "flex" }}>
        <div>
          <Title level={2}>Select Life Assured</Title>
          <Paragraph>
            Please select 1 life assured for this medical claim
          </Paragraph>
        </div>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          {nameData.map((name, idx) => (
            <Card key={idx} style={{ borderRadius: 30 }}>
              <Radio
                value={idx}
                onClick={() => handleRadioChange(idx)}
                checked={selectedValues.includes(idx)}
                style={{ fontSize: 24, fontWeight: "bold" }}
              >
                {name.name}
              </Radio>
              <Row justify="space-between" style={{ marginTop: 40 }}>
                {["A", "B", "C"].map((suffix, i) => (
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
  );
}
