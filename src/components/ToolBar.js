// ToolBar.js

import React from 'react';
import { Toolbar } from 'primereact/toolbar';
import '../styles/ToolBar.css';
import AddTaskButton from './AddTaskButton';

function ToolBar() {
  return (
    <div className="tool-bar">
      <Toolbar start={AddTaskButton} center={AddTaskButton} end={AddTaskButton} />
    </div>
  );
}

export default ToolBar;
