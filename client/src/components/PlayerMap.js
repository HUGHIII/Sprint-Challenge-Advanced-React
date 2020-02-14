import React from 'react';
import PlayerCard from './PlayerCard';


const PlayerMap = props => {
   
    return (
        <div>
            {props.players.map(e=>(
                <PlayerCard key={e.id} players={e} />
            ))}
           
        </div>
    )
}

export default PlayerMap