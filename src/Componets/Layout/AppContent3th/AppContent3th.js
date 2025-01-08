import React from 'react';
import { Layout, Form, Input, Upload, Checkbox, Button, Typography, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function AppContent3th() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <Content style={{ padding: '0 24px', width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
      <Space direction="vertical" size="large" style={{ display: 'flex', width: '100%' }}>
        <div style={{ width: '100%' }}>
          <Title level={2}>Add New Payout Account</Title>
          <Text>The bank will validate your information with the relevant documentation before any funds can be transferred to this bank account.</Text>
        </div>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          requiredMark
          style={{ width: '100%' }}
        >
          <Form.Item
            label="Account holder's name"
            name="accountHolder"
            required
            tooltip="This is a required field"
            rules={[{ required: true, message: 'Please enter account holder name' }]}
          >
            <Input placeholder="Enter bank account holder name" />
          </Form.Item>

          <Form.Item
            label="Bank name"
            name="bankName"
            required
            rules={[{ required: true, message: 'Please enter bank name' }]}
          >
            <Input placeholder="Enter bank name" />
          </Form.Item>

          <Form.Item
            label="Bank account number"
            name="accountNumber"
            required
            rules={[{ required: true, message: 'Please enter bank account number' }]}
          >
            <Input placeholder="Enter bank account number" />
          </Form.Item>

          <Form.Item
            label="Branch name"
            name="branchName"
          >
            <Input placeholder="Enter branch name" />
          </Form.Item>

          <Form.Item
            label="Branch address"
            name="branchAddress"
          >
            <Input placeholder="Enter branch address" />
          </Form.Item>

          <Form.Item
            label="First page savings book"
            name="savingsBook"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="savingsBook" action="/upload.do" listType="picture" style={{ width: '100%' }}>
              <Button icon={<UploadOutlined />} style={{ width: '100%' }}>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
              },
            ]}
          >
            <Checkbox>
              I declare that I have read, understood and fully agreed to the Terms and Conditions for adding the new payout account, including the privacy policy.
            </Checkbox>
          </Form.Item>

          <Text type="secondary" style={{ display: 'block', marginBottom: 24 }}>
            In case of any queries, please contact our customer relations officer at Prudential Customer Line: 1500085 / 1500577
          </Text>

          <Form.Item style={{ marginTop: '24px' }}>
            <Space>
              <Button>Back</Button>
              <Button type="primary" htmlType="submit">Continue</Button>
            </Space>
          </Form.Item>
        </Form>
      </Space>
    </Content>
  );
}
