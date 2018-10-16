import React, { Component } from 'react';
import './App.css';
import AddContactManager from './AddContactManager';
import ViewContactManager from './ViewContactManager';

class App extends Component {
  state = {
    contact_list:[],
    counter:1
  };

  constructor(props) {
    super(props)

    this.handler = this.handler.bind(this)
  }

  handler() {
    this.setState({
      contact_list: this.state.contact_list
    })
  }

  render() {
    return (
      <div className="App">
        <AddContactManager state={this.state} handler={this.handler}></AddContactManager>
        {this.state.contact_list.length? <ViewContactManager state={this.state}></ViewContactManager>:''}
      </div>
    );
  }
}

export default App;
