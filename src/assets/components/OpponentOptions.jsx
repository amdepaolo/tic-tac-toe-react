import React from "react";

function OpponentOptions({opponent, setCompOpponent}){
    const {active, algo, playingAs} = opponent

    function activateOpponent(bool){
        const updatedOppObj = {...opponent, active: bool}
        setCompOpponent(updatedOppObj)
    }

    return (
        <form>
            <button disabled={active} onClick={()=>activateOpponent(true)}>Play with computer</button>
            <button disabled={!active} onClick={()=>activateOpponent(false)}>Play with humans</button>
            <label>Select Opponent Playstyle: </label>
            <select>
                <option>Random</option>
                <option>Offensive</option>
                <option>Defensive</option>
            </select>
        </form>
    )
}

export default OpponentOptions