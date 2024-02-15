import { useState, useEffect } from "react";
import React from "react";

function Game(){
    const newGameState = {
        a1: " ", 
        a2: " ", 
        a3: " ", 
        b1: " ", 
        b2: " ",
        b3: " ",
        c1: " ",
        c2: " ",
        c3: " "
    };

    const computerOpponentObj = {
        active: false,
        algo: "dumb",
        playingAs: "O"
    };

    const [gameState, setGameState] = useState( newGameState );
    const [currentPlayer, setPlayer] = useState("X");
    const [compOpponent, setCompOpponent] = useState(computerOpponentObj);
    const [xCells, setXCells] = useState([]);
    const [oCells, setOCells] = useState([]);
    const statusMessage = gameStatus();
    const keepPlaying = gameStatus() === " ";

    function swapPlayer(){
        if (currentPlayer === "X"){
            setPlayer("O")
        } else setPlayer("X")
    };

    function claimCell(cell){
        if (currentPlayer === "X"){
            const updatedXs = [...xCells, cell]
            setXCells(updatedXs)
        } else {
            const updatedOs = [...oCells, cell]
            setOCells(updatedOs)}
        const newGameState = {...gameState, [cell]: currentPlayer}
        setGameState(newGameState)
    };

    function gameMove(cell){
        if (legalMoveCheck(cell) && keepPlaying){
            claimCell(cell)
            swapPlayer()
        }
    };

    function winCheck(playerClaimedCells){
        if(playerClaimedCells.length > 0)
            {const lastClaimedCell = playerClaimedCells.at(-1)
            const rowLetter = lastClaimedCell[0]
            const columnNum = lastClaimedCell[1]
            if ( playerClaimedCells.filter(cell=> cell[0] === rowLetter).length === 3){
                return true 
            } else if (playerClaimedCells.filter(cell=> cell[1] === columnNum).length === 3){
                return true
            } else if (playerClaimedCells.includes("b2")){
                if(playerClaimedCells.includes("a1") && playerClaimedCells.includes("c3")){
                    return true
                }
                else if (playerClaimedCells.includes("a3") && playerClaimedCells.includes("c1")){
                    return true
                } else return false
            } else return false}
        else return false
    }

    function gameStatus(){
        const xWin = winCheck(xCells)
        const oWin = winCheck(oCells)
        const gameLength = xCells.length + oCells.length
        if (xWin){ 
            return "Game Over! X wins"
        } else if (oWin){
            return "Game Over! O wins"
        } else if (gameLength == 9) { 
            return "Game Over! Draw"
        } else {return " "}
    }

    function resetGame(){
        setGameState(newGameState)
        setOCells([])
        setXCells([])
    }

    function legalMoveCheck(cell){
        return gameState[cell] === " "
    }

    function dumbAlgo(){
        const lettArr = ["a", "b","c"]
        let randLetter = lettArr[Math.floor(Math.random() * 3)]
        let randNum = Math.floor(Math.random() * 3) + 1
        while (!legalMoveCheck(randLetter+randNum)){
            console.log("illegal Move", randLetter+randNum)
            randLetter = lettArr[Math.floor(Math.random() * 3)]
            randNum = Math.floor(Math.random() * 3) + 1;
        }
        return randLetter + randNum
    }

    function activateOpponent(bool){
        const updatedOppObj = {...compOpponent, active: bool}
        setCompOpponent(updatedOppObj)
        console.log("computer opponent activity:", compOpponent.active)
    }

    return(
        <div>
            <h1> This is a tic tac toe game </h1>
            <h3>{statusMessage}</h3>
            <button onClick={resetGame}>Reset Game</button>
            <button disabled={compOpponent.active} onClick={()=>activateOpponent(true)}>Play with computer</button>
            <button disabled={!compOpponent.active} onClick={()=>activateOpponent(false)}>Play with humans</button>
            <table>
                <tbody>
                    <tr>
                        <td onClick={()=>gameMove("a1")}>{gameState.a1}</td>
                        <td onClick={()=>gameMove("a2")}>{gameState.a2}</td>
                        <td onClick={()=>gameMove("a3")}>{gameState.a3}</td>
                    </tr>
                    <tr>
                        <td onClick={()=>gameMove("b1")}>{gameState.b1}</td>
                        <td onClick={()=>gameMove("b2")}>{gameState.b2}</td>
                        <td onClick={()=>gameMove("b3")}>{gameState.b3}</td>
                    </tr>
                    <tr>
                        <td onClick={()=>gameMove("c1")}>{gameState.c1}</td>
                        <td onClick={()=>gameMove("c2")}>{gameState.c2}</td>
                        <td onClick={()=>gameMove("c3")}>{gameState.c3}</td>
                    </tr>
                </tbody>
            </table>
            <h3>Current Player: {currentPlayer}</h3>
        </div>
    )

}

export default Game