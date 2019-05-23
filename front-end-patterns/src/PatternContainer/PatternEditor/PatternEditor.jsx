import React from 'react';

const PatternEditor = (props) => {
  console.log(props.patternToEdit.text);
  //I need to map the text object to return the string
  const textReveal = props.patternToEdit.text.map((reveal) => {
    console.log(reveal.text);
    return(
      <input name='text' onChange={props.handleFormChange} value={reveal.text} />
    )
  })
  return(
    <div>
      <form onSubmit={props.editPattern}>
        <h2>Add a pattern to the catalog</h2>
        <label>
          Edit Title: <input type='text' name='title' onChange={props.handleFormChange} value={props.patternToEdit.title} />
        </label>
        <br/>
        <label>
          Edit Author: <input type='text' name='author' onChange={props.handleFormChange} value={props.patternToEdit.author} />
        </label>
        <br/>
        <label>
          Edit Publication: <input type='text' name='publication' onChange={props.handleFormChange} value={props.patternToEdit.publication} />
        </label>
        <br/>
        <label>
          Edit Year: <input type='text' name='year' onChange={props.handleFormChange} value={props.patternToEdit.year} />
        </label>
        <br/>
        <label>
          Edit URL: <input type='text' name='url' onChange={props.handleFormChange} value={props.patternToEdit.url} />
        </label>
        <br/>
        <label>
          Edit Pattern: <input type='text' name='pattern' onChange={props.handleFormChange} value={props.patternToEdit.pattern} />
        </label>
        <br/>
        <label>
          Edit Description: <input name='description' onChange={props.handleFormChange} value={props.patternToEdit.description} />
        </label>
        <br/>
        <label>
          Edit Text: {textReveal} //I need to allow changes to occur without crashes
        </label>
        <br/>
        <label>
          Edit Commentary: <input name='commentary' onChange={props.handleFormChange} value={props.patternToEdit.commentary} />
        </label>
        <br/>
        <input type='submit'/>
      </form>
    </div>
  )
}

export default PatternEditor;
