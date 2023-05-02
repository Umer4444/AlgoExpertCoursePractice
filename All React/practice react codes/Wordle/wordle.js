import React, { useState, useEffect } from 'react';

const WORD_LIST_API_URL = 'https://api.frontendexpert.io/api/fe/wordle-words';

export default function Wordle() {
    const [word, setWord] = useState('');
    const [board, setBoard] = useState(new Array(6).fill(''));
    const [currentLine, setCurrentLine] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');

    useEffect(() => {
        fetch(WORD_LIST_API_URL)
            .then(res => res.json())
            .then(res => generateRandomWord(res))
            .catch(err => console.error(err));
    }, []);

    function generateRandomWord(wordList) {
        let randomWordIndex = Math.floor(Math.random() * wordList.length);
        setWord(wordList[randomWordIndex]);
    }

    useEffect(() => {
        if (board[board.length - 1] !== '') return;
        if (word.length && board.includes(word)) return;

        function onKeyDown(e) {
            let newBoard = [...board];
            let keyClicked = e.key;
            setCurrentGuess(prevGuess => {
                if (keyClicked === 'Backspace') {
                    return prevGuess.slice(0, prevGuess.length - 1);
                } else if (keyClicked === 'Enter' && prevGuess.length === 5) {
                    newBoard[currentLine] = prevGuess;
                    setBoard(newBoard);
                    setCurrentLine(currentLine + 1);
                    return '';
                } else if (prevGuess.length === 5) {
                    return prevGuess;
                } else {
                    if (keyClicked !== 'Enter') return prevGuess + keyClicked;
                    else return prevGuess;
                }
            });
        }

        window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [board, currentGuess, currentLine, word]);

    return (
        <div className="board">
            {word.length
                ? board.map((line, idx) => (
                    <Line
                        line={currentLine === idx ? currentGuess.padEnd(5) : line.padEnd(5)}
                        key={idx}
                        word={word}
                        shouldEvalClass={idx < currentLine}
                    />
                ))
                : 'Loading...'}
        </div>
    );
}

function Line({ line, word, shouldEvalClass }) {
    return (
        <div className="line">
            {line.split('').map((tile, indexTwo) => {
                let theClass = 'tile';
                if (shouldEvalClass) {
                    if (tile === word[indexTwo].toLowerCase()) theClass += ' correct';
                    else if (word.toLowerCase().includes(tile)) theClass += ' close';
                    else theClass += ' incorrect';
                }

                return <Tile tile={tile} theClass={theClass} key={indexTwo} />;
            })}
        </div>
    );
}

function Tile({ tile, theClass }) {
    return (
        <div className={theClass}>
            {tile}
        </div>
    );
}
