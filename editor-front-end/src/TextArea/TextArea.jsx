import React, {Component} from 'react';
import HighlightedTextarea from 'react-highlighted-textarea';
const axios = require('axios');

axios.defaults.headers.post['Content-Type'] = 'application/json';

class TextArea extends Component {
  constructor(){
    super();
    this.state = {
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
/**
  doHighlight = () => {
    return this.state.signs
  }
**/
  handleChange = (e) => {

    this.setState({
      text: e.target.value
    })

    if (this.state.text[this.state.text.length - 1] === ' ' || this.state.text[this.state.text.length - 1] === '.'){
    this.emphasisCall(this.state.text)
  }
}
  render(){
    return(
      <div class='container'>
        <div class='backdrop' overflow='auto' background-color="#fff">
          <div class='highlights' white-space='pre-wrap' word-wrap='break-word' color="transparent">
          </div>
        </div>
        <textarea color="#444" background-color="transparent" margin="0" border-radius="0" rows='20' cols='70'placeholder= "Emphasis AI is an experimental text editor. As you write, it analyzes your words and identifies natural patterns of emphasis. It does this using a simple, four-color highlighting system. To learn what each color means, read the tips on the right." class='placeHolderText' onChange={(e)=>this.handleChange(e)} value={this.state.text} />
      </div>
    )
  }
}

export default TextArea;
