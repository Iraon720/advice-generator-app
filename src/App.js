import { useState, useEffect } from 'react';
import Search from './Components/Search';
import Group2 from './images/Group2.png';
import Dice from './images/Shape.png';
import './App.css';

function App() {
  const [Jokes, setJokes] = useState([]);
  const [randomNumber, setRandomNumber] = useState(null);
  const [url, setUrl] = useState('https://icanhazdadjoke.com/');

  const handleUrlChange = (newUrl) => {
    setUrl(newUrl);
}

   //   const fetchJokes = async () => {
  //    const res = await fetch('https://icanhazdadjoke.com/slack',{header:{Accept:"application/json"}})
  //    const data = await res.json();
  //    setJoke(data.attachments[0].fallback)
  // console.log(data.attachments[0].fallback);
  //   }

  async function fetchJokes() {
    const response = await fetch(
      url,
      {
        headers: { Accept: 'application/json' },
      }
    );
    const laugh = await response.json();
    setJokes(laugh.joke);
    console.log(laugh.joke)
  }

  //Function that handles creating random numbers, 744 is the number of jokes the database has.
    const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 744);
    setRandomNumber(newRandomNumber);
    }


  async function fetchJokeBtns() {
    const response = await fetch(url, {
      headers: { Accept: 'application/json' },
    });
    const laugh = await response.json();
      const randomIndex = Math.floor(Math.random() * laugh.results.length);
      debugger
      setJokes(laugh.results[randomIndex].joke);
      console.log(laugh.results[randomIndex].joke);
  }



    useEffect(() => {
  fetchJokes()
 
  
  
  generateRandomNumber()
    }, [])

   

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
            letterSpacing: '4.08px',
          }}
        >
          Joke #{randomNumber}
        </h1>
        <div style={{ height: '180px', width: '540px', alignContent:'center'}}>
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
            {Jokes} 
          </p>
        </div>
        <picture
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={Group2} alt='' style={{ marginBottom: '10px' }} />
          <button className='random'
            style={{
              backgroundColor: '#53FFAA',
              borderBlockColor: '#53FFAA',
              marginTop: '12px',
              width: '64px',
              height: '64px',
              borderRadius: '75%',
              border: '.5px',
              position: 'relative',
              cursor: 'pointer',
              
            }}
            onClick={() => {
              fetchJokes();
              fetchJokeBtns();
              generateRandomNumber();
            }}
          >
            <img src={Dice} alt='' />
          </button>
        </picture>
      </section>
      <div>
        <Search
          forBtn={fetchJokeBtns}
          link={handleUrlChange}
          changeNumber={generateRandomNumber}
        />
      </div>
    </div>
  );
}

export default App;
