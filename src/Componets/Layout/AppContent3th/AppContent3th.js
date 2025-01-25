import React from "react";
import {
  Form,
  Input,
  Upload,
  Checkbox,
  Typography,
  Space,
  Row,
  Card,
} from "antd";
import { CreditCardOutlined } from "@ant-design/icons";
import { useInsurance } from "../../../context/InsuranceContext";
import "./AppContent3th.css";

const { Title, Text } = Typography;

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

export default function AppContent3th() {
  const { form, onFinish, normFile, handleValuesChange } = useInsurance();

  return (
    <div className="content-wrapper">
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <div>
          <Title level={4} style={{ fontWeight: "bold", margin: 0 }}>
            Add New Payout Account
          </Title>
          <Text style={{ fontSize: '14px', color: '#666' }}>
            The bank will validate your information with the relevant
            documentation before any funds can be transferred to this bank
            account.
          </Text>
        </div>

        <Card>
          <Text>
            All fields marked with <span style={{ color: "red" }}>*</span> are
            mandatory.
          </Text>
          <Form
            form={form}
            layout="horizontal"
            onFinish={onFinish}
            onValuesChange={handleValuesChange}
            requiredMark
            style={{ width: "100%", marginTop: "16px" }}
          >
            <Row justify="space-between">
              <Form.Item
                {...commonFormItemStyle}
                label="Account holder's name"
                name="accountHolder"
                required
                tooltip="This is a required field"
                rules={[
                  { required: true, message: "Please enter account holder name" },
                  {
                    pattern: /^[A-Za-z\s]{2,50}$/,
                    message: "Name should only contain letters and spaces, 2-50 characters"
                  },
                ]}
              >
                <Input
                  placeholder="Enter bank account holder name"
                  style={commonInputStyle}
                />
              </Form.Item>

              <Form.Item
                {...commonFormItemStyle}
                label="Bank name"
                name="bankName"
                required
                rules={[
                  { required: true, message: "Please enter bank name" },
                  {
                    pattern: /^[A-Za-z\s]{2,50}$/,
                    message: "Bank name should only contain letters and spaces",
                  },
                ]}
              >
                <Input placeholder="Enter bank name" style={commonInputStyle} />
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
                  {
                    pattern: /^\d{10,20}$/,
                    message: "Account number should be 10-20 digits"
                  }
                ]}
              >
                <Input
                  placeholder="Enter bank account number"
                  style={commonInputStyle}
                />
              </Form.Item>

              <Form.Item
                {...commonFormItemStyle}
                label="Branch name"
                name="branchName"
                rules={[
                  {
                    pattern: /^[A-Za-z0-9\s]{2,50}$/,
                    message: "Branch name should contain only letters, numbers and spaces"
                  }
                ]}
              >
                <Input placeholder="Enter branch name" style={commonInputStyle} />
              </Form.Item>
            </Row>

            <Row justify="space-between">
              <Form.Item
                {...commonFormItemStyle}
                label="Branch address"
                name="branchAddress"
                rules={[
                  {
                    pattern: /^[A-Za-z0-9\s,.-]{5,100}$/,
                    message: "Please enter a valid address"
                  }
                ]}
              >
                <Input
                  placeholder="Enter branch address"
                  style={commonInputStyle}
                />
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
                    First page savings book
                  </span>
                </Space>
              </Upload>
            </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              style={{ marginBottom: 0 }}
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("Should accept agreement")),
                },
              ]}
            >
              <Checkbox>
                I declare that I have read, understood and fully agreed to the
                Terms and Conditions for adding the new payout account, including
                the privacy policy.
              </Checkbox>
            </Form.Item>
          </Form>
        </Card>
      </Space>
    </div>
  );
}
