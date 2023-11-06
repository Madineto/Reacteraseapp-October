import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

export class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       items: [],
       currentItem:{
        text: "",
        key:'',
       }
    }
  }
  render() {
    return (
      <main>
       <header>
        <form id = "to-do-form">
          <input type ="text" placeholder='Enter number' />
            <button type = "reset">
               Reset

            </button>
            </form>
      </header>
    </main>
      
    )
  }
}



export default App;
