import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [advice, setAdvice] = useState();
  return (
    <div
      className='Container'
      style={{
        width: '540px',
        height: '330px',
        marginTop: '210px',
        marginLeft: '450px',
        borderRadius: '15px',
        backgroundColor: '#313A48',
        textAlign: 'center',
      }}
    >
      <section className='inner'>
        <h1
          style={{
            color: '#53FFAA',
            fontSize: '13px',
            paddingTop: '35px',
            marginLeft: '18px',
          }}
        >
          Joke #{}
        </h1>
        <p
          style={{
            color: '#CEE3E9',
            fontSize: '25px',
            marginTop: '35px',
            marginLeft: '18px',
            display: 'flex',
            alignContent: 'center',
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          reprehenderit, optio assumenda recusandae temporibus deleniti? At est,
          excepturi qui voluptate, aperiam exercitationem similique nobis veniam
          atque maiores, libero ipsum? Recusandae.
        </p>
      </section>
    </div>
  );
}

export default App;
