import React, {Component} from 'react';

const Entries = (props) => {
  const entryList = props.entries.map((entry) => {
    return(
      <li key={entry._id}>
        <span>{entry.title}</span><br/>
        <span>{entry.description}</span><br/>
        <button onClick={props.deleteEntry.bind(null, entry._id)}>Delete</button>
        <button onClick={props.showModal.bind(null, movie)}>Edit</button>
      </li>
    )
  })
  return(
    <ul>
      {entryList}
    </ul>
  )
}

export default Entries;
