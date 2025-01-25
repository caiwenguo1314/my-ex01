import React from 'react';

// 视觉层组件
const VisualContainer = ({ children, style, ...props }) => (
  <div
    style={{
      background: '#fff',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
      height: '100%',
      overflow: 'hidden',
      ...style
    }}
    {...props}
  >
    {children}
  </div>
);

export default VisualContainer;
