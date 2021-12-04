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

    componentDidMount() {
        fetch("http://localhost:3001/readMatch")
            .then((response) => response.json())
            .then((result) => {
                this.setState({ post: result })
            })

    }


    render() {

        return (

            <div class="background_live">
                {this.state.post.slice(0, 1).map((post) => (
                    <>
                        <div class="match_direct">Match en direct</div>
                        <div class="logo_score"><span class="logo_dom"><Logo team_name={post.Team1} widht="70px" height="70px" /></span>
                            <span class="score_live">{post.ScoreTeam1} - {post.ScoreTeam2}</span>
                            <span class="logo_dom"><Logo team_name={post.Team2} widht="70px" height="70px" /></span></div>
                        <div class="live"><span class="logo_live">Live</span></div>
                        <div class="infos"><Logo team_name="horloge1" widht="20px" height="20px" /> <span class="timer">34"</span>
                            <Logo team_name="loca" widht="20px" height="20px" /> <span class="place">{post.Place}</span></div>
                    </>


                ))}
            </div>

        )

    }
}

export default Widget6;