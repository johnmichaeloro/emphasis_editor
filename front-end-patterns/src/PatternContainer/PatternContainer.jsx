import React, {Component} from 'react';
import CreatePattern from './CreatePattern/CreatePattern';
import PatternList from './PatternList/PatternList';
import PatternEditor from './PatternEditor/PatternEditor';

class PatternContainer extends Component {
  constructor(){
    super();
    this.state = {
      patterns: [],
      patternToEdit: {
        _id: null,
        title: '',
        author: '',
        publication: '',
        year: '',
        url: '',
        pattern: '',
        description: '',
        text: '',
        commentary: ''
      },
      modalShowing: false,
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
        headers: {
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
  editPattern = async (e) => {
    e.preventDefault();
    try{
      const editResponse = await fetch('http://localhost:9000/api/va/patterns/' + this.state.patternToEdit._id, {
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify(this.state.patternToEdit),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const parsedResponse = await editResponse.json();
      const editedPatternArray = this.state.patterns.map((pattern) => {
        if(pattern._id === this.state.patternToEdit._id){
          pattern = parsedResponse.data
        }
        return pattern
      });
      this.setState({
        patterns: editedPatternArray,
        modalShowing: false
      });
    } catch(err) {
      console.log(err);
    }
  }
  handleFormChange = (e) => {
    console.log('this is handleFormChange');
    this.setState({
      patternToEdit: {
        ...this.state.patternToEdit,
        [e.target.name]: e.target.value
      }
    })
  }
  showModal = (pattern) =>  {
    console.log("this is show modal");
    this.setState({
      modalShowing: true,
      patternToEdit: {
        ...pattern
      }
    });
    console.log(this.state.modalShowing);
  }
  render(){
    console.log(this.state.patterns);
    return(
      <div>
        <h1>Patterns of Emphasis</h1>
        <h3>A catalog of patterns of sentence-level emphasis</h3>
        <CreatePattern addPattern={this.addPattern}/>
        <PatternList patterns={this.state.patterns} showModal={this.showModal} deletePattern={this.deletePattern}/>
        {this.state.modalShowing ? <PatternEditor patternToEdit={this.state.patternToEdit} editPattern={this.editPattern} handleFormChange={this.handleFormChange}/> : null}
      </div>
    )
  }
}

export default PatternContainer;
