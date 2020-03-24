import React from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './components/student';
import College from './components/college';

class App extends React.Component {
  render(){
    return(
      <React.Fragment>
       <Student name="Eager Bellym" number="69420" enrolled={[3,2]}/>
       <Student name="Kilgore Ahoohar" number="44444" enrolled={[0]}/>
       <Student name="Kelvin Hoos" number="77777" enrolled={[1,1,1]}/>
       <College name="George Brown College" location="Casa Loma"/>
       </React.Fragment>
    )
  }
}

export default App;