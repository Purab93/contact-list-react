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
        <div className="contact-name table-col col-lg-2 col-md-2 col-sm-2 col-xs-2">{this.props.itemDetails.firstName + this.props.itemDetails.lastName}</div>
        <div className="contact-email table-col col-lg-4 col-md-4 col-sm-4 col-xs-4">{this.props.itemDetails.email}</div>
        <div className="contact-mobile table-col col-lg-3 col-md-3 col-sm-3 col-xs-3">{this.props.itemDetails.mobile}</div>
        <div className="contact-actions table-col col-lg-2 col-md-2 col-sm-2 col-xs-2">
          <div className="edit-action col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <button className="btn btn-primary">Edit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewContact;
