import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import CustomInput from './Custominput';
import {useState, useRef, forwardRef} from 'react';

function App() {

  // const [seconds, setSeconds] = useState(0);
  // const timerID = useRef(null);
  // const startTimer = () => {
  //   timerID.current = setInterval(() => {
  //     setSeconds(currSeconds => currSeconds +1)
  //   }, 1000)
  // }
  // const stopTimer = () => {
  //   clearInterval(timerID.current)
  // }

  //   REF
  // const inputRef = useRef(null);
  // const focusInput = () =>{
  //   inputRef.current.focus();
  // }

  const counterRef = useRef();
  const customInputRef = useRef()


  return (
    <>

    {/* <button onClick={startTimer}>Start</button>
    <button onClick={stopTimer}>Stop</button>
    <p>Seconds: {seconds}</p> */}


      {/* REF
    <MyInput ref={inputRef}/>
    <button onClick={focusInput}>Focus</button> */}

    <Counter ref={counterRef} />
    <CustomInput ref={customInputRef} placeholder="Type something..."/>
    <button  onClick={() =>{
      counterRef.current.reset()
      customInputRef.current.reset()
    }}>Reset</button>

    </>
  );
}

//   REF
// const MyInput = forwardRef(function (props, ref) {
//   return <input ref={ref} {...props} style={{color: "red"}}/>
// })

export default App;
