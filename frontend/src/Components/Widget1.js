
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
                    <thread>
                        <tr>
                            <th>Equipes</th>
                            <th>Points</th>
                        </tr>
                    </thread>
                    <tbody>
                        <tr>
                            <td>
                                {this.state.post.map((post) => (
                                    <div>
                                        {post.team_name}
                                        <br />
                                    </div>
                                ))}
                            </td>
                            <td>
                                {this.state.post.map((post) => (
                                    <div>
                                        {post.points}
                                        <br />
                                    </div>
                                ))}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        )
    }
}

export default Widget1;