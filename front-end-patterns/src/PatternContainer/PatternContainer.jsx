import React, {Component} from 'react';

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
  render(){
    console.log(this.state.patterns);
    return(
      <p>Hello</p>
    )
  }
}

export default PatternContainer;
