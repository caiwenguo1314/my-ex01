import React from "react";
import { Layout } from "antd";
import { useState } from "react";

import AppHeader from "./AppHeader/AppHeader";
import AppSteps from "./AppSteps/AppSteps";

import AppFooter from "./AppFooter/AppFooter";
import AppContent1th from "./AppContent1th/AppContent1th";
import AppContent2th from "./AppContent2th/AppContent2th";
import AppContent3th from "./AppContent3th/AppContent3th";
import AppContent4th from "./AppContent4th/AppContent4th";





const AppLayout = () => {

  const [ step, setStept ] = useState(1);
  console.log('step:', step);
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

      {step === 1 && <AppContent1th />}
      {step === 2 && <AppContent2th />}
      {step === 3 && <AppContent3th />}
      {step === 4 && <AppContent4th />}

      {/* Footer */}
      <AppFooter />
    </Layout>
  );
};

export default AppLayout;
