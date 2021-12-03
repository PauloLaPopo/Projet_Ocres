import React from 'react';
import './Widget6.css';
import './Logo.js';
import Logo from './Logo.js';


class Widget6 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            post: [],
        };
    }


    render() {

        return (

            <div class="background_live">
                <div class="match_direct">Match en direct</div>
                <div class="logo_score"><span class="logo_dom"><Logo team_name="Marseille" widht="70px" height="70px" /></span>    <span class="score_live">2 - 0</span> <span><Logo team_name="PSG" widht="70px" height="70px" /></span></div>
                <div class="live"><span class="logo_live">Live</span></div>
                <div class="infos"><Logo team_name="horloge" widht="15px" height="15px" /> 34" <Logo team_name="position" widht="15px" height="15px" /> Stade Vélodrome</div>
            </div>

        )

    }
}

export default Widget6;