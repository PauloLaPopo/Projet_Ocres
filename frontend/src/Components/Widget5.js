import React from 'react';
import './Widget5.css';
import './Logo.js';
import Logo from './Logo.js';


class Widget5 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            post: [],
        };
    }

    componentDidMount() {
        fetch("https://data.football-api.com/v3/teams/10061?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b        ")
            .then((response) => response.json())
            .then((result) => {
                this.setState({ post: result })
                console.log(result);
            })

    }

    render() {

        return (

            <div class="Background">
                {this.state.post.map((post, index) => (
                    <div>
                        <div class="Gk">{post.squad[0].name}</div>
                    </div>
                ))}
            </div >
        )

    }
}

export default Widget5;