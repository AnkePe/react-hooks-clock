import React, { useState, useEffect } from 'react';

function ClockWithCustomHook() {
    //reference to our custom hook
    const timer = useNewTimer(new Date())

    return (
        <>
        <h2>Hi there!</h2>
        <h2>It is {timer.toLocaleTimeString()}.</h2>
        </>
    );
}
// create a custom reusable hook
function useNewTimer(currentDate) {

  const [date, setDate] = useState(currentDate);

  useEffect(() => {
    const timerID = setInterval( () => tick(), 1000 );
    return () => clearInterval(timerID)
  });

  const tick = () => setDate(new Date());

  return date;
}


export default ClockWithCustomHook;


// function ClockWithCustomHook() {
//   //reference to our custom hook
//   const timer = useNewTimer(new Date())
//   //reference to our other custom hook
//   // const width = useWindowWidth()

//   return (
//       <>
//       <h2>Hi there!</h2>
//       <h2>It is {timer.toLocaleTimeString()}.</h2>
//       {/* <h3>Window width is {width}.</h3> */}
//       </>
//   );
// }
// // create a custom reusable hook
// function useNewTimer(currentDate) {

// const [date, setDate] = useState(currentDate);

// useEffect(() => {
//   const timerID = setInterval( () => tick(), 1000 );
//   return () => clearInterval(timerID)
// });

// const tick = () => setDate(new Date());

// return date;
// }

// // create another custom reusable hook

// // function useWindowWidth() {

// //   const [width, setWidth] = useState(window.innerWidth)

// //   useEffect(() => {
// //     const handleResize = () => setWidth(window.innerWidth)
// //     window.addEventListener('resize', handleResize)
// //     return () => window.removeEventListener('resize', handleResize)
// //   })

// //   return width
// // }

// export default ClockWithCustomHook;


