import React from 'react';

const PatternList = (props) => {
  const patternMapper = props.patterns.map((pattern) => {
    return(
      <li key={pattern._id}>
        <span>Title:{pattern.title}</span><br/>
        <span>Author:{pattern.author}</span><br/>
        <span>Publication:{pattern.publication}</span><br/>
        <span>Year:{pattern.publication}</span><br/>
        <span>URL:{pattern.url}</span><br/>
        <span>Pattern:{pattern.pattern}</span><br/>
        <span>Description:{pattern.description}</span><br/>
        <span>Text:{pattern.text}</span><br/>
        <span>Commentary:{pattern.commentary}</span><br/>
        <button onClick={props.deletePattern.bind(null, pattern._id)}>Delete</button>
        <button onClick={props.showModal.bind(null, pattern)}>Edit</button>
      </li>
    )
  })
  return(
    <div>
      <h2>View Patterns</h2>
      <ul>
        {patternMapper}
      </ul>
    </div>
  )
}

export default PatternList;
