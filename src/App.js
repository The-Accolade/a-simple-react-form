import React, { Component } from 'react';
import FormInput from './FormInput';
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  state = {
    item: '',
    items: [],
    id: Math.floor(Math.random() * 5)
  }

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      title: this.state.item,
      id: this.state.id
    }
    this.setState({
      items: [...this.state.items, newItem]
    })
  }

  render() {
    return(
      <div className="container"> 
        <h1 className="my-5 text-center">A Simple React Form App</h1>
        <FormInput onchange={ this.handleChange } />
        <button className="btn btn-block btn-dark my-4" onSubmit={ this.handleSubmit }>Submit</button>
      </div>
    )
  }
}

export default App;
