import React from "react";
import { Layout } from "antd";
import { useInsurance } from '../../context/InsuranceContext'
import { VisualContainer, ScrollContainer, ContentWrapper } from './ContentContainer';
import ContentSwitch from './ContentSwitch';
import './AppLayout.css';

import AppHeader from "./AppHeader/AppHeader";
import AppSteps from "./AppSteps/AppSteps";
import AppFooter from "./AppFooter/AppFooter";

const { Content } = Layout;

const AppLayout = () => {
  const { formState } = useInsurance()
  const { current } = formState;

  return (
    <Layout
      style={{
        minHeight: "100vh",
        maxWidth: "100vw",
        '--header-height': '64px',
        '--header-height-mobile': '56px',
        '--steps-height': '84px',
        '--steps-height-mobile': '64px',
        '--footer-height': '80px',
        '--footer-height-mobile': '64px',
        '--content-padding': '20px',
        '--content-padding-mobile': '12px',
        '--content-max-width': '1200px',
        '@media screen and (max-width: 768px)': {
          '--header-height': 'var(--header-height-mobile)',
          '--steps-height': 'var(--steps-height-mobile)',
          '--footer-height': 'var(--footer-height-mobile)',
          '--content-padding': 'var(--content-padding-mobile)'
        }
      }}
    >
      {/* Header */}
      <AppHeader className="app-header" />

      {/* Steps - 固定在Header下方 */}
      <div 
        className="app-steps"
        style={{
          position: 'fixed',
          top: 'var(--header-height)',
          left: 0,
          right: 0,
          height: 'var(--steps-height)',
          background: 'rgb(245, 245, 245)',
          zIndex: 100,
        }}
      >
        <AppSteps />
      </div>

      {/* Main Content Area */}
      <Content
        className="app-content"
        style={{
          marginTop: 'calc(var(--header-height) + var(--steps-height))',
          marginBottom: 'var(--footer-height)',
          padding: '0 var(--content-padding)',
          position: 'relative',
          maxWidth: 'var(--content-max-width)',
          margin: '0 auto',
          width: '100%',
          height: 'calc(100vh - var(--header-height) - var(--steps-height) - var(--footer-height))'
        }}
      >
        <VisualContainer>
          <ScrollContainer>
            <ContentWrapper>
              <ContentSwitch current={current} />
            </ContentWrapper>
          </ScrollContainer>
        </VisualContainer>
      </Content>

      {/* Footer */}
      <AppFooter className="app-footer" current={current} />
    </Layout>
  );
};

export default AppLayout;
