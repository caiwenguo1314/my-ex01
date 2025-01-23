import React from 'react';

// 滚动层组件
const ScrollContainer = ({ children, ...props }) => {
  return (
    <div
      className="content-container"
      style={{
        height: '100%',
        overflowY: 'auto',
        padding: '24px',
        paddingBottom: 'calc(var(--content-padding) * 3)',
        ...props.style
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default ScrollContainer;
