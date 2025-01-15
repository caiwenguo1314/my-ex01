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

  const  [ current, setCurrent ] = useState(0);

  const addClickHandler = () => {
    setCurrent(prevCurrent => prevCurrent + 1);
}

const subClickHandler = () => {
  setCurrent(prevCurrent => prevCurrent - 1);
}
  

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
      <AppSteps current={current} />

      {/* Content */}

      {current === 0 && <AppContent1th />}
      {current === 1 && <AppContent2th />}
      {current === 2 && <AppContent3th />}
      {current === 3 && <AppContent4th />}

      {/* Footer */}
      <AppFooter  current={current} addClickHandler={addClickHandler} subClickHandler={subClickHandler}/>
    </Layout>
  );
};

export default AppLayout;
