import React from 'react';
import './Widget5.css';
import './Logo.js';
import teamId from './teamId';
import Logo from './Logo.js';


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
            <div className="container-bg" >
                <div className="container-fluid mb-4 w-100" >
                    {this.state.post.map((post, index) => (
                        <div className="team1">
                            <div className="row pb-2">
                                <div className="col-12 text-center">{post.squad[1].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></div>
                            </div>
                            <div className="row pb-2">
                                <div className="col-3 text-center">{post.squad[1].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></div>
                                <div className="col-3 text-center">{post.squad[1].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></div>
                                <div className="col-3 text-center">{post.squad[1].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></div>
                                <div className="col-3 text-center">{post.squad[1].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></div>
                            </div>
                            <div className="row pb-4">
                                <div className="col-4 text-center">{post.squad[1].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></div>
                                <div className="col-4 text-center">{post.squad[1].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></div>
                                <div className="col-4 text-center">{post.squad[1].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></div>
                            </div>
                            <div className="row">
                                <div className="col-4 text-center">{post.squad[1].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></div>
                                <div className="col-4 text-center">{post.squad[1].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></div>
                                <div className="col-4 text-center">{post.squad[1].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="container-fluid mt-4 w-100">
                    {this.state.post1.map((post1, index) => (
                        <div className="team2">
                            <div className="row pb-2">
                                <div className="col-4 text-center"><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[6].name}</div>
                                <div className="col-4 text-center"><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[6].name}</div>
                                <div className="col-4 text-center"><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[6].name}</div>
                            </div>
                            <div className="row">
                                <div className="col-4 text-center"><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[6].name}</div>
                                <div className="col-4 text-center"><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[6].name}</div>
                                <div className="col-4 text-center"><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[6].name}</div>
                            </div>
                            <div className="row">
                                <div className="col-3 text-center"><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[6].name}</div>
                                <div className="col-3 text-center"><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[6].name}</div>
                                <div className="col-3 text-center"><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[6].name}</div>
                                <div className="col-3 text-center"><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[6].name}</div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center"><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[6].name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >

            /*
                        <div className="Background" >
                            <table className="tableau-style5">
                                <tbody>
                                    {this.state.post.map((post, index) => (
                                        <tr className="row_tab5" key={`list-elem-${index}`}>
                                            <td></td>
                                            <td></td>
                                            <td className="Gk">{post.squad[1].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    ))}
            
                                    {this.state.post.map((post, index) => (
                                        <tr className="row_tab5" key={`list-elem-${index}`} >
                                            <td className="LgG">{post.squad[3].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></td>
                                            <td className="DcG">{post.squad[4].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></td>
                                            <td></td>
                                            <td className="DcD">{post.squad[5].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></td>
                                            <td className="LgD">{post.squad[6].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></td>
            
                                        </tr>
                                    ))}
            
                                    {this.state.post.map((post, index) => (
                                        <tr className="row_tab5" key={`list-elem-${index}`}>
                                            <td></td>
                                            <td>{post.squad[9].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></td>
                                            <td>{post.squad[10].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></td>
                                            <td>{post.squad[11].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></td>
                                            <td></td>
                                        </tr>
            
                                    ))}
                                    {this.state.post.map((post, index) => (
                                        <tr className="row_tab5" key={`list-elem-${index}`} >
                                            <td>{post.squad[12].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></td>
                                            <td></td>
                                            <td>{post.squad[14].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></td>
                                            <td></td>
                                            <td>{post.squad[15].name}<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></td>
                                        </tr>
                                    ))}
                                </tbody>
            
                            </table>
            
                            <table className="tableau-style6">
                                <tbody>
                                    {this.state.post1.map((post1, index) => (
                                        <tr className="row_tab5" key={`list-elem-${index}`} >
                                            <td></td>
                                            <td><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[14].name}</td>
                                            <td className="Gk"></td>
                                            <td><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[13].name}</td>
                                            <td></td>
                                        </tr>
                                    ))}
            
                                    {this.state.post1.map((post1, index) => (
                                        <tr className="row_tab5" key={`list-elem-${index}`}>
                                            <td className="LgG"><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[12].name}</td>
                                            <td className="DcG"><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[11].name}</td>
                                            <td><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[10].name}</td>
                                            <td className="DcD"><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[9].name}</td>
                                            <td className="LgD"><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[8].name}</td>
            
                                        </tr>
            
                                    ))}
                                    {this.state.post1.map((post1, index) => (
                                        <tr className="row_tab5" key={`list-elem-${index}`} >
                                            <td></td>
                                            <td><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[6].name}</td>
                                            <td><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[5].name}</td>
                                            <td><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[4].name}</td>
                                            <td></td>
                                        </tr>
                                    ))}
                                    {this.state.post1.map((post1, index) => (
                                        <tr className="row_tab5" key={`list-elem-${index}`}>
                                            <td></td>
                                            <td></td>
                                            <td><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />{post1.squad[0].name}</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    ))}
            
                                </tbody>
                            </table>
                        </div>*/
        )

    }
}

export default Widget5;