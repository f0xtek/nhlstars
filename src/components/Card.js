import React from 'react';
import CONSTS from '../consts';
import './Card.css';

const Card = () => {
    return (
        <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <div class="tc">
                <img src="http://nhl.bamcontent.com/images/headshots/current/168x168/8444945.jpg" class="br-100 h3 w3 dib" title="NHL player"></img>
                <h1 class="f4">GLENN ANDERSON</h1>
                <h1 class="f4">6 TORONTO MAPLE LEAFS</h1>
                <hr class="mw3 bb bw1 b--black-10"></hr>
            </div>
            <p class="lh-copy measure center f6 black-70">age: 32</p>
            <p class="lh-copy measure center f6 black-70">points: 1099</p>
            <p class="lh-copy measure center f6 black-70">goals: 498</p>
            <p class="lh-copy measure center f6 black-70">assists: 601</p>
        </article>
    );
};

export default Card;