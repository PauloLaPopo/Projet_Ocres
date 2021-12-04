import React from 'react';
import './Widget5.css';
import './Logo.js';
import teamId from './teamId';


class Widget5 extends React.Component {

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            post: [],
            post1: [],
            post3: [],

        };
    }

    componentDidMount() {
        this._isMounted = true;
        fetch("http://localhost:3001/readMatch")
            .then((response) => response.json())
            .then((result) => {
                if (this._isMounted) {
                    this.setState({ post3: result })

                    fetch(`https://data.football-api.com/v3/teams/${new teamId().teamid(result[0].Team1)}?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b        `)
                        .then((response) => response.json())
                        .then((result) => {
                            if (this._isMounted) {
                                this.setState({ post: result })
                            }
                        })
                    fetch(`https://data.football-api.com/v3/teams/${new teamId().teamid(result[0].Team2)}?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b        `)
                        .then((response) => response.json())
                        .then((result) => {
                            if (this._isMounted) {
                                this.setState({ post1: result })
                            }
                        })
                }

            })


    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (

            <div className="Background" >



                <table className="tableau-style5">
                    {this.state.post.map((post, index) => (
                        <tr className="row_tab5" key={`list-elem-${index}`} >
                            <td></td>
                            <td></td>
                            <td className="Gk">{post.squad[0].name}</td>
                            <td></td>
                            <td></td>
                        </tr>

                    ))}
                    {this.state.post.map((post, index) => (
                        <tr className="row_tab5" key={`list-elem-${index}`} >
                            <td className="LgG">{post.squad[4].name}</td>
                            <td className="DcG">{post.squad[5].name}</td>
                            <td></td>
                            <td className="DcD">{post.squad[6].name}</td>
                            <td className="LgD">{post.squad[7].name}</td>

                        </tr>

                    ))}
                    {this.state.post.map((post, index) => (
                        <tr className="row_tab5" key={`list-elem-${index}`} >
                            <td></td>
                            <td>{post.squad[12].name}</td>
                            <td>{post.squad[13].name}</td>
                            <td>{post.squad[14].name}</td>
                            <td></td>
                        </tr>

                    ))}
                    {this.state.post.map((post, index) => (
                        <tr className="row_tab5" key={`list-elem-${index}`} >
                            <td>{post.squad[15].name}</td>
                            <td></td>
                            <td>{post.squad[16].name}</td>
                            <td></td>
                            <td>{post.squad[17].name}</td>
                        </tr>

                    ))}

                </table>



                <table className="tableau-style6">
                    {this.state.post1.map((post1, index) => (
                        <tr className="row_tab5" key={`list-elem-${index}`} >
                            <td></td>
                            <td>{post1.squad[16].name}</td>
                            <td class="Gk"></td>
                            <td>{post1.squad[15].name}</td>
                            <td></td>
                        </tr>

                    ))}
                    {this.state.post1.map((post1, index) => (
                        <tr className="row_tab5" key={`list-elem-${index}`} >
                            <td className="LgG">{post1.squad[13].name}</td>
                            <td className="DcG">{post1.squad[12].name}</td>
                            <td>{post1.squad[11].name}</td>
                            <td className="DcD">{post1.squad[10].name}</td>
                            <td className="LgD">{post1.squad[9].name}</td>

                        </tr>

                    ))}
                    {this.state.post1.map((post1, index) => (
                        <tr className="row_tab5" key={`list-elem-${index}`} >
                            <td></td>
                            <td>{post1.squad[6].name}</td>
                            <td>{post1.squad[5].name}</td>
                            <td>{post1.squad[4].name}</td>
                            <td></td>
                        </tr>

                    ))}
                    {this.state.post1.map((post1, index) => (
                        <tr className="row_tab5" key={`list-elem-${index}`} >
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