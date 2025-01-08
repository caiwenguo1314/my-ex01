import React from "react";
import { Layout } from "antd";

import AppHeader from "./AppHeader/AppHeader";
import AppSteps from "./AppSteps/AppSteps";
import AppContent1th from "./AppContent1th/AppContent1th";
import AppFooter from "./AppFooter/AppFooter";
import AppContent3th from "./AppContent3th/AppContent3th";

const AppLayout = () => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
        maxWidth: "100vw",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <AppHeader />

      {/* Steps */}
      <AppSteps />

      {/* Content */}

      {/* <AppContent1th /> */}
      <AppContent3th />

      {/* Footer */}
      <AppFooter />
    </Layout>
  );
};

export default AppLayout;
