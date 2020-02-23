import React from 'react';


const PlayerCard = props => {
    return (
        <div>
            <h1>{props.players.name}</h1>
            <ul>
                <li>Country: {props.players.country}</li>
                <li>Searches: {props.players.searches}</li>
            </ul>
        </div>
    )
}

export default PlayerCard