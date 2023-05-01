import React, { useState, useEffect } from 'react';

const TILE_COLORS = ['red', 'green', 'blue', 'yellow'];

export default function Memory() {
    const [tiles, setTiles] = useState(() => shuffle([...TILE_COLORS, ...TILE_COLORS]));
    const [selectedTiles, setSelectedTiles] = useState([]);
    const [matchedTiles, setMatchedTiles] = useState([]);

    useEffect(() => {
        if (selectedTiles.length < 2) return;

        if (tiles[selectedTiles[0]] === tiles[selectedTiles[1]]) {
            setMatchedTiles([...matchedTiles, ...selectedTiles]);
            setSelectedTiles([]);
        } else {
            const timerID = setTimeout(() => {
                setSelectedTiles([]);
            }, 1000);
            return () => clearTimeout(timerID);
        }
    }, [selectedTiles])

    let isEndGame = matchedTiles.length === tiles.length;

    function restartGame() {
        setTiles(() => shuffle([...TILE_COLORS, ...TILE_COLORS]));
        setSelectedTiles([]);
        setMatchedTiles([]);
    }

    function selecTile(index) {
        if (selectedTiles.length >= 2 || matchedTiles.includes(index) || selectedTiles.includes(index)) return;
        setSelectedTiles([...selectedTiles, index]);
    }

    return (
        <>
            <h1>{isEndGame ? 'You Win!' : 'Memory'}</h1>
            <div className="board">
                {tiles.map((tileColor, index) => {
                    const isTileSelected = selectedTiles.includes(index) || matchedTiles.includes(index);
                    const className = isTileSelected ? `tile ${tileColor}` : 'tile';
                    return (<div className={className} key={index} onClick={(e) => selecTile(index)}></div>)
                })}
            </div>
            {isEndGame && <button onClick={() => restartGame()}>Restart</button>}
        </>
    );
}

/**
 * Returns the array shuffled into a random order.
 * Do not edit this function.
 */
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));

        // Swap the elements at i and randomIndex
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
}