// Sidebar.js

import React from 'react';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <button className="toggle-button">Toggle Sidebar</button>
      <div className="sidebar-content">
        {/* Sidebar content goes here */}
      </div>
    </div>
  );
}

export default Sidebar;