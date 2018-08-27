import React, { Component } from 'react';
//import Radium from 'radium';
import PropTypes from 'prop-types';
import WithClass from '../../../hoc/WithClasses';
import Aux from '../../../hoc/Auxx';

import classes from './Person.css'
class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] - Inside constructor function",props);
  }

  componentWillMount() {
    console.log("[Person.js] - Inside componentWillMount function");
  }
  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.name !== this.props.name;
  }
  componentDidUpdate() {
    console.log("[Person.js] - Inside componentDidUpdate function");
  }

  componentDidMount() {
    console.log("[Person.js] - Inside componentDidMount function");
  }
  render() {
    console.log("[Person.js] - Inside render function");
    return (
      <Aux>
        <p onClick={this.props.click}>Hi! I am {this.props.name} and I am {this.props.age} year(s) old</p>
        <p>{this.props.children}</p>
        <input type="text" value={this.props.name} onChange={this.props.changed}/>
      </Aux>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default WithClass(Person, classes.Person);
;
