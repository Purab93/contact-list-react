import React, { Component } from 'react';
import AddContact from './AddContact';

class AddContactManager extends Component {
  state = {
    contact_list:[],
    counter:1
  };

  constructor(props, context) {
    super(props, context);
    // Binding "this" creates new function with explicitly defined "this"
    // Now "openArticleDetailsScreen" has "ArticleListScreen" instance as "this"
    // no matter how the method/function is called.
    this.state = this.props.state;
    this.addContact = this.addContact.bind(this);
    this.handler = this.handler.bind(this);
  }

  handler() {
    this.setState({
      contact_list: this.state.contact_list
    });

    this.props.handler();
    this.state.counter++;
  }

  addContact (event) {
    // State change will cause component re-render
    
    // var tempArr = this.state.contact_list;
    // tempArr.push({id:this.state.counter});
    // this.setState({
    //   contact_list:tempArr
    // });
  }
  render() {
    return (
      <div className="add-contact-section container">
        <button className="add-contact-btn btn btn-primary" onClick={this.addContact}>Add Contact</button>
        <div className="add-contact-container">
          {
            //this.state.contact_list.map((item) => (
              <AddContact state={this.props.state} handler={this.handler}></AddContact>
            //))
          }
        </div>
      </div>
    );
  }
}

export default AddContactManager;
