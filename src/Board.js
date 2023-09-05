import React, { useState, useEffect } from 'react';
import './Board.css';
import Info from './Info';

const Board = () => {

    const [numbers, setNumbers] = useState(['', '', '', '', '', '', '', '', '',]);

    const [player, setPlayer] = useState(false);
    // const changePlayer = () => {
    //     setPlayer(!player);
    // }

    const player1 = 'X';
    const player2 = 'O';

    function handleIncrementClick(index) {
        const nextNumbers = numbers.map((number, i) => {
            if (i === index) {
                const symbol = player ? player2 : player1;
                return symbol;
            }
            else
                return number;
        });
        setPlayer(!player);
        setNumbers(nextNumbers);
        // if (((numbers[0] === numbers[1]) && (numbers[0] === numbers[2]) && (numbers[0] !== '')) || ((numbers[3] === numbers[4]) && (numbers[3] === numbers[5]) && (numbers[3] !== '')) || ((numbers[6] === numbers[7]) && (numbers[6] === numbers[8]) && (numbers[6] !== '')) || ((numbers[0] === numbers[3]) && (numbers[0] === numbers[6]) && (numbers[0] !== '')) || ((numbers[1] === numbers[4]) && (numbers[1] === numbers[7]) && (numbers[1] !== '')) || ((numbers[2] === numbers[5]) && (numbers[2] === numbers[8]) && (numbers[2] !== '')) || ((numbers[0] === numbers[4]) && (numbers[0] === numbers[8]) && (numbers[0] !== '')) || ((numbers[2] === numbers[4]) && (numbers[2] === numbers[6]) && (numbers[0] !== ''))) {
        //     player ? (alert("Player 1 Win")) : (alert("Player 2 Win"));
        //     setNumbers(['', '', '', '', '', '', '', '', '',]);
        //     setPlayer(false);
        // }
    }

    useEffect(() => {
        const winner = checkWinner();
        if (winner) {
            alert(`The winner is ${winner}`);
            setNumbers(['', '', '', '', '', '', '', '', '',]);
            setPlayer(false);
        }
    }, [player])

    const checkWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (numbers[a] && numbers[a] === numbers[b] && numbers[a] === numbers[c]) {
                return numbers[a];
            }
        }
        return null;
    }

    return (
        <>
            <div className='board'>
                <div>
                    <button className='btn boxBtn' id='box1' onClick={() => { handleIncrementClick(0); }}>{numbers[0]}</button>
                    <button className='btn boxBtn' id='box2' onClick={() => { handleIncrementClick(1); }}>{numbers[1]}</button>
                    <button className='btn boxBtn' id='box3' onClick={() => { handleIncrementClick(2); }}>{numbers[2]}</button>
                </div>
                <div>
                    <button className='btn boxBtn' id='box4' onClick={() => { handleIncrementClick(3); }}>{numbers[3]}</button>
                    <button className='btn boxBtn' id='box5' onClick={() => { handleIncrementClick(4); }}>{numbers[4]}</button>
                    <button className='btn boxBtn' id='box6' onClick={() => { handleIncrementClick(5); }}>{numbers[5]}</button>
                </div>
                <div>
                    <button className='btn boxBtn' id='box7' onClick={() => { handleIncrementClick(6); }}>{numbers[6]}</button>
                    <button className='btn boxBtn' id='box8' onClick={() => { handleIncrementClick(7); }}>{numbers[7]}</button>
                    <button className='btn boxBtn' id='box9' onClick={() => { handleIncrementClick(8); }}>{numbers[8]}</button>
                </div>
                <Info />
                <div><button className='btn btn-danger' onClick={() => { setNumbers(['', '', '', '', '', '', '', '', '',]); setPlayer(false) }}>Reset</button></div>
            </div>
        </>
    )
}

export default Board