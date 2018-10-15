import React, { Component } from 'react';

class ViewContact extends Component {
  state = {
    itemDetails:{}
  };

  constructor(props, context) {
    super(props, context);
    // Binding "this" creates new function with explicitly defined "this"
    // Now "openArticleDetailsScreen" has "ArticleListScreen" instance as "this"
    // no matter how the method/function is called.
    this.state = this.props.state;
  }

  render() {
    return (
      <div className="view-contact row">
        <div className="contact-first-name">{this.props.itemDetails.firstname}</div>
        <div className="contact-last-name">{this.props.itemDetails.lastname}</div>
      </div>
    );
  }
}

export default ViewContact;
