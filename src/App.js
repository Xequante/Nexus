import React from 'react';
import Sidebar from './components/Sidebar';
import CalendarA from './components/CalendarA';
import CommandLine from './components/CommandLine';
import ToolBar from './components/ToolBar';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <ToolBar />
      <div className="content-container">
        <Sidebar />
        <CalendarA />
      </div>
      <CommandLine />
    </div>
  );
}

export default App;
