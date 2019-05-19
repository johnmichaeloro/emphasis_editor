import React, {Component} from 'react';
import CreatePattern from './CreatePattern/CreatePattern';

class PatternContainer extends Component {
  constructor(){
    super();
    this.state = {
      patterns: []
    }
  }
  componentDidMount(){
      this.getPatterns();
  }
  getPatterns = async () => {
    console.log("getting patterns");
    try {
      const response = await fetch('http://localhost:9000/api/v1/patterns', {
        credentials: 'include'
      });
      if(response.status !== 200){
        throw Error(response.statusText);
      }
      const patternsParsed = await response.json();
      this.setState({patterns: patternsParsed.data})
    } catch(err) {
      console.log(err);
    }
  }
  addPattern = async (pattern, e) => {
    e.preventDefault();
    console.log('this is the new entry ', pattern);
    try{
      const createdPattern = await fetch('http://localhost:9000/api/v1/patterns', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(pattern),
        header: {
          'Content-Type': 'application/json'
        }
      });
      const parsedResponse = await createdPattern.json();
      console.log(parsedResponse);
      this.setState({
        patterns: [...this.state.patterns, parsedResponse.data]
      });
    } catch(err) {
      console.log(err);
    }
  }

  render(){
    console.log(this.state.patterns);
    return(
      <div>
        <h1>Patterns of Emphasis</h1>
        <CreatePattern addPattern={this.addPattern}/>
      </div>
    )
  }
}

export default PatternContainer;
