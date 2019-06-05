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
      patternType: null,
      description: '',
      text: [{
        text: '',
        analysis: null,
        data: null
      }],
      commentary: ''
    }
  }
  updatePattern = (e) => {
    console.log(e.currentTarget.value);
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }
  //Here I need a function that renders all of the patternType.patternType as options in a drop down menu.
  //When the user selects an option, the objectId of that option becomes the value of state's patternType property.
  //The description associated with that objectId becomes the value of state's description property.
  //If add new is selected, Pattern Type becomes a text input and do does Description.
  //The user can add a new pattern type and a new description and have them pushed to MongoDB.
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
            Pattern Type: <select name='patternType'></select>
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
