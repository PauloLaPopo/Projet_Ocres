
import React from 'react';
import './widget1.css';


class Widget1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            post: [],
        };
    }

    componentDidMount() {
        fetch("https://data.football-api.com/v3/standings/1221?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b")
            //fetch('https://www.scorebat.com/video-api/v1/')
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
                    <thead>
                        <tr>
                            <th>Pos</th>
                            <th><strong>Team</strong></th>
                            <th><strong>W</strong></th>
                            <th><strong>D</strong></th>
                            <th><strong>L</strong></th>
                            <th><strong>Ga</strong></th>
                            <th><strong>Pts</strong> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.post.map(post => (
                            <tr>
                                <td class="position">{post.position}</td>
                                <td class="team">{post.team_name}</td>
                                <td class="information">{post.overall_w}</td>
                                <td class="information">{post.overall_d}</td>
                                <td class="information">{post.overall_l}</td>
                                <td class="information">{post.gd}</td>
                                <td class="information">{post.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )

    }
}

export default Widget1;