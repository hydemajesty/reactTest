import React, { Component } from 'react'
import './Item.css'

export default class Iterm extends Component {
  render() {
    return (
      <li>
        <label>
          <input type="checkbox"/>
            <span>xxx</span>
            <button className="btn btn-danger" style={{display:'none'}}>删除</button>
        </label>
      </li>
    )
  }
}

