import React, { Component } from 'react'

export class Footer extends Component {
    back = () => {
        var element = document.getElementById('up');
        window.scroll(0,0)
        }
  render() {


    return (
        <footer>
      <div id='back'>
        <div id='backto' onClick={this.back}>
        Back To Top
        </div>
        <div className='row' id='footer'>
            <div className='col-4' id='footer-1'>
                Get To Know Us
            </div>
            <div className='col-4' id='footer-2'>
                Connect With Us
            </div>
            <div className='col-4' id='footer-3'>
                Let Us Help You
            </div>
        </div>
        <div className='row'>
            <div className='col-4' id='footer-1-content'>
                <ul id='footer-ul'>
                    <a><li id='footer-li'>About Us</li></a>
                    <a><li id='footer-li'>Careers</li></a>
                    <a><li id='footer-li'>Company Cares</li></a>
                </ul>
            </div>
            <div className='col-4' id='footer-2-content'>
                <ul id='footer-ul'>
                    <a><li id='footer-li'>Facebook</li></a>
                    <a><li id='footer-li'>Twitter</li></a>
                    <a><li id='footer-li'>Instagram</li></a>
                </ul>
            </div>
            <div className='col-4' id='footer-3-content'>
            <ul id='footer-ul'>
                    <a><li id='footer-li'>Your Account</li></a>
                    <a><li id='footer-li'>Return Center</li></a>
                    <a><li id='footer-li'>Help</li></a>
                </ul>
            </div>
        </div>
        <div id="copyright">
            &copy; Copyright 2022 reserved by Tushar Gupta  
        </div>
      </div>
        </footer>
    )
  }
}

export default Footer