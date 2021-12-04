import React from 'react';
import './Widget5.css';
import './Logo.js';
import teamId from './teamId';


class Widget5 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            post: [],
            post1: [],
            post3: [],

        };
    }

    setTeamId() {

    }

    componentDidMount() {

        fetch("http://localhost:3001/readMatch")
            .then((response) => response.json())
            .then((result) => {
                this.setState({ post3: result })

                fetch(`https://data.football-api.com/v3/teams/${new teamId().teamid(result[0].Team1)}?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b        `)
                    .then((response) => response.json())
                    .then((result) => {
                        this.setState({ post: result })
                    })
                fetch(`https://data.football-api.com/v3/teams/${new teamId().teamid(result[0].Team2)}?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b        `)
                    .then((response) => response.json())
                    .then((result) => {
                        this.setState({ post1: result })
                    })

            })


    }

    render() {
        return (

            <div class="Background" >



                <table class="tableau-style5">
                    {this.state.post.map((post, index) => (
                        <tr class="row_tab5" key={`list-elem-${index}`} >
                            <td></td>
                            <td></td>
                            <td class="Gk">{post.squad[0].name}</td>
                            <td></td>
                            <td></td>
                        </tr>

                    ))}
                    {this.state.post.map((post, index) => (
                        <tr class="row_tab5" key={`list-elem-${index}`} >
                            <td class="LgG">{post.squad[5].name}</td>
                            <td class="DcG">{post.squad[7].name}</td>
                            <td></td>
                            <td class="DcD">{post.squad[8].name}</td>
                            <td class="LgD">{post.squad[9].name}</td>

                        </tr>

                    ))}
                    {this.state.post.map((post, index) => (
                        <tr class="row_tab5" key={`list-elem-${index}`} >
                            <td></td>
                            <td>{post.squad[12].name}</td>
                            <td>{post.squad[13].name}</td>
                            <td>{post.squad[15].name}</td>
                            <td></td>
                        </tr>

                    ))}
                    {this.state.post.map((post, index) => (
                        <tr class="row_tab5" key={`list-elem-${index}`} >
                            <td>{post.squad[21].name}</td>
                            <td></td>
                            <td>{post.squad[22].name}</td>
                            <td></td>
                            <td>{post.squad[23].name}</td>
                        </tr>

                    ))}

                </table>



                <table class="tableau-style6">
                    {this.state.post1.map((post1, index) => (
                        <tr class="row_tab5" key={`list-elem-${index}`} >
                            <td></td>
                            <td>{post1.squad[25].name}</td>
                            <td class="Gk"></td>
                            <td>{post1.squad[18].name}</td>
                            <td></td>
                        </tr>

                    ))}
                    {this.state.post1.map((post1, index) => (
                        <tr class="row_tab5" key={`list-elem-${index}`} >
                            <td class="LgG">{post1.squad[19].name}</td>
                            <td class="DcG">{post1.squad[17].name}</td>
                            <td>{post1.squad[6].name}</td>
                            <td class="DcD">{post1.squad[15].name}</td>
                            <td class="LgD">{post1.squad[11].name}</td>

                        </tr>

                    ))}
                    {this.state.post1.map((post1, index) => (
                        <tr class="row_tab5" key={`list-elem-${index}`} >
                            <td></td>
                            <td>{post1.squad[8].name}</td>
                            <td>{post1.squad[5].name}</td>
                            <td>{post1.squad[4].name}</td>
                            <td></td>
                        </tr>

                    ))}
                    {this.state.post1.map((post1, index) => (
                        <tr class="row_tab5" key={`list-elem-${index}`} >
                            <td></td>
                            <td></td>
                            <td>{post1.squad[1].name}</td>
                            <td></td>
                            <td></td>
                        </tr>

                    ))}

                </table>
            </div>

        )

    }
}

export default Widget5;