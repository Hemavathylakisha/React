import React from 'react';
import  ReactDOM  from 'react-dom';

function PortalDemo() {
  return ReactDOM.createPortal(
    <h2>
      Portal Demo
    </h2>,
    document.getElementById('portal_root')
  );
}

export default PortalDemo;
