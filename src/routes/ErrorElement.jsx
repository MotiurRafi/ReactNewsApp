import React, { Component } from 'react'

export default class ErrorElement extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center align-self-center ' style={{height: "100vh"}}>
        <h1 className='d-flex align-self-center'>Something Went Wrong</h1>
      </div>
    )
  }
}
