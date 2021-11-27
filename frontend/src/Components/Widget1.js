import React from 'react';
import './widget1.css';
import './Logo.js';
import Logo from './Logo.js';


class Widget1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            post: [],
        };
    }

    componentDidMount() {
        fetch("https://data.football-api.com/v3/standings/1221?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b")
            .then((response) => response.json())
            .then((result) => {
                this.setState({ post: result })
                console.log(result);
            })

    }

    render() {

        return (

            <div>
                <table class="tableau-style">
                    <thead class="table_title">
                        <tr>
                            <th>Pos</th>
                            <th class="th_team"><strong>Team</strong></th>
                            <th class="th_chiffre"><strong>W</strong></th>
                            <th class="th_chiffre"><strong>D</strong></th>
                            <th class="th_chiffre"><strong>L</strong></th>
                            <th class="th_chiffre"><strong>Ga</strong></th>
                            <th class="th_chiffre"><strong>Pts</strong> </th>
                        </tr>
                    </thead>
                    <tbody class="row_info">
                        {this.state.post.map((post, index) => (
                            <tr key={`list-elem-${index}`} >
                                <td class="position">{post.position}</td>
                                <td class="team"><Logo team_name={post.team_name} widht="22px" height="22px" /><span class="team_name_W1">{post.team_name}</span></td>
                                <td class="information">{post.overall_w}</td>
                                <td class="information">{post.overall_d}</td>
                                <td class="information">{post.overall_l}</td>
                                <td class="information">{post.gd}</td>
                                <td class="information">{post.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
        )

    }
}

export default Widget1;