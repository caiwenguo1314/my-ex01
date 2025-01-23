import React from 'react';

// 内容包装层组件
const ContentWrapper = ({ children, ...props }) => {
  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        marginBottom: '24px',
        ...props.style
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default ContentWrapper;
