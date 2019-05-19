import React from 'react';

const PatternList = (props) => {
  const patternMapper = props.patterns.map((pattern) => {
    return(
      <li key={pattern._id}>
        <span>Title:{pattern.title}</span><br/>
        <span>Author:{pattern.author}</span><br/>
        <button onClick={props.deletePattern.bind(null, pattern._id)}>Delete</button>
      </li>
    )
  })
  return(
    <ul>
      {patternMapper}
    </ul>
  )
}

export default PatternList;
