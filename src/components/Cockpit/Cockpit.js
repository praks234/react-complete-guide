import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Auxx';

const cockpit = (props) => {
  console.log(Aux);
  const assignedClasses = [];
  let btnClasses = classes.Button;
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  if (props.showPersons) {
    btnClasses = [classes.Button,classes.Red].join(' ');
  }

  return (
    <Aux>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}> This is really working </p>
      <button
        className = {btnClasses}
        onClick={props.clicked}>Toggle Persons</button>
    </Aux>
  );
}

export default cockpit;
