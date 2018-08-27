import React, { PureComponent } from 'react';
import classes from './App.css';
//import Radium, {StyleRoot} from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxx';
import WithClasses from '../hoc/WithClasses';
//import WithClass from '../hoc/withClass';

class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log("[App.js] - Inside constructor function",props);
    this.state = {
      persons : [
        { id: 1, name: "Prakhar", age: 28 },
        { id: 2, name: "Akhil", age: 29 },
        { id: 3, name: "Golu", age: 27 }
      ],
      otherState: "Some other value",
      showPersons: false,
      toggleClicked: 0
    }
  }

  componentWillMount() {
    console.log("[App.js] - Inside componentWillMount function");
  }

  componentDidMount() {
    console.log("[App.js] - Inside componentDidMount function");
  }

  componentWillReceiveProps (nextProps) {
    console.log("[UPDATE App.js] - Inside componentWillReceiveProps function", nextProps);
  }
  // shouldComponentUpdate (nextProps, nextState) {
  //   console.log("[UPDATE App.js] - Inside shouldComponentUpdate function", nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }
  componentWillUpdate (nextProps, nextState) {
    console.log("[UPDATE App.js] - Inside componentWillUpdate function", nextProps, nextState);
  }
  componentDidUpdate () {
    console.log("[UPDATE App.js] - Inside componentDidUpdate function");
  }


  // switchNameHandler = (newName) => {
  //   //Don't do this => this.state.persons[0].name = "XYZ";
  //   this.setState({
  //     persons : [
  //       { name: newName, age: 28 },
  //       { name: "Akhil", age: 29 },
  //       { name: "Golu", age: 28 }
  //     ]
  //   });
  // };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    //cost person = Object.assign({}, this.state.persons[personIndex]);
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons : persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    //correct way to implement setState
    //this.setState({showPersons: !doesShow});
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked +1
      };
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   borderRadius: '8px',
    //   font: 'inherit',
    //   border: '1px solid transparent',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   outline: 'none',
    //   // ':hover': {
    //   //   backgroundColor: 'lightgreen',
    //   //   color: 'black'
    //   // }
    // }
    console.log("[App.js] - Inside render function");
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler}/>


      //style.backgroundColor = 'red';
      // style[':hover'] ={
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      // way to pass paramters on click.not and efficient way but this also works. = > onClick={() => this.switchNameHandler("XYZZZ!!!!")}
      /* JSX way of adding conditions*/
      /*{
        this.state.showPersons ?
        <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person changed = {this.nameChangedHandler} click={this.switchNameHandler.bind(this,"Prakhar")} name={this.state.persons[1].name} age={this.state.persons[1].age}/>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
          <p>Some text - {this.state.otherState}</p>

        </div> : null
      }*/
      // Way to use StyleRoot for adding media queries
      // <StyleRoot>
      //   <div className="App">
      //     <h1>Hi This is a React App</h1>
      //     <p className={classes.join(' ')}> This is really working </p>
      //     <button
      //     style={style}
      //     onClick={this.togglePersonsHandler}>Toggle Persons</button>
      //     {persons}
      //   </div>
      // </StyleRoot>

      <Aux>
        <button onClick = {() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          appTitle = {this.props.title}
          showPersons = {this.state.showPersons}
          persons = {this.state.persons}
          clicked = {this.togglePersonsHandler}/>
        {persons}
      </Aux>
    );
    //above JSX code gets compiled to below code by the compiler
    //return React.createElement('div', {className:'App'}, React.createElement('h1', null,'Hi, This is React App'));
  }
}

// export default Radium(App);
export default WithClasses(App, classes.App);
