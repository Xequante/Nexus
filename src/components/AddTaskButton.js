import React from 'react';
import { Button } from 'primereact/button';
import '../assets/addTaskButton.svg'
import { ReactComponent as AddTaskIcon } from '../assets/addTaskButton.svg';



function AddTaskButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      <AddTaskIcon/>
    </Button>
    // <Button icon={<img src={AddTaskIcon} alt={''}/>} onClick={onClick} />
  );
}

export default AddTaskButton;

// <img src={require('/images/image-name.png')} /> 
// img src={require('../assets/addTaskButton.svg')} 
// className="h-2rem" 