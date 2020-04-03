import React from 'react';
import axios from 'axios';

export default class RegisterUser extends React.Component {
  state = {
    first_name: '',
    last_name:'',
    mobile:'',
    location:'',
    email:''
  }

  firstNameChange = event => {
    this.setState({ first_name: event.target.value });
  }
  lastNameChange = event => {
    this.setState({ last_name: event.target.value });
  }
  emailChange = event => {
    this.setState({ email: event.target.value });
  }
  locationChange = event => {
    this.setState({ location: event.target.value });
  }
  setMobileValue=()=>{
      this.setState({mobile:this.props.mobileNo})
  }

  handleSubmit = event => {
    event.preventDefault();

    const userInfo = {
      first_name: this.state.first_name,
      last_name:this.state.last_name,
      mobile:this.state.mobile,
      location:this.state.location,
      email:this.state.email
    };

    axios.post(`/register`, { userInfo })
      .then(res => {
        console.log(res);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="firstName" onChange={this.firstNameChange} />
            <input type="text" name="lastName" onChange={this.lastNameChange} />
            <input type="text" name="email" onChange={this.emailChange} />
            <input type="text" name="location" onChange={this.locationChange} />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}