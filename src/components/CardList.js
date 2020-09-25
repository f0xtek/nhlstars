import React from 'react';
import Card from './Card';

const CardList = ({players}) => {
    return (
        <div>
            {
                players.map(player => {
                    return (
                        <Card
                            key={player.skaterId}
                            id={player.skaterId}
                            fname={player.skaterFirstName.toUpperCase()}
                            lname={player.skaterLastName.toUpperCase()}
                            team={player.skaterTeamName.toUpperCase()}
                            age={player.ageInYears}
                            points={player.careerPoints}
                            goals={player.careerGoals}
                            assists={player.careerAssists}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;