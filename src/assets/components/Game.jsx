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
    }
    const [gameState, setGameState] = useState( newGameState )
    const [currentPlayer, setPlayer] = useState("X")
    const [xCells, setXCells] = useState([])
    const [oCells, setOCells] = useState([])

    // useEffect(()=>{
    //     console.log(gameStatus())
    // },[xCells,oCells])

    function swapPlayer(){
        if (currentPlayer === "X"){
            setPlayer("O")
        } else setPlayer("X")
    }

    function claimCell(cell){
        if (currentPlayer === "X"){
            const updatedXs = [...xCells, cell]
            setXCells(updatedXs)
        } else {
            const updatedOs = [...oCells, cell]
            setOCells(updatedOs)}
        const newGameState = {...gameState, [cell]: currentPlayer}
        console.log("xCells:", xCells)
        console.log("oCells:", oCells)
        setGameState(newGameState)
    }

    function gameMove(cell){
        if (gameState[cell] == "X" || gameState[cell] == "O"){
            return
        } else {
            claimCell(cell)
            swapPlayer()
        }
    }

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
    
        

    return(
        <div>
            <h1> This will be a tic tac toe game... soon </h1>
            <h3>Current Player: {currentPlayer}</h3>

            <button onClick={resetGame}>Reset Game</button>
            <button onClick={()=>console.log(gameStatus())}> Win Check!</button>
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
        </div>
    )

}

export default Game