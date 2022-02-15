import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  
  hanlecheckAll= (event)=>{
    this.props.checkAllTodo(event.target.checked)
  }

  render() {
    const {todos} = this.props
    // const doneCount = todos.reduce((pre,todo)=>{return pre + (todo.done ? 1 : 0)},0)
    const doneCount = todos.reduce((pre,todo)=>pre + (todo.done ? 1 : 0),0)
    
    const total = todos.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.hanlecheckAll} checked={doneCount === total? true : false}></input>
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
