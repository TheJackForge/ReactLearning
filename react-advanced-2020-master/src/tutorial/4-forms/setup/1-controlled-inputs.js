import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [ people, setPeople ] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if ( firstName && email ) {
      console.log('submit the form');
      const person = {id:new Date().getTime().toString(), firstName:firstName, email: email}
      // const person = {firstName, email};
      setPeople((people) => {
        return [...people, person]
      })
      setFirstName('');
      setEmail('');
    } else {
      console.log('values are empty')
    }
  };

  return <>
  <article>
    <form className="form">
      <div className="form-control">
        <label htmlFor="firstName">Name :</label>
        <input 
        type="text" 
        id="firstName" 
        name="firstName" 
        value={firstName} 
        onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email :</label>
        <input 
        type="text" 
        id="email" 
        name="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>add person</button>
    </form>
    {
      people.map((person, index) => {
        
        const {id, firstName, email} = person

        return <div key={id} className="item">
          <h4>{firstName}</h4>
          <p>{email}</p>
          <p>{id}</p>
        </div>
      })
    }
  </article>
  </>
};

export default ControlledInputs;
