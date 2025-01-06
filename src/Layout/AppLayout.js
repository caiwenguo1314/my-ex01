import React from 'react';
import { Layout, Row, Col, Radio, Input, Avatar, Button } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';

const { Header, Footer, Content } = Layout;

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_4798402_1kd47iq67va.js',
});

const commonAvatarStyle = {
  width: '40px',
  height: '40px',
  fontSize: '24px',
};

const stepDividerStyle = {
  flexGrow: 1,
  height: '1px',
  background: 'repeating-linear-gradient(90deg, #000, #000 2px, transparent 3px, transparent 5px)',
  marginTop: '20px',
};

const AppLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        {/* Header */}
        <Header style={{ background: '#fff', padding: '0 16px' ,width: '100%' }}>
          <Row justify="space-between" align="middle">
            <Col>
              <Row gutter={20} style={{ fontSize: '20px',fontWeight: 'bold' }}>
                <Col style={{ color: 'red', fontSize: '22px' }}>PRUDENTIAL</Col>
                <Col style={{fontSize: '18px'}}>Home</Col>
                <Col style={{fontSize: '18px'}}>Payment</Col>
                <Col style={{fontSize: '18px'}}>Claims</Col>
                <Col style={{fontSize: '18px'}}>Investments</Col>
                <Col style={{fontSize: '18px'}}>Documents</Col>
              </Row>
            </Col>
            <Col>
              <IconFont type="icon-shezhi" style={{ fontSize: '20px', color: '#000' }} />
              <Input
                style={{
                  width: '100px',
                  height: '40px',
                  marginLeft: '10px',
                  background: 'rgba(204, 204, 204, 0.5)',
                  color: '#000',
                  paddingRight: '30px',
                }}
                placeholder="My Profile"
              />
            </Col>
          </Row>
        </Header>

        {/* Steps */}
        <Row justify="space-between" align="middle" style={{ margin: '10px 40px', fontSize: '22px', fontWeight: 'bold' }}>
          {['Lifeassured', 'Claimdetails', 'Payoutdetails', 'Review'].map((text, index) => (
            <React.Fragment key={index}>
              <Col style={{ textAlign: 'center' }}>
                <Avatar style={{ ...commonAvatarStyle, background: index === 0 ? 'red' : '#f0f0f0' }}>{index + 1}</Avatar>
                <div style={{ fontSize: '14px' }}>{text}</div>
              </Col>
              {index < 3 && (
                <div style={stepDividerStyle}></div>
              )}
            </React.Fragment> 
          ))}
        </Row>

        {/* Content */}
        <Content style={{ padding: 24 }}>
          <h1>Select Life Assured</h1>
          <p>Please select 1 life assured for this medical claim</p>

          {['Jay Wong', 'Lane Lou', 'Stallia Wong Yanghe'].map((name, idx) => (
            <div
              key={idx}
              style={{
                height: 180,
                backgroundColor: '#fff',
                marginTop: 20,
                borderRadius: 30,
                padding: '20px',
                position: 'relative',
              }}
            >
              <Radio style={{ fontSize: 24, fontWeight: 'bold' }}>{name}</Radio>
              <Row justify="space-between" style={{ position: 'absolute', bottom: 20, width: '90%' }}>
                {['A', 'B', 'C'].map((suffix, i) => (
                  <Col key={i} span={8} style={{ fontWeight: 'bold' }}>
                    <div>Piece of Cake Term Insurance {suffix}</div>
                    <div>P30000000421</div>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Content>

        {/* Footer */}
        <Footer style={{ textAlign: 'left' }}>
          In case of any queries, please contact our customer relations officer at PRUDENTIAL Customerline: 150008/15008
        </Footer>

        {/* Bottom Buttons */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px 20px', background: '#fff' }}>
          <Button style={{ width: 200, marginRight: 20 }} type="ghost" danger>
            Back
          </Button>
          <Button style={{ width: 200 }} type="primary">
            Continue
          </Button>
        </div>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
