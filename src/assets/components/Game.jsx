import { useState } from "react";
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

    function swapPlayer(){
        if (currentPlayer === "X"){
            setPlayer("O")
        } else setPlayer("X")
    }

    function claimCell(cell){
        const newGameState = {...gameState, [cell]: currentPlayer}
        const winStatus = winCheck(cell, newGameState)
        console.log(winStatus)
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

   function winCheck(lastClaimedCell, board){
        const diagonals = ['a1','a3','b2','c1','c3']
        const rowLetter = lastClaimedCell[0]
        const columnNum = lastClaimedCell[1]
        if ( board[rowLetter+1] == board[rowLetter+2] && board[rowLetter+2] == board[rowLetter+3]){
            return "Horizontal Win" 
        } else if (board["a"+columnNum] == board["b"+columnNum] && board['b'+columnNum] == board['c'+rowLetter]){
            return "Vertical Win"
        } else if (diagonals.includes(lastClaimedCell) && board.b2 != ' '){
            if(board.a1 == board.b2 && board.b2 == board.c3){
                return "Diagonal Win"
            }
            else if (board.a3 == board.b2 && board.b2 == board.c1){
                return "Diagonal Win"
            } else return "No Win yet"
        } else return "No Win Yet"
        
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