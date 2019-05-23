import React, { useState, useEffect } from 'react';

function App() {
  //array destructuring
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval( () => tick(), 1000 );
    return () => clearInterval(timerID)
  });

  const tick = () => setDate(new Date());

  return (
    <>
      <h2>Hi there!</h2>
      <h2>It is {date.toLocaleTimeString()}.</h2>     
    </>
  );
}

export default App;


// The useState hook accepts an initial state as argument and 
// returns, by using array destructuring, 
// two variables that can be named however you want to name them. 
// Whereas the first variable is the actual state, 
// the second variable is a function to update the state by providing a new state.


  
// function App() {
//   //array destructuring
//   const [date, setDate] = useState(new Date());

//   useEffect(() => {
//     const timerID = setInterval( () => tick(), 1000 );
//     return () => clearInterval(timerID)
//   });

//   const tick = () => setDate(new Date());

//   // other side effect: listen at window width

//   // const [width, setWidth] = useState(window.innerWidth)

//   // useEffect(() => {
//   //   const handleResize = () => setWidth(window.innerWidth);
//   //   window.addEventListener('resize', handleResize);
//   //   return () => {
//   //     window.removeEventListener('resize', handleResize)
//   //   }
//   // });

//   return (
//     <>
//       <h2>Hi there!</h2>
//       <h2>It is {date.toLocaleTimeString()}.</h2> 
//       {/* <h3>Window width is {width}.</h3> */}

//     </>
//   );
// }

// export default App;

