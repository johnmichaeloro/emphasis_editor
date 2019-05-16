import React from 'react';
import './App.css';
import TextArea from './TextArea/TextArea';
import EntryView from './EntryView/EntryView';

class App extends React.Component {
  render(){
    return(
      <div className='wrapper'>
      <h1>Patterns of Emphasis</h1>
        <div className='textArea'>
          <TextArea />
          <div className='entryView'>
            <EntryView />
          </div>
        </div>

      </div>
    )
  }
};

export default App;
