
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
                        <tr><th><strong>Equipes</strong></th>
                            <th><strong>Points</strong> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.post.map(post => (
                            <tr> <td>{post.team_name}</td>
                                <td>{post.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )

    }
}

export default Widget1;