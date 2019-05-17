import React, {Component} from 'react';

const EditEntry = (props) => {
  return(
    <div>
      <h4>Edit Entry</h4>
      <form onSubmit={props.closeAndEdit}>
        <label>
          Edit Entry:
          <input type='text' name='title'
          onChange={props.handleFormChange}
          value={props.entryToEdit.description}/>
        </label>
        <input type='Submit'/>
      </form>
    </div>
  )
}

export default EditEntry;
