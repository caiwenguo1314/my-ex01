import React from 'react';
import { Layout, Menu, Flex, Radio, Input, Progress, Avatar, Button } from 'antd';
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
        <Flex justify='space-between' style={{ fontSize: '22px', fontWeight: 'bold', color: '#000', margin: '10px 40px', }}>
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
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              flexGrow: 1,
              height: '1px',
              background: 'repeating-linear-gradient(90deg, #000, #000 2px, transparent 3px, transparent 5px)',
              marginTop: '20px'
            }}
          />
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
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              flexGrow: 1,
              height: '1px',
              background: 'repeating-linear-gradient(90deg, #000, #000 2px, transparent 3px, transparent 5px)',
              marginTop: '20px'
            }}
          />
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
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              flexGrow: 1,
              height: '1px',
              background: 'repeating-linear-gradient(90deg, #000, #000 2px, transparent 3px, transparent 5px)',
              marginTop: '20px'
            }}
          />
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
          <div style={{ padding: 24, minHeight: 360 }}>
            <h1 style={{ marginLeft: 20, }}>Select Life Assured</h1>
            <span>Pease select 1 life assured for this medical claim</span>
            <div style={{ height: 180, width: '100%', backgroundColor: '#fff', marginTop: 20, borderRadius: 30, position: 'relative' }}>
              <Radio style={{ position: 'absolute', left: 50, top: 30, fontSize: 24, fontWeight: 'bold', }} >Jay Wong</Radio>
              <Flex style={{ position: 'absolute', left: 50, bottom: 30, width: '100%', }}>
                <div style={{
                  flexBasis: '33.33%',
                  flexGrow: 0,
                }}>
                  <div style={{ fontWeight: 'bold' }}>Piece of Cake Term Insurance A</div>
                  <div>P30000000421</div>
                </div>
                <div style={{
                  flexBasis: '33.33%',
                  flexGrow: 0,
                }}>
                  <div style={{ fontWeight: 'bold' }}>Piece of Cake Term Insurance B</div>
                  <div>P30000000421</div>
                </div>
                <div style={{
                  flexBasis: '33.33%',
                  flexGrow: 0,
                }}>
                  <div style={{ fontWeight: 'bold' }}>Piece of Cake Term Insurance C</div>
                  <div>P30000000421</div>
                </div>
              </Flex>
            </div>
            <div style={{ height: 180, width: '100%', backgroundColor: '#fff', marginTop: 20, borderRadius: 30, position: 'relative' }}>
              <Radio style={{ position: 'absolute', left: 50, top: 30, fontSize: 24, fontWeight: 'bold', }} >Lane Lou</Radio>
              <Flex style={{ position: 'absolute', left: 50, bottom: 30, width: '100%', }}>
                <div style={{
                  flexBasis: '33.33%',
                  flexGrow: 0,
                }}>
                  <div style={{ fontWeight: 'bold' }}>Piece of Cake Term Insurance A</div>
                  <div>P30000000421</div>
                </div>
                <div style={{
                  flexBasis: '33.33%',
                  flexGrow: 0,
                }}>
                  <div style={{ fontWeight: 'bold' }}>Piece of Cake Term Insurance B</div>
                  <div>P30000000421</div>
                </div>

              </Flex>
            </div>
            <div style={{ height: 180, width: '100%', backgroundColor: '#fff', marginTop: 20, borderRadius: 30, position: 'relative' }}>
              <Radio style={{ position: 'absolute', left: 50, top: 30, fontSize: 24, fontWeight: 'bold', }} >Stallia Wong Yanghe</Radio>
              <Flex style={{ position: 'absolute', left: 50, bottom: 30, width: '100%', }}>
                <div style={{
                  flexBasis: '33.33%',
                  flexGrow: 0,
                }}>
                  <div style={{ fontWeight: 'bold' }}>Piece of Cake Term Insurance A</div>
                  <div>P30000000421</div>
                </div>
              </Flex>
            </div>
          </div>
        </Content>

        {/* 页脚 */}
        <Footer style={{ textAlign: 'left' }}>
          in case of any queres.please contact our customerretations oficeratprudentiaI Customertine:1s0008s/1s00s
        </Footer>
        <div style={{display: 'flex', width: '100%', backgroundColor: '#fff',height:50,alignItems: 'center',justifyContent: 'flex-end',}}>
          <div style={{}}>
            <Button style={{width: 200, height: 30, color:'red',fontWeight: 'bold',backgroundColor: 'rgba(255, 0, 0, 0.2)',border:'none'}}>Back</Button>
            <Button style={{width: 200, height: 30,marginLeft: 20,color:'rgba(200, 200, 200, 1)',fontWeight: 'bold',backgroundColor: 'rgba(220, 220, 220, 0.8)',border:'none' }}>Continue</Button>
          </div>
        </div>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
