import React, { Component } from 'react'
import './Header.css'
export default class Header extends Component {
  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车确认"></input>
      </div>
    )
  }
}