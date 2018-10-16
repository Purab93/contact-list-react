import React, { Component } from 'react';
import ViewContact from './ViewContact';

class ViewContactManager extends Component {
  constructor(props, context) {
    super(props, context);
    // Binding "this" creates new function with explicitly defined "this"
    // Now "openArticleDetailsScreen" has "ArticleListScreen" instance as "this"
    // no matter how the method/function is called.
    this.state = this.props.state;
  }

  render() {
    return (
      <div className="view-contact-section container">
        <div className="view-contact-header">
          <h2>Contact List</h2>
        </div>
        <div className="view-contact row">
          <div className="table-header col-lg-2 col-md-2 col-sm-2 col-xs-2">Name</div>
          <div className="table-header col-lg-4 col-md-4 col-sm-4 col-xs-4">Email</div>
          <div className="table-header col-lg-3 col-md-3 col-sm-3 col-xs-3">Mobile</div>
          <div className="table-header table-col col-lg-2 col-md-2 col-sm-2 col-xs-2">Actions</div>
        </div>
        {
          this.props.state.contact_list.map((item) => (
            <ViewContact key={item.firstName} itemDetails={item}></ViewContact>
          ))
        }
      </div>
    );
  }
}

export default ViewContactManager;
