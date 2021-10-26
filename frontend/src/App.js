import React, { Component } from 'react';


class App extends Component {

  state = {
    post: {}
  }

  componentDidMount() {
    fetch('https://data.football-api.com/v3/competitions/1221?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b')
      //fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        this.setState({ post: result })
        console.log(result)
        console.log(result.name)
      })
    console.log(this.state.post.name)

  }

  render() {
    return (
      <div className="App">
        <h1>Test</h1>
        {this.state.post.name}
      </div>
    )
  }
}

export default App;