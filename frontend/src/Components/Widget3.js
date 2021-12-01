import React from 'react';
import './Widget3.css';
import './Logo.js';

import {
    BarChart, ResponsiveContainer, Legend, Tooltip, Bar, XAxis, YAxis,
    CartesianGrid
} from 'recharts';


class Widget3 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            post: [],
        };
    }

    componentDidMount() {
        fetch("https://football98.p.rapidapi.com/ligue1/scorers", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "football98.p.rapidapi.com",
                "x-rapidapi-key": "3685a79f54msh29c76be0f40710cp1df765jsn975bada232b4"
            }
        })
            .then(response => response.json())
            .then((result) => {
                this.setState({ post: result })
                console.log(result);
            })
            .catch(err => {
                console.error(err);
            });
    }

    render() {

        return (
            <ResponsiveContainer width="100%" aspect={2}>
                <BarChart layout="vertical" width={500} height={500} barCategoryGap={15} data={this.state.post.slice(0, 8)} >
                    <CartesianGrid />
                    <XAxis type="number" />
                    <YAxis dataKey="player_name" type="category" scale="band" stroke="#02153C" />
                    <Legend />
                    <Tooltip />
                    {/*<Bar dataKey="player_penalties" barSize={20} stackId="a" fill="#8884d8" />*/}
                    <Bar dataKey="player_goals" barSize={20} stackId="a" fill="#02153C" label={{ position: 'right' }} />

                </BarChart>
            </ResponsiveContainer>
        )

    }
}

export default Widget3;