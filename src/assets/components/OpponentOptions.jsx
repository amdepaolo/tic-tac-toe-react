import React from "react";

function OpponentOptions({opponent, setCompOpponent}){
    const {active, algo, playingAs} = opponent

    function activateOpponent(bool){
        const updatedOppObj = {...opponent, active: bool}
        setCompOpponent(updatedOppObj)
    }

    function changeAlgo(value){
        const updatedOppObj ={...opponent, algo: value}
        setCompOpponent(updatedOppObj)
    }

    function changeXOrO(value){
        const updatedOppObj ={...opponent, playingAs: value}
        setCompOpponent(updatedOppObj)
    }

    return (
        <form>
            <button disabled={active} onClick={()=>activateOpponent(true)}>Play with computer</button>
            <button disabled={!active} onClick={()=>activateOpponent(false)}>Play with humans</button>
            <label> Select Opponent Playstyle: </label>
            <select
                value={algo}
                onChange={e=>changeAlgo(e.target.value)}
            >
                <option value="dumb">Random</option>
                <option value="offensive">Offensive</option>
                <option value="defensive">Defensive</option>
            </select>
            <label> Opponent is playing as: </label>
            <select
                value={playingAs}
                onChange={e=>changeXOrO(e.target.value)}
            >
                <option value="O"> O </option>
                <option value="X"> X </option>
            </select>
        </form>
    )
}

export default OpponentOptions