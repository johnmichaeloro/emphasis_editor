import React, {Component} from 'react';

class CreatePattern extends Component {
  constructor(){
    super();
    this.state = {
      title: '',
      author: '',
      publication: '',
      year: '',
      url: '',
      pattern: '',
      description: '',
      text: '',
      commentary: ''
    }
  }
  updatePattern = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }
  render(){
    return(
      <div>
        <form onSubmit={this.props.addPattern.bind(null, this.state)}>
          <h2>Add a pattern to the catalog</h2>
          Title: <input type='text' name='title' onChange={this.updatePattern} placeholder='enter the title of the text' />
          <br/>
          Author: <input type='text' name='author' onChange={this.updatePattern} placeholder='enter the author of the text' />
          <br/>
          Publication: <input type='text' name='publication' onChange={this.updatePattern} placeholder='enter the publication' />
          <br/>
          Year: <input type='text' name='year' onChange={this.updatePattern} placeholder='enter the year of publication' />
          <br/>
          URL: <input type='text' name='url' onChange={this.updatePattern} placeholder='enter the author of the text' />
          <br/>
          Pattern: <input type='text' name='pattern' onChange={this.updatePattern} placeholder='enter the author of the text' />
          <br/>
          Description: <input name='description' onChange={this.updatePattern} placeholder='enter a description of the pattern' />
          <br/>
          Text: <input name='text' onChange={this.updatePattern} placeholder='enter the text' />
          <br/>
          Commentary: <input name='commentary' onChange={this.updatePattern} placeholder='enter commentary on the pattern' />
          <br/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default CreatePattern;
