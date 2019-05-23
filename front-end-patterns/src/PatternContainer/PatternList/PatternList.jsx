import React from 'react';
import sentenceArrayMaker from '../js/sentences';

const PatternList = (props) => {
  console.log('this is props.patterns in PatternList', props.patterns);
  const patternMapper = props.patterns.map((pattern) => {
    const textMapper = sentenceArrayMaker(pattern.text)
    console.log('this is the textMapper', textMapper);
    const sentenceColorer = textMapper.map((map) => {
      
    })
    return(
      <li key={pattern._id}>
        <span>Title:{pattern.title}</span><br/>
        <span>Author:{pattern.author}</span><br/>
        <span>Publication:{pattern.publication}</span><br/>
        <span>Year:{pattern.publication}</span><br/>
        <span>URL:{pattern.url}</span><br/>
        <span>Pattern:{pattern.pattern}</span><br/>
        <span>Description:{pattern.description}</span><br/>
        <span>PENDING</span><br/>
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
