import React from 'react';
import CONSTS from '../consts';
import 'tachyons';

const Card = ({id, fname, lname, team, age, points, goals, assists}) => {
    return (
        <div className="tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5 w5">
            <img src={`${CONSTS.IMG_API_URL}/${id}.jpg`} className="br-100 h10 w10 dib" title="NHL player" alt="NHL player"></img>
            <h2 className="f4">{fname} {lname}</h2>
            <h2 className="f5">{team}</h2>
            <hr className="mw3 bb bw1 b--black-10"></hr>
            <p className="measure center f6 black-70">age: {age}</p>
            <p className="measure center f6 black-70">points: {points}</p>
            <p className="measure center f6 black-70">goals: {goals}</p>
            <p className="measure center f6 black-70">assists: {assists}</p>
        </div>
    );
};

export default Card;