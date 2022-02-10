import React, { Component } from 'react'
import Header  from './Components/Header/Header'
import List from './Components/List/List'
import Footer from './Components/Footer/Footer'
import './App.css'
export default class App extends Component {
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header></Header>
          <List></List>
          <Footer></Footer>
        </div>
      </div>
    )
  }
}

