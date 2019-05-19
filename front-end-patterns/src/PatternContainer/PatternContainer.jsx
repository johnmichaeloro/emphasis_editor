import React, {Component} from 'react';
import CreatePattern from './CreatePattern/CreatePattern';
import PatternList from './PatternList/PatternList';

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
      console.log('this is the parsed response', parsedResponse);
      this.setState({
        patterns: [...this.state.patterns, parsedResponse.data]
      });
      console.log(this.state.patterns);
    } catch(err) {
      console.log(err);
    }
  }
  deletePattern = async (id, e) => {
    console.log('this is the delete id ', id);
    e.preventDefault();
    try{
      const deletePattern = await fetch('http://localhost:9000/api/v1/patterns/' + id, {
        method: 'DELETE',
        credentials: 'include'
      });
      const deletePatternJson = await deletePattern.json();
      this.setState({patterns: this.state.patterns.filter((pattern, i) => pattern._id !== id)});
    } catch(err) {
      console.log(err, 'this was the delete error');
    }
  }
  render(){
    console.log(this.state.patterns);
    return(
      <div>
        <h1>Patterns of Emphasis</h1>
        <h3>A catalog of patterns of sentence-level emphasis</h3>
        <CreatePattern addPattern={this.addPattern}/>
        <PatternList patterns={this.state.patterns} deletePattern={this.deletePattern}/>
      </div>
    )
  }
}

export default PatternContainer;
