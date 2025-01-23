import React from 'react';
import AppContent1th from '../AppContent1th/AppContent1th';
import AppContent2th from '../AppContent2th/AppContent2th';
import AppContent3th from '../AppContent3th/AppContent3th';
import AppContent4th from '../AppContent4th/AppContent4th';

// 使用数组存储组件
const CONTENT_COMPONENTS = [
  AppContent1th,   // index: 0
  AppContent2th,   // index: 1
  AppContent3th,   // index: 2
  AppContent4th,   // index: 3
];

const ContentSwitch = ({ current }) => {
  // 直接用数组索引访问组件
  const ContentComponent = CONTENT_COMPONENTS[current];
  
  if (!ContentComponent) {
    return (
      <div style={{ padding: 20, textAlign: 'center', color: 'red' }}>
        Content {current} not found
      </div>
    );
  }

  return <ContentComponent />;
};

export default ContentSwitch;
