import React from "react";
import { Layout, Card, Space, Radio, Typography } from "antd";
import { useInsurance } from "../../../context/InsuranceContext";

const { Content } = Layout;
const { Text, Title } = Typography;

export default function AppContent1th() {
  const { nameData, selectedValues, handleRadioChange } = useInsurance();

  return (
    <div className="content-wrapper">
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <div>
          <Title level={2}>Select Life Assured</Title>
          <Text>
            Please select 1 life assured for this medical claim
          </Text>
        </div>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          {nameData.map((name, idx) => (
            <Card key={idx}>
              <Radio
                value={idx}
                onClick={() => handleRadioChange(idx)}
                checked={selectedValues.includes(idx)}
              >
                <Text strong style={{ fontSize: 20 }}>{name.name}</Text>
              </Radio>
              <div className="policy-info">
                <Space wrap size={[32, 16]}>
                  {["A", "B", "C"].map((suffix, i) => (
                    <div key={i} className="policy-item">
                      <Text>Piece of Cake Term Insurance {suffix}</Text>
                      <br />
                      <Text type="secondary">P30000000421</Text>
                    </div>
                  ))}
                </Space>
              </div>
            </Card>
          ))}
        </Space>
      </Space>
    </div>
  );
}
