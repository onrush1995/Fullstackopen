import React, { useState } from 'react';
import "./components/App.css";

function App(){
const [submitting,setSubmitting]= useState(false);
const handleSubmit = event =>{
  event.preventDefault();
  setSubmitting(true);

  setTimeout(()=>{setSubmitting(false)},3000)

}

  return(
    <div className='wrapper'>
      <h1>How About Them Apples</h1>
      {submitting && <div> Submitting From...</div>}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <input/>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
