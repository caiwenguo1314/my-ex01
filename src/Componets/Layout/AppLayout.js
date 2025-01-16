import React from "react";
import { Layout } from "antd";
import { useInsurance } from '../../context/InsuranceContext'

import AppHeader from "./AppHeader/AppHeader";
import AppSteps from "./AppSteps/AppSteps";
import AppFooter from "./AppFooter/AppFooter";
import AppContent1th from "./AppContent1th/AppContent1th";
import AppContent2th from "./AppContent2th/AppContent2th";
import AppContent3th from "./AppContent3th/AppContent3th";
import AppContent4th from "./AppContent4th/AppContent4th";

const { Content } = Layout;

const AppLayout = () => {

  const { formState } = useInsurance()
  // console.log('formState:', formState);
  const { current } = formState;
  // console.log('current:', current);
  return (
    <Layout
      style={{
        minHeight: "100vh",
        maxWidth: "100vw",
      }}
    >
      {/* Header */}
      <AppHeader />

      {/* Main Content Area */}
      <Content
        style={{
          marginTop: '64px',    // Header height
          marginBottom: '80px', // Footer height
          minHeight: 'calc(100vh - 144px)', // viewport height - (header + footer)
          padding: '0 20px',
          position: 'relative'
        }}
      >
        {/* Steps */}
        <AppSteps />

        {/* Page Content */}
        <div style={{ padding: '24px 0' }}>
          {current === 0 && <AppContent1th />}
          {current === 1 && <AppContent2th />}
          {current === 2 && <AppContent3th />}
          {current === 3 && <AppContent4th />}
        </div>
      </Content>

      {/* Footer */}
      <AppFooter />
    </Layout>
  );
};

export default AppLayout;
