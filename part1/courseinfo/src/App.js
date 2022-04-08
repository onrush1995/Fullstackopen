import React, { useState } from 'react'

const App=()=>{

  const [values,setValues]= useState({
    firstName:"",
    lastName:"",
    email:""
  })

  const handleFirstName=(event)=>{
    setValues({...values,firstName: event.target.value})
  }
  
  const handleLastName=(event)=>{
    setValues({...values,lastName: event.target.value})
  }

  const handleEmail=(event)=>{
    setValues({...values,email: event.target.value})
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    setSubmitted(true);
  }
  
  const [submitted,setSubmitted]= useState(false);
  

  return(
    <div>
      <form onSubmit={handleSubmit}>
        {submitted ? <div>Success! Thanks for your response</div>: null}
        <input 
        onChange={handleFirstName}
        value={values.firstName}
        placeholder='First name'
        name='firstName'
        required= "Required"
        />
        <input 
        onChange={handleLastName}
        value={values.lastName}
        placeholder='Last name'
        name='lastName'
        required= "Required"
        />
        <input 
        onChange={handleEmail}
        value={values.email}
        placeholder='Email'
        name='email'
        required= "Required"
        />
        <button>Submit</button>
      </form>
    
    </div>
  )
}



export default App;
