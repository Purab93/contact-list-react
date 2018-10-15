import React, { Component } from 'react';
import style from './style';
import InputField from './InputField';

class AddContact extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = this.props.state;
        this.state.firstname = null;
        this.state.lastname = null;
        this.state.firstNameError='';
        this.state.lastNameError = '';
        this.state.mobile = null;
        this.state.mobileError='';
        this.state.email = null;
        this.state.emailError = '';

        this.submitBtnClick = this.submitBtnClick.bind(this);
    }
    validateName = name => {
        const regex = /[A-Za-z]{3,}/;

        return !regex.test(name)
            ? "The name must contain at least three letters. Numbers and special characters are not allowed."
            : "";
    };

    onFirstNameBlur = () => {
        const { firstName } = this.state;

        const firstNameError = this.validateName(firstName);

        return this.setState({ firstNameError });
    };

    onFirstNameChange = event =>
        this.setState({
            firstName: event.target.value
        });

    onLastNameBlur = () => {
        const { lastName } = this.state;

        const lastNameError = this.validateName(lastName);

        return this.setState({ lastNameError });
    };

    onLastNameChange = event =>
        this.setState({
            lastName: event.target.value
        });
    
    onMobileChange = event =>
        this.setState({
            mobile: event.target.value
        });
    
    onEmailChange = event =>
        this.setState({
            email: event.target.value
        });
    
    onMobileBlur = event =>{
        var mobileNum = event.target.value,
            phoneno = /^\d{10}$/,
            mobileError;

        mobileError = mobileNum.match(phoneno) ? '' : 'Please enter a valid phone number';
        
        return this.setState({ mobileError});
    }

    onEmailBlur = event => {
        var email = event.target.value,
            emailError;

        emailError = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)? '' : 'Please enter a valid email';
        return this.setState({ emailError });
    }

    submitBtnClick (event) {
        const { firstNameError, lastNameError, mobileError, emailError } = this.state;
        if (!firstNameError && !lastNameError && !mobileError && !emailError){
            var userDetails ={
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                mobile: this.state.mobile,
                email: this.state.email
            };

            this.state.contact_list.push(userDetails);
            this.props.handler();
        }
    }
    render() {
        const { firstNameError, lastNameError, mobileError, emailError} = this.state;
        return (
            <div className="contact-container container" style={style.form} data-val={this.props.value}>
                <h3 className="contact-header text-left">Contact {this.props.value}</h3>
                <div className='row text-left'>
                    <InputField name="firstName"
                        label="First name:"
                        inputType="text"
                        onChange={this.onFirstNameChange}
                        onBlur={this.onFirstNameBlur}
                        error={firstNameError}/> 

                    <InputField name="lastName"
                        label="Last name:"
                        inputType="text"
                        onChange={this.onLastNameChange}
                        onBlur={this.onLastNameBlur}
                        error={lastNameError} />
                </div>
                <div className='row text-left'>
                    <InputField name="mobnum"
                        label="Mobile No.:"
                        inputType="number" 
                        onChange={this.onMobileChange}
                        onBlur={this.onMobileBlur}
                        error={mobileError}/>  

                    <InputField name="email"
                        label="Email:"
                        inputType="email"
                        onBlur={this.onEmailBlur}
                        onChange={this.onEmailChange}
                        error={emailError}/> 
                </div>
                <div className='row text-left'>
                    <div className='col-lg-4 col-md-4 col-sm-6'>   
                        <button className="btn btn-primary submit" onClick={this.submitBtnClick}>Submit</button>
                    </div>    
                </div>
            </div>
        );
    }
}

export default AddContact;
