import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value : "", cities: [], output: []}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount() {
    const url = "https://jsonmock.hackerrank.com/api/cities"
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);

    this.setState({cities: data.data})
    console.log(this.state.cities)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
    console.log(this.state.value)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({output: this.state.cities.filter(item => item.startsWith(this.state.value))})
    console.log(this.state.output)
  }
  
  render() {
    return (
      <div>
        <h2>Search your city</h2>
        <input type="text" placeholder="Enter your city" value={this.state.value} onChange={this.handleChange} />
        <button type="submit" onSubmit={this.handleSubmit}>Search</button>
        <div id="output">{this.state.output}</div>
      </div>
    )
  }
}

export default App;
