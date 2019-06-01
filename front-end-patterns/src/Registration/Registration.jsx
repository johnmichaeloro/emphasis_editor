import React from 'react';

class Registration extends React.Component {
  constructor(){
    super();
    this.state = {
      username: '',
      email: '',
      password: ''
    }
  };
  handleChange = (e) => {
    console.log(this.state, 'this is handleChange');
    this.setState({
      [e.target.name]: e.target.value
    })
  };
  render(){
    return(
      <form>
        Username: <input type='text' name='username' onChange={this.handleChange} />
        Email: <input type='text' name='email' onChange={this.handleChange}/>
        Password: <input type='text' name='password' onChange={this.handleChange}/>
        <input type='submit' />
      </form>
    )
  }
}

export default Registration;
