import React from 'react';
import { Button } from 'primereact/button';


function AddTaskButton({ onClick }) {
  return (
    <Button icon={<img src='../assets/addTaskButton.svg' className="h-2rem" />} onClick={onClick} />
  );
}

export default AddTaskButton;