import React from 'react';
import { useState } from 'react';
import './App.css';
import Result from './result';

const secretNum= Math.floor(Math.random()*10)+1;



function App() {

  const [term,setTerm]=useState("");

const handleChange=(e)=>{
 
    setTerm(e.target.value);
 

}

  return (

    <>
    <h1>Guess the number!!</h1>
    <div className='container'>
      
      <div className='header'>
        
        <label htmlFor='term'>Enter any number between 1 to 10 </label>
        <input 
          id='num'
          type='text'
          name='term'
          onChange={handleChange}
         />
         <Result term={term} secretNum={secretNum}/>
          

      </div>

    </div>
    </>
   
  );
  
}

export default App;
