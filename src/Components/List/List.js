import React, { Component } from 'react'
import Item from '../Item/Iterm'
import './List.css'

export default class List extends Component {
  render() {
    return (
      <ul className="todo-main">
        <Item></Item>
      </ul>
    )
  }
}
