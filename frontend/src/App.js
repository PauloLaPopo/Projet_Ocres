import React, { Component } from 'react';


class App extends Component {

  state = {
    post: [{}]
  }

  componentDidMount() {
    fetch('https://data.football-api.com/v3/standings/1221?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b')
      //fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        this.setState({ post: result })
        console.log(result)
        for (let i = 0; i < 20; i++) {
          console.log(result[i].team_name)
          console.log(result[i].points)


        }

      })

  }

  render() {
    return (
      <div className="App">
        <h1>Test</h1>
        <div>


          {this.state.post[0].team_name}
        </div>
      </div>
    )
  }
}

export default App;