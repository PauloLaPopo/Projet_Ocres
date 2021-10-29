import React from 'react';
import './widget2.css';

class Widget2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [],
        };
    }

    componentDidMount() {
        fetch("https://data.football-api.com/v3/matches?comp_id=1221&match_date=29.10.2021&Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b        ")
            .then((response) => response.json())
            .then((result) => {
                this.setState({ post: result })
            })

    }

    render() {
        return (

            <div>
                {this.state.post.map(post => (
                    <div>
                        <span class="local_team">{post.localteam_name}</span>
                        <span class="score">{post.localteam_score}  -  {post.visitorteam_score}</span>
                        <span class="visitor_team">{post.visitorteam_name}</span>
                    </div>
                ))}

            </div>

        )
    }
}

export default Widget2;