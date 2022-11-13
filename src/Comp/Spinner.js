import React, { Component } from 'react'
import loading from './loading.gif'
export class Spinner extends Component {
  render() {
    return (
      <div style={{display:"flex", justifyContent: "center", alignItems : "center"}}>
        <div className='text-center'>
        <img src={loading} alt='Spinner'/>
      </div>
          </div>
    )
  }
}

export default Spinner