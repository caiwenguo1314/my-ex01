import React from "react";
import {
  Form,
  Input,
  Upload,
  Typography,
  Space,
  Row,
  Card,
} from "antd";
import { CreditCardOutlined } from "@ant-design/icons";
import { useInsurance } from "../../../context/InsuranceContext";
import "./AppContent4th.css";

const { Title, Text } = Typography;

const commonFormItemStyle = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
  style: { width: "48%" },
};

export default function AppContent4th() {
  const { form, onFinish, normFile, formState } = useInsurance();
  const { lifeAssured, payoutFormValues } = formState;

  return (
    <div className="content-wrapper">
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <div>
          <Title level={4} style={{ fontWeight: "bold", margin: 0 }}>
            Review
          </Title>
          <Text style={{ fontSize: '14px', color: '#666' }}>
            Please review your information before submission
          </Text>
        </div>

        <Card>
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            {lifeAssured.map((name, idx) => (
              <div key={idx}>
                <Text strong style={{ fontSize: '16px' }}>
                  Life Assured: {name.name}
                </Text>
              </div>
            ))}
          </Space>
        </Card>

        <Card>
          <Form
            layout="horizontal"
            requiredMark
            style={{ width: "100%" }}
          >
            <Row justify="space-between">
              <Form.Item
                {...commonFormItemStyle}
                label="Account holder's name"
                name="accountHolder"
              >
                <Text className="review-text">{payoutFormValues.accountHolder}</Text>
              </Form.Item>

              <Form.Item
                {...commonFormItemStyle}
                label="Bank name"
                name="bankName"
              >
                <Text className="review-text">{payoutFormValues.bankName}</Text>
              </Form.Item>
            </Row>

            <Row justify="space-between">
              <Form.Item
                {...commonFormItemStyle}
                label="Bank account number"
                name="accountNumber"
              >
                <Text className="review-text">{payoutFormValues.accountNumber}</Text>
              </Form.Item>

              <Form.Item
                {...commonFormItemStyle}
                label="Branch name"
                name="branchName"
              >
                <Text className="review-text">{payoutFormValues.branchName}</Text>
              </Form.Item>
            </Row>

            <Row justify="space-between">
              <Form.Item
                {...commonFormItemStyle}
                label="Branch address"
                name="branchAddress"
              >
                <Text className="review-text">{payoutFormValues.branchAddress}</Text>
              </Form.Item>
            </Row>

            <Form.Item
              {...commonFormItemStyle}
              name="savingsBook"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              className="upload-item"
              style={{
                ...commonFormItemStyle.style,
                display: "flex",
                backgroundColor: "#fff",
                color: "black",
                border: "1px solid #d9d9d9",
                borderRadius: "10px",
                height: "50px",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingLeft: "20px",
              }}
            >
              <Upload name="savingsBook" action="/upload.do" listType="picture">
                <Space>
                  <CreditCardOutlined style={{ fontSize: "18px", color: "blue" }} />
                  <span style={{ fontWeight: "bold" }}>
                    Your savings book
                  </span>
                </Space>
              </Upload>
            </Form.Item>
          </Form>
        </Card>
      </Space>
    </div>
  );
}
