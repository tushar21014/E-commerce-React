import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Nav extends Component {
  render() {
    return (
        
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="./Home">{this.props.heading}</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="linknavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item ">
                                <Link className="nav-link" to="./Home">{this.props.first} <span className="sr-only"></span></Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="./Aboutus">{this.props.second} <span className="sr-only"></span></Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="./Contactus">{this.props.third} <span className="sr-only"></span></Link>
                            </li>
                        </ul>
                        <Link className="btn btn-primary btn-lg active" role="button" to ="Login" aria-pressed="true">Sign Up</Link>


                    </div>
                </nav>
            </div>
        </div>
    )
  }
}

export default Nav