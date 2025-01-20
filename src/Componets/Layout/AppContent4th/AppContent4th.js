import React from "react";
import {
  Layout,
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


const { Content } = Layout;
const { Title, Text } = Typography;

// 抽取共用样式
const commonFormItemStyle = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
  style: { width: "48%" },
};

const commonInputStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  color: "black",
  borderColor: "#d9d9d9",
};

export default function AppContent4th() {
  const { form, onFinish, normFile, formState } = useInsurance();
  const { lifeAssured, payoutFormValues } = formState;
  console.log("payoutFormValues:", payoutFormValues);

  return (
    <Content
      style={{
        padding: "0 24px",
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {lifeAssured.map((name, idx) => (
          <Card key={idx} style={{ borderRadius: 30 }}>
            <Text strong> Assured:{name.name}</Text>
          </Card>
        ))}
      </Space>

      <Space
        direction="vertical"
        size="large"
        style={{ display: "flex", width: "100%" }}
      >

        <Form
          layout="horizontal"
          requiredMark
          style={{ width: "100%", borderTop: "1px solid rgba(0, 0, 0, 0.06)" }}
        >
          <Row justify="space-between">
            <Form.Item
              {...commonFormItemStyle}
              label="Account holder's name"
              name="accountHolder"
              required
              tooltip="This is a required field"
              rules={[{ required: true, message: payoutFormValues.accountHolder }]}
            >
              <Text>{payoutFormValues.accountHolder}</Text>
            </Form.Item>

            <Form.Item
              {...commonFormItemStyle}
              label="Bank name"
              name="bankName"
              required
              rules={[{ required: true, message: "Please enter bank name" }]}
            >
              <Text>{payoutFormValues.bankName}</Text>
            </Form.Item>
          </Row>
          <Row justify="space-between">
            <Form.Item
              {...commonFormItemStyle}
              label="Bank account number"
              name="accountNumber"
              required
              rules={[
                { required: true, message: "Please enter bank account number" },
              ]}
            >
              <Text>{payoutFormValues.accountNumber}</Text>
            </Form.Item>

            <Form.Item
              {...commonFormItemStyle}
              label="Branch name"
              name="branchName"
            >
              <Text>{payoutFormValues.branchName}</Text>
            </Form.Item>
          </Row>
          <Row justify="space-between">
            <Form.Item
              {...commonFormItemStyle}
              label="Branch address"
              name="branchAddress"
            >
              <Text>{payoutFormValues.branchAddress}</Text>
            </Form.Item>
          </Row>
          {/* First page savings book */}
          <Form.Item
            {...commonFormItemStyle}
            name="savingsBook"
            valuePropName="fileList"
            getValueFromEvent={normFile}
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
                <CreditCardOutlined
                  style={{ fontSize: "18px", color: "blue" }}
                />
                <span style={{ fontWeight: "bold" }}>
                  your savings book
                </span>
              </Space>
            </Upload>
          </Form.Item>
        </Form>
      </Space>
    </Content>
  );
}
