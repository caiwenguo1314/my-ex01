import React from 'react';

// 内容包装层组件
const ContentWrapper = ({ children, style, ...props }) => (
  <div
    style={{
      height: '90%',
      maxWidth: '800px',
      margin: '0 auto 24px',
      ...style
    }}
    {...props}
  >
    {children}
  </div>
);

export default ContentWrapper;
