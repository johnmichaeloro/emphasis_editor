import React, {Component} from 'react';

class CreateEntry extends Component {
  constructor(){
    super();
    this.state = {
      title: '',
      description: ''
    }
  }
  updateEntry = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }
  render(){
    return(
      <form onSubmit={this.props.addEntry.bind(null, this.state)}>
        <label>
          Entry:
          <input type='text' name='title' onChange={this.updateEntry}/>
        </label>
        <label>
          Description:
          <input type='text' name='description' onChange={this.updateEntry}/>
        </label>
        <input type='submit'/>
      </form>
    )
  }
}

default export CreateEntry;
