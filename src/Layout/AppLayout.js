import React from 'react';
import { Layout, Menu, Flex, Radio, Input, Progress, Avatar } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;

const AppLayout = () => {
  const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/c/font_4798402_1kd47iq67va.js', // 替换为你的链接
  });
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 主体布局 */}
      <Layout>
        {/* 头部 */}
        <Header style={{ background: '#fff', padding: '0 16px', }}>
          <Flex justify='space-between'>
            <Flex gap="20px" style={{ fontSize: '18px', fontWeight: 'bold' }}>
              <div style={{ color: 'red', fontSize: '22px', fontWeight: 'bold' }}>PRUDENTIAL</div>
              <div>Home</div>
              <div>Payment</div>
              <div>Claims</div>
              <div>Investments</div>
              <div>Documents</div>
            </Flex>
            <div>
              <IconFont type="icon-shezhi" style={{ fontSize: '20px', color: '#000' }} />
              <Input style={{ width: '100px', height: '40px', marginTop: '10px', marginLeft: '10px', background: 'rgba(204, 204, 204, 0.5)', color: '#000', paddingRight: '30px', }} placeholder="My Profile" />
            </div>
          </Flex>
        </Header>
        <Flex justify='center' style={{ fontSize: '22px', fontWeight: 'bold', color: '#000', marginTop: '10px', marginBottom: '10px' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Avatar style={{ width: '40px', height: '40px', fontSize: '24px', background: 'red' }} >1</Avatar>
            <div style={{ fontSize: '14px', }}>Lifeassured</div>
          </div>
          <div
            style={{
              width: '50px',
              height: '1px',
              background: 'repeating-linear-gradient(90deg, #000, #000 2px, transparent 3px, transparent 5px)',
              marginTop: '20px'

            }}
          ></div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Avatar style={{ width: '40px', height: '40px', fontSize: '24px', }} >2</Avatar>
            <div style={{ fontSize: '14px', }}>Claimdetais</div>
          </div>
          <div
            style={{
              width: '50px',
              height: '1px',
              background: 'repeating-linear-gradient(90deg, #000, #000 2px, transparent 3px, transparent 5px)',
              marginTop: '20px'

            }}
          ></div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Avatar style={{ width: '40px', height: '40px', fontSize: '24px', }} >3</Avatar>
            <div style={{ fontSize: '14px', }}>Payout detalls</div>
          </div>
          <div
            style={{
              width: '50px',
              height: '1px',
              background: 'repeating-linear-gradient(90deg, #000, #000 2px, transparent 3px, transparent 5px)',
              marginTop: '20px'

            }}
          ></div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Avatar style={{ width: '40px', height: '40px', fontSize: '24px', }} >4</Avatar>
            <div style={{ fontSize: '14px', }}>Revtew</div>
          </div>
        </Flex>


        {/* 内容 */}
        <Content flex-grow style={{}}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            这里是主要内容
          </div>
        </Content>

        {/* 页脚 */}
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2024 Created by Me
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
