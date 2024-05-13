import React from 'react';
import '../styles/CommandLine.css';
import { AutoComplete } from 'primereact/autocomplete';


function CommandLine() {
  return (
    <div className="command-line">
      <input type="text" placeholder="Type your command here..." />
    </div>
  );
}

export default CommandLine;