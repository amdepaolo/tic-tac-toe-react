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
    const [lastClaimedCell, setLastCell] = useState(" ")
    const [currentPlayer, setPlayer] = useState("X")
    const [moveCount, setMoveCount] = useState(0)
    let gameStatus;

    useEffect(()=>{
        if(winCheck()){
            console.log("Winner")
        } else if ( moveCount > 8 && !winCheck()){
            console.log("DRAW!")
        } else console.log("Keep Going")
    })

    function swapPlayer(){
        if (currentPlayer === "X"){
            setPlayer("O")
        } else setPlayer("X")
    }

    function claimCell(cell){
        const newGameState = {...gameState, [cell]: currentPlayer}
        setGameState(newGameState)
        setLastCell(cell)
    }

    function gameMove(cell){
        if (gameState[cell] == "X" || gameState[cell] == "O"){
            return
        } else {
            claimCell(cell)
            setMoveCount(moveCount+1)
            swapPlayer()
            console.log(winCheck())
        }
    }

   function winCheck(){
        const diagonals = ['a1','a3','b2','c1','c3']
        const rowLetter = lastClaimedCell[0]
        const columnNum = lastClaimedCell[1]
        if ( gameState[rowLetter+1] == gameState[rowLetter+2] && gameState[rowLetter+2] == gameState[rowLetter+3]){
            return true 
        } else if (gameState["a"+columnNum] == gameState["b"+columnNum] && gameState['b'+columnNum] == gameState['c'+rowLetter]){
            return true
        } else if (diagonals.includes(lastClaimedCell) && gameState.b2 != ' '){
            if(gameState.a1 == gameState.b2 && gameState.b2 == gameState.c3){
                return true
            }
            else if (gameState.a3 == gameState.b2 && gameState.b2 == gameState.c1){
                return true
            } else return false
        } else return false
        
    }
    
        

    return(
        <div>
            <h1> This will be a tic tac toe game... soon </h1>
            <h3>Current Player: {currentPlayer}</h3>
            <h4>{gameStatus}</h4>

            <button onClick={()=>setGameState(newGameState)}>Reset Game</button>
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