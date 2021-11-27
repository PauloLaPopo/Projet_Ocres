import React from 'react';
import './widget2.css';
import './Logo.js';
import Logo from './Logo.js';

class Widget2 extends React.Component {
    constructor(props) {
        var date = new Date();
        var dateOffSet = (24 * 60 * 60 * 1000) * 7;
        var dateFrom = new Date();
        dateFrom.setTime(dateFrom.getTime() - dateOffSet);
        var dateString = "";
        var dateStringFrom = "";
        dateString = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
        dateStringFrom = dateFrom.getDate() + "." + (dateFrom.getMonth() + 1) + "." + date.getFullYear();
        super(props);
        this.dateString = dateString;
        this.dateStringFrom = dateStringFrom;
        this.state = {
            post: [],
        };
    }


    componentDidMount() {
        fetch(`https://data.football-api.com/v3/matches?comp_id=1221&from_date=${this.dateStringFrom}&to_date=${this.dateString}&Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b        `)
            .then((response) => response.json())
            .then((result) => {
                this.setState({ post: result })
            })

    }

    render() {
        console.log(this.dateString)
        console.log(this.dateStringFrom)

        return (

            <div>
                <table class="tableau_style2">
                    <thead>

                        {this.state.post.reverse().slice(0, 3).map(post => (

                            <tr class="row_result" >
                                <td class="local_team"><span class="local_logo"><Logo team_name={post.localteam_name} widht="25px" height="25px" /></span><span class="local_name">{post.localteam_name}</span></td>
                                <td class="score"><span class="local_team_score">{post.localteam_score}</span>  vs  <span class="visitor_team_score">{post.visitorteam_score}</span></td>
                                <td class="visitor_team"><span class="visitor_name">{post.visitorteam_name}</span><span class="visitor_logo"><Logo team_name={post.visitorteam_name} widht="25px" height="25px" /></span></td>
                                <td class="horloge"><Logo team_name="horloge" widht="15px" height="15px" /></td>
                                <td class="match_time">{post.time}</td>
                                <td class="match_day">{post.formatted_date}</td>
                            </tr>
                        ))}
                    </thead>
                </table>
            </div>

        )
    }
}

export default Widget2;