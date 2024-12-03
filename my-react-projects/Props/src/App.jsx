import { useState } from 'react';
import { Contents } from './components/store';
import './components/store.css';

function Display(props) {
  return (
    <div>
      <li>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </li>
    </div>
  );
}

function App() {
  return (

    <div className='container'>
      <h1 className='content-title'>React Window</h1>
      <p className='description'>Fundamental React concepts you will need for almost any app you are going to build!</p>
      <div className="inner">
        <h2 className='inner-title' >Core Concept</h2>
        <Display {...Contents[0]}
         />
         <Display {...Contents[1]}
         />
         <Display {...Contents[2]}
         />
      </div>
      
    </div>
  );
}

export default App;
