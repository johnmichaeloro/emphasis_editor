import React from 'react';
import './App.css';
import EmphasisNav from './Navbar/Navbar';
import EmphasisTabs from './EmphasisTabs/EmphasisTabs';
import TextArea from './TextArea/TextArea';
import EntryView from './EntryView/EntryView';

class App extends React.Component {
  render(){
    return(
      <div class='wrapper'>
        <div class='emphasisNav'>
          <EmphasisNav />
        </div>
        <div class='textArea'>
          <TextArea />
          <div class="emphasisTabs">
            <EmphasisTabs />
          </div>
          <br></br>
          <div class='saveButton'>
            <button>Save</button>
          </div>
          <div class='entryView'>
            <EntryView />
          </div>
        </div>

      </div>
    )
  }
};

export default App;
