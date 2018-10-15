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
