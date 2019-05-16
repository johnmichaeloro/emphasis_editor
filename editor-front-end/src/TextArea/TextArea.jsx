import React, {Component} from 'react';
const axios = require('axios');

axios.defaults.headers.post['Content-Type'] = 'application/json';

class TextArea extends Component {
  constructor(){
    super();
    this.state = {
      title: '',
      text: '',
      signs: []
    }
  }
  emphasisCall = async (text) => {
    console.log(text);
      const emphasisURL = 'https://emphasis.ai/api/analysis_1/';
      const corsURL = `https://cors-anywhere.herokuapp.com/${emphasisURL}`;
      await axios
        .post(corsURL, {
          input: text
        })
        .then((analysis) => {
          //don't I need to enter a setState to empty the signs property here?
          let signsArr = analysis.data.analysis[0].signs;
          for (let i = 0; i < signsArr.length; i++) {
            let newArr = [];
            let signMarker = [signsArr[i].index_begin, signsArr[i].index_end];
            newArr.push(signMarker);
            this.setState({
                signs: [...this.state.signs, signMarker]
              })
            console.log(this.state.signs);
          }
        })
  }

  handleSubmit = (e) => {
    console.log('clicked');
  }
  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value
    })
    console.log(this.state.title);
  }
  handleTextChange = (e) => {
      this.setState({
        text: e.target.value
      })

      if (this.state.text[this.state.text.length - 1] === ' ' || this.state.text[this.state.text.length - 1] === '.'){
      this.emphasisCall(this.state.text)
    }
  }

  render(){
    return(
      <div className='textArea'>
        <input placeholder='title' value={this.state.title} onChange={(e)=>this.handleTitleChange(e)} id='entryTitle'/>
        <textarea rows='5' cols='55'placeholder= "Enter your pattern here." className='placeHolderText' onChange={(e)=>this.handleTextChange(e)} value={this.state.text} id='entryText'/>
        <textarea rows='5' cols='55' placeholder="Enter your description here." />
        <br></br>
        <div className='saveButton'>
          <input type='submit' text='Save' onClick={this.handleSubmit}/>
        </div>
      </div>
    )
  }
}

export default TextArea;
