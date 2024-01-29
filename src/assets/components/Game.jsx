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



    return(
        <div>
            <h1> This will be a tic tac toe game... soon </h1>
            <table>
                <tr>
                    <td>{gameState.a1}</td>
                    <td>{gameState.a2}</td>
                    <td>{gameState.a3}</td>
                </tr>
                <tr>
                    <td>{gameState.b1}</td>
                    <td>{gameState.b2}</td>
                    <td>{gameState.b3}</td>
                </tr>
                <tr>
                    <td>{gameState.c1}</td>
                    <td>{gameState.c2}</td>
                    <td>{gameState.c3}</td>
                </tr>
            </table>
        </div>
    )

}

export default Game