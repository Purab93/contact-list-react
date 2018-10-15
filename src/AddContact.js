import React, { Component } from 'react';

class AddContact extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = this.props.state;
        this.state.currentDetails={
            firstname:null,
            lastname:null
        }
    }
  render() {
    return (
      <div className="contact-container container" data-val={this.props.value}>
        <h3 className="contact-header text-left">Contact {this.props.value}</h3>
        <div className='row text-left'>
            <div className='col-lg-4 col-md-4 col-sm-6'>    
                <label>
                    <div>First Name</div>
                    <input type='text' name="firstname" placeholder="First Name"></input>
                </label>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-6'>    
                <label>
                    <div>Last Name</div>
                    <input type='text' name="lastname" placeholder="Last Name"></input>
                </label>
            </div>
        </div>
        <div className='row text-left'>
            <div className='col-lg-4 col-md-4 col-sm-6'>    
                <label>
                    <div>Mobile</div>
                    <input type='number' name="mobnum" placeholder="Mobile Number"></input>
                </label>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-6'>    
                <label>
                    <div>Email</div>
                    <input type='text' name="email" placeholder="Email"></input>
                </label>
            </div>
        </div>
        <div className='row text-left'>
            
        </div>
      </div>
    );
  }
}

export default AddContact;
