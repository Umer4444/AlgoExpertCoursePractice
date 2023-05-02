import React, { useState, useEffect } from 'react';

const CRYPTO_PRICES_API_BASE_URL =
    'https://api.frontendexpert.io/api/fe/cryptocurrencies';

export default function CryptoPrices() {

    const [page, setPage] = useState(0);
    const [coins, setCoins] = useState([]);
    const [hasNext, setHasNext] = useState({});
    useEffect(() => {
        fetch(`${CRYPTO_PRICES_API_BASE_URL}?page=${page}`)
            .then(res => res.json()) // fixed syntax error
            .then(data => {
                setCoins(data.coins);
                setHasNext(data.hasNext);
            })
    }, [page]);
    return (
        <>
            <table>
                <caption>Crypto Prices</caption>
                <tr>
                    <th>Coin</th>
                    <th>Price</th>
                    <th>Market Cap</th>
                </tr>
                {coins.map(coin => (
                    <tr>
                        <th>{coin.name}</th>
                        <td>{coin.price}</td>
                        <td>{coin.marketCap}</td>
                    </tr>
                ))}
            </table>

            <button onClick={() => setPage(page => page - 1)} disabled={page === 0}>
                Back
            </button>
            <button onClick={() => setPage(page => page + 1)} disabled={!hasNext}>
                Next
            </button>
        </>
    );
}






import React, {useState, useEffect} from 'react';

const WORD_LIST_API_URL = 'https://api.frontendexpert.io/api/fe/wordle-words';

export default function Wordle() {
  const [ word, setWord] = useState('')
  const [board, setBoard] = useState(new Array(6).fill(''))
  const [ currentLine, setCurrentLine ] useState(0)
  const [currentGuess, setCurrentGuess ] useState('')

  useEffect(() => {
    fetch(WORD_LIST_API_URL)
    .then(res => res.json())
    .then(res => generateRandomWord(res))
    .catch(err => console.error({err}))
  }, [])

  function generateRandomWord(wordList){
    let randomWordIndex = Math.floor(Math.random() * wordList.length)
    setWord(wordList[randomWordIndex])
  }

  useEffect(() => {
    if(board[board.length-1] !== '')return
    if(word.length && board.includes(word))return

    function onKeyDown(e){
      let newBoard = [...board]
      let keyClicked = e.key
      setCurrentGuess(prevGuess => {
        if(keyCLicked === 'Backspace'){
          return prevGuess = prevGuess.slice(0, prevGuess.length-1)
        } else if(keyClicked === 'Enter' && prevGuess.length === 5){
          newBoard[currentLine] = prevGuess
          setBoard(newBrand)
          setCurrentLine(currentLine + 1)
          return ''
        } else if(prevGuess.length === 5) {
          return prevGuess
        } else {
          if(keyClicked !== 'Enter')return prevGuess + keyClicked
          else return prevGuess
        }
      })
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
    
  }, [currentGuess])

  return (
    <div className="board">
      { word.length ?
      board.map((line, idx) => (
        <Line
          line={currentLine === idx ? currentGuess.padEnd(5) : line.padEnd(5)}
          key={idx}
          word={word}
          shouldEvalClass={idx < currentLine}
          />
      )) : 'Loading...'
      }
      </div>
  )
}

function Line({ line, word, shouldEvalClass }){
  return (
    <div className='line'>
      {
        line.split('').map((titile, indexTwo) => {
          let theClass = 'tile'
          if(shouldEvalClass){
            if(tile === word[indexTwo].toLowerCase())theClass += ' correct'
            else if (word.toLowerCase().inludes(tile))theClass += ' close'
            else theClass += ' incorrect'
          }

          return <Tile tile={tile} theClass={theClass} key={indexTwo}/>
        })
      }
      </div>
  )
}

function Tile({ tile, theClass}){
  return(
    <div className={theClass}>
      {tile}
      </div>
  )
}