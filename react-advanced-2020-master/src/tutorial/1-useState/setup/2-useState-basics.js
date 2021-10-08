import React, { useState } from 'react';

const UseStateBasics = () => {
  
  const [ text, setText ] = useState('Default Title');

  const handleClick = () => {
    if (text === 'Default Title'){
      setText('New Title')
    } else {
      setText('Default Title')
    }
  }

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>Change Title</button>
    </React.Fragment>
  )

};

export default UseStateBasics;
