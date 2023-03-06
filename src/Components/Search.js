import React from "react";
import { useState, useEffect } from "react";
import useStorage from './useStorage'

function Search(props){
  const [input, setInput] = useState('')
console.log(input)
return (
  <div
    className='Search'
    style={{
      marginTop: '20px',
      display: 'flex',
      flexDirection: 'column',
      fontSize: '20px',
      position: 'absolute',
    }}
  >
    <div style={{ display: 'flex', marginTop: '30px' }}>
      <input
        style={{
          borderRadius: '10px',
          width: '400px',
          height: '30px',
          marginLeft: '10px',
          border: '.5px',
        }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type='text'
        className='searchBar'
        placeholder='Search Jokes!'
      ></input>
      <button
      
        className='searchBtn'
        style={{
          borderRadius: '10px',
          width: '120px',
          backgroundColor: '#53FFAA',
          color: '#202733',
          marginLeft: '10px',
          border: '.5px',
        }}
        onClick={() => {
          props.changeNumber();
          props.forBtn();
          props.link(`https://icanhazdadjoke.com/search?term=${input}`);
        }}
        disabled={!input.trim()}
      >
        Search
      </button>
    </div>
    <div>
      <button
        style={{
          borderRadius: '10px',
          width: '120px',
          backgroundColor: '#53FFAA',
          color: '#202733',
          border: '.5px',
        }}
        onClick={() => {
          props.changeNumber();
          props.forBtn();
          props.link('https://icanhazdadjoke.com/search?term=work');
        }}
      >
        Work
      </button>
      <button
        style={{
          borderRadius: '10px',
          width: '120px',
          backgroundColor: '#53FFAA',
          color: '#202733',
          border: '.5px',
          marginRight: '10px',
          marginLeft: '10px',
        }}
        onClick={() => {
          props.changeNumber();
          props.forBtn();
          props.link('https://icanhazdadjoke.com/search?term=car');
        }}
      >
        Car
      </button>
      <button
        style={{
          borderRadius: '10px',
          width: '120px',
          backgroundColor: '#53FFAA',
          color: '#202733',
          border: '.5px',
        }}
        onClick={() => {
          props.changeNumber();
          props.forBtn();
          props.link('https://icanhazdadjoke.com/search?term=red');
        }}
      >
        Red
      </button>
    </div>
  </div>
);
}



 
          


export default Search; 