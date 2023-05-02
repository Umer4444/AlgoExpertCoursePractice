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




import React, { useState, useEffect } from 'react';

const CRYPTO_PRICES_API_BASE_URL =
    'https://api.frontendexpert.io/api/fe/cryptocurrencies';

export default function CryptoPrices() {

    const [data, setData] = useState({});
    const [page, setPage] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${CRYPTO_PRICES_API_BASE_URL} ?page=${page}`)
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData()
    }, [page])

    const firstPage = page === 0;
    const lastPage = data?.hasNext === false;

    return (
        <>
            <table>
                <caption>Crypto Prices</caption>
                <tr>
                    <th>Coin</th>
                    <th>Price</th>
                    <th>Market Cap</th>
                </tr>
                {data?.coins?.map((coin) => {
                    return (
                        <tr>
                            <td>{coin.name}</td>
                            <td>{coin.price}</td>
                            <td>{coin.marketCap}</td>
                        </tr>
                    )
                })}
            </table>
            <button disabled={firstPage} onClick={() => setPage(page - 1)}>Back</button>
            <button disbaled={lastPage} onClick={() => setPage(page + 1)}>Next</button>
        </>
    );
}
