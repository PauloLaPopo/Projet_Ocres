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
        /*this._isMounted = true;
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

            })*/


    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (

            /*<div className="Background" >



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
            </div>*/

            <div className="Background" >



                <table className="tableau-style5">
                    <tbody>
                        <tr className="row_tab5" >
                            <td></td>
                            <td></td>
                            <td className="Gk">Navas<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></td>
                            <td></td>
                            <td></td>
                        </tr>



                        <tr className="row_tab5"  >
                            <td className="LgG">J. Bernat<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></td>
                            <td className="DcG">Sergio Ramos<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></td>
                            <td></td>
                            <td className="DcD">Marquinhos<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></td>
                            <td className="LgD">S. Aurier<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></td>

                        </tr>



                        <tr className="row_tab5"  >
                            <td></td>
                            <td>L Paredes<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></td>
                            <td>M. Verrati<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></td>
                            <td>Wijnaldum<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></td>
                            <td></td>
                        </tr>



                        <tr className="row_tab5"  >
                            <td>L. Messi<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></td>
                            <td></td>
                            <td>K. Mbappe<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></td>
                            <td></td>
                            <td>Neymar<span className="pin"><br /><Logo team_name="pin1" widht="15px" height="15px" /></span></td>
                        </tr>

                    </tbody>

                </table>



                <table className="tableau-style6">
                    <tbody>
                        <tr className="row_tab5"  >
                            <td></td>
                            <td><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />A. Milik </td>
                            <td className="Gk"></td>
                            <td><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />D. Payet</td>
                            <td></td>
                        </tr>



                        <tr className="row_tab5" >
                            <td className="LgG"><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />J. Amavi</td>
                            <td className="DcG"><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />M. Guendouzi</td>
                            <td><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />B. Kamara</td>
                            <td className="DcD"><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />Gerson</td>
                            <td className="LgD"><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />C. Under</td>

                        </tr>



                        <tr className="row_tab5"  >
                            <td></td>
                            <td><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />Saliba</td>
                            <td><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />Caleta-car</td>
                            <td><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />Luan Peres</td>
                            <td></td>
                        </tr>


                        <tr className="row_tab5" >
                            <td></td>
                            <td></td>
                            <td><span className="pin"><Logo team_name="pin2" widht="15px" height="15px" /></span><br />Mandanda</td>
                            <td></td>
                            <td></td>
                        </tr>


                    </tbody>
                </table>
            </div>
        )

    }
}

export default Widget5;