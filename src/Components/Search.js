import React from "react";
import { useState } from "react";
import useStorage from './useStorage'

function Search(props){
  const [input, setInput] = useStorage('input', '')
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
        onChange={e => setInput(e.target.value)}
        type='text'
        className='searchBar'
        placeholder='Search Jokes!'
      ></input>
      <button
        className='searchbtn'
        style={{
          borderRadius: '10px',
          width: '120px',
          backgroundColor: '#53FFAA',
          color: '#202733',
          marginLeft: '10px',
          border: '.5px',
        }}
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
        onClick={props.changeNumber}
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
        onClick={props.changeNumber}
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
        onClick={props.changeNumber}
      >
        Red
      </button>
    </div>
  </div>
);
}






export default Search; 