import React from 'react';
import { Layout,  } from 'antd';

import AppHeader from './AppHeader/AppHeader';
import AppSteps from './AppSteps/AppSteps';
import AppContent1th from './AppContent1th/AppContent1th';
import AppFooter from './AppFooter/AppFooter';





const AppLayout = () => {



  return (
    <Layout style={{ minHeight: '100vh' }}>

      {/* Header */}
      <AppHeader />

      {/* Steps */}
      <AppSteps />

      {/* Content */}
      <AppContent1th />

      {/* Footer */}
      <AppFooter />
    </Layout>
  );
};

export default AppLayout;
