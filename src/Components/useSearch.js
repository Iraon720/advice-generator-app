import { useState } from "react";

export default function useSearch(){
  const [searchResults, setSearchResults] = useState([]);


return [searchResults, setSearchResults]
}




// const handleCarJokes = () => {
//   //Passing props to Search and creating functionality for btns
 
//    const [CarJokes, setCarJokes] = useState([]);
//   async function fetchCarJokes() {
//     const response = await fetch('https://icanhazdadjoke.com/search?term=Car', {
//       headers: { Accept: 'application/json' },
//     });
//     const car = await response.json();
//     setCarJokes(car.joke);
//     console.log(car.joke);
//   }

//   useEffect(() => {
//     fetchCarJokes();
//   }, []);
// };
