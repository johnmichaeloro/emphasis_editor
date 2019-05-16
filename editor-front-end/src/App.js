import React from 'react';
import './App.css';
import EmphasisNav from './Navbar/Navbar';
import EmphasisTabs from './EmphasisTabs/EmphasisTabs';
import TextArea from './TextArea/TextArea';
import EntryView from './EntryView/EntryView';

class App extends React.Component {
  render(){
    return(
      <div className='wrapper'>
        <div className='emphasisNav'>
          <EmphasisNav />
        </div>
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
