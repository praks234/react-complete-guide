import React, { PureComponent } from 'react';
import Person from './Person/Person'

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[Persons.js] - Inside constructor function",props);
  }

  componentWillMount() {
    console.log("[Persons.js] - Inside componentWillMount function");
  }

  componentDidMount() {
    console.log("[Persons.js] - Inside componentDidMount function");
  }

  componentWillReceiveProps (nextProps) {
    console.log("[UPDATE Persons.js] - Inside componentWillReceiveProps function", nextProps);
  }
  // shouldComponentUpdate (nextProps, nextState) {
  //   console.log("[UPDATE Persons.js] - Inside shouldComponentUpdate function", nextProps, nextState);
  //   return nextProps.persons !== this.props.persons;
  // }
  componentWillUpdate (nextProps, nextState) {
    console.log("[UPDATE Persons.js] - Inside componentWillUpdate function", nextProps, nextState);
  }
  componentDidUpdate () {
    console.log("[UPDATE Persons.js] - Inside componentDidUpdate function");
  }

  render() {
    console.log("[Persons.js] - Inside render function");
    return this.props.persons.map((person, index) => {
      return <Person
                click = {() => this.props.clicked(index)}
                name= {person.name}
                age = {person.age}
                key = {person.id}
                changed = {(event) => this.props.changed(event, person.id)}/>
    })
  }
}

export default Persons;
