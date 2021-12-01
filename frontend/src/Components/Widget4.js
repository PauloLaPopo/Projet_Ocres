import React from 'react';
import './Widget4.css';
import './Logo.js';


class Widget4 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            post: [],
        };
    }

    componentDidMount() {
        fetch("https://odds.p.rapidapi.com/v1/odds?sport=soccer_france_ligue_one&region=eu&mkt=h2h&dateFormat=iso&oddsFormat=decimal", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "odds.p.rapidapi.com",
                "x-rapidapi-key": "3685a79f54msh29c76be0f40710cp1df765jsn975bada232b4"
            }
        })
            .then((response) => response.json())
            .then((result) => {
                this.setState({ post: result.data })
                console.log(result);
            })
            .catch(err => {
                console.error(err);
            });

    }

    render() {
        return (
            <div class="table-responsive">
                <table class="tableau-style4">
                    <caption class="title_cote">Cotes des matchs à venir</caption>
                    <tr class="header_tab">
                        <td></td>
                        <th class="result_odd">1</th>
                        <th class="result_odd">N</th>
                        <th class="result_odd">2</th>
                        <td></td>
                    </tr>
                    {this.state.post.slice(0, 4).map((post, index) => (
                        <tr class="row_info" key={`list-elem-${index}`} >
                            <td class="team_home">{post.teams[0]}</td>
                            <td class="odds">{post.sites[0].odds.h2h[0]}</td>
                            <td class="odds">{post.sites[0].odds.h2h[2]}</td>
                            <td class="odds">{post.sites[0].odds.h2h[1]}</td>
                            <td class="team_away">{post.teams[1]}</td>
                        </tr>
                    ))}
                </table>
            </div >
        )

    }
}

export default Widget4;