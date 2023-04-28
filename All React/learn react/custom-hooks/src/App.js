import logo from './logo.svg';
import './App.css';
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

function App() {
  // const [count, setCount] = useState(0);
  // const [text, setText] = useState("");

  //MODAL 
  const [isHidden, setIsHidden] = useState(true);

  // const prevCount = usePrevious(count);
  // const prevText = usePrevious(text);
  return (
    <>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button>
   <p>Count: {count}</p>
   <p>Previous render count: {prevCount}</p>
   <input value={text}
   onChange={(event) => setText(event.target.value)} />
   <p>Previous render text: {prevText}</p> */}

      <div className='container'>
        <button onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? 'Show Modal' : 'Hide Modal'}
        </button>
        {isHidden || <Modal/>}
      </div>
      <p className='other'>
        Other Content
      </p>
    </>
  );
}

// function usePrevious(value) {
//   const prevRef = useRef()
//   useEffect(() => {
//     prevRef.current= value;
//   },[value])
//   return prevRef.current;
// }

function Modal() {
  return createPortal(
    <p className='modal'>Modal</p>,
    document.getElementById('modal-root')
  )
}

export default App;
