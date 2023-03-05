// import { useState, useEffect } from "react";
// function getStoredValue(key, initialValue){
//   const storedValue = JSON.parse(localStorage.getItem(key) || '')
//   if (storedValue) return storedValue

//   if(initialValue instanceof Function) return initialValue()

// }

// export default function Storage(key, initialValue){
//   const [value, setValue] = useState(() => { 
//     return getStoredValue(key, initialValue)
//   })
//   useEffect(() => {
// localStorage.setItem(key, JSON.stringify(value))
//   },[value])


//   return [value, setValue]

// }
