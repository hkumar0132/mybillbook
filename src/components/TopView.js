import React from 'react';
import Login from './Login';
import TopViewLeft from './TopViewLeft';

function TopView() {
  return (
    <div className="d-flex p-5" style={{ backgroundColor: '#FDF6F4' }}>
      <TopViewLeft />
      <Login />
    </div>
  );
}

export default TopView;
