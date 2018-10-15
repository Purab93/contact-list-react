import React, { Component } from 'react';

class AddContact extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = this.props.state;
        this.state.firstname = null;
        this.state.lastname = null;
        this.submitBtnClick = this.submitBtnClick.bind(this);
    }
    onFirstNameChange = event =>
    this.setState({
      firstname: event.target.value
    });

    onLastNameChange = event =>
    this.setState({
        lastname : event.target.value
    });
    
    submitBtnClick (event) {
        var tempArr = this.state.contact_list,
            userDetails ={
                firstname: this.state.firstname,
                lastname: this.state.lastname
            };

        this.state.contact_list.push(userDetails);
        this.props.handler();
    }
    render() {
        return (
            <div className="contact-container container" data-val={this.props.value}>
                <h3 className="contact-header text-left">Contact {this.props.value}</h3>
                <div className='row text-left'>
                    <div className='col-lg-4 col-md-4 col-sm-6'>    
                        <label>
                            <div>First Name</div>
                            <input type='text' name="firstname" placeholder="First Name" onChange={this.onFirstNameChange}></input>
                        </label>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-6'>    
                        <label>
                            <div>Last Name</div>
                            <input type='text' name="lastname" placeholder="Last Name" onChange={this.onLastNameChange}></input>
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
                    <div className='col-lg-4 col-md-4 col-sm-6'>   
                        <button className="btn btn-primary" onClick={this.submitBtnClick}>Submit</button>
                    </div>    
                </div>
            </div>
        );
    }
}

export default AddContact;
