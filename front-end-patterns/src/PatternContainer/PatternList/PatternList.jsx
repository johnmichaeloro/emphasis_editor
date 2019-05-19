import React from 'react';

const PatternList = (props) => {
  const patternMapper = props.patterns.map((pattern) => {
    return(
      <li key={pattern._id}>
        <span>{pattern.title}</span><br/>
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
