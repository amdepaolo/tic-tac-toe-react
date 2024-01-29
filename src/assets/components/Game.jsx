import { useState } from "react";
import React from "react";

function Game(){
    const [gameState, setGameState] = useState({
        a1: " ", 
        a2: " ", 
        a3: " ", 
        b1: " ", 
        b2: " ",
        b3: " ",
        c1: " ",
        c2: " ",
        c3: " "
    })
    const [currentPlayer, setPlayer] = useState("X")

    function swapPlayer(){
        if (currentPlayer === "X"){
            setPlayer("O")
        } else setPlayer("X")
    }

    function claimCell(cell){
        const newGameState = {...gameState, [cell]: currentPlayer}
        setGameState(newGameState)
    }

    function gameMove(cell){
        claimCell(cell)
        swapPlayer()
    }

    return(
        <div>
            <h1> This will be a tic tac toe game... soon </h1>
            <h3>Current Player: {currentPlayer}</h3>
            <table>
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
            </table>
        </div>
    )

}

export default Game