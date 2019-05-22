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
    console.log(e.currentTarget.value);
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }
  render(){
    return(
      <div>
        <form onSubmit={this.props.addPattern.bind(null, this.state)}>
          <h2>Add a pattern to the catalog</h2>
          <label>
            Title: <input type='text' name='title' onChange={this.updatePattern} />
          </label>
          <br/>
          <label>
            Author: <input type='text' name='author' onChange={this.updatePattern} />
          </label>
          <br/>
          <label>
            Publication: <input type='text' name='publication' onChange={this.updatePattern} />
          </label>
          <br/>
          <label>
            Year: <input type='text' name='year' onChange={this.updatePattern} />
          </label>
          <br/>
          <label>
            URL: <input type='text' name='url' onChange={this.updatePattern} />
          </label>
          <br/>
          <label>
            Pattern: <input type='text' name='pattern' onChange={this.updatePattern} />
          </label>
          <br/>
          <label>
            Description: <input type='text' name='description' onChange={this.updatePattern} />
          </label>
          <br/>
          <label>
            Text: <input type="text" name='text' onChange={this.updatePattern} />
          </label>
          <br/>
          <label>
            Commentary: <input name='commentary' onChange={this.updatePattern} />
          </label>
          <br/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default CreatePattern;
