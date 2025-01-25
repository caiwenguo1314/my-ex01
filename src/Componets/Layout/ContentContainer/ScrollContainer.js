import React from 'react';

// 滚动层组件
const ScrollContainer = ({ children, style, ...props }) => (
  <div
    className="content-container"
    style={{
      height: '100%',
      overflowY: 'auto',           
      ...style
    }}
    {...props}
  >
    {children}
  </div>
);

export default ScrollContainer;
