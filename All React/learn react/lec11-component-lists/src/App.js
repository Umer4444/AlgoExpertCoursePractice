import logo from './logo.svg';
import './App.css';
import { useState, Fragment } from 'react';

export function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  return (
    <>
      <ul>
        {
          items.map((item, i) => {
            return (
              <Fragment key={item}>
                <li>{item}</li>
                <li>You are true.</li>
              </Fragment>
            )
          })
        }
      </ul>

      <input
        type="text"
        value={newItem}
        onChange={(event) => setNewItem(event.target.value)} />

      <button onClick={() => {
        setItems([...items, newItem]);
        setNewItem('');
      }}>
        ALLAH is one
      </button>
    </>
  );
}

export default App;
