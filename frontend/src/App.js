import React, { Component } from 'react';


class App extends Component {

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
        {this.state.post.map((post) => (
          <div>
            <p>{post.team_name} : {post.points}</p>
          </div>
        ))}
      </div>

    )
  }
}

export default App;