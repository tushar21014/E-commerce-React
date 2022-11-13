import React, { Component } from 'react'

export class Slidee extends Component {
  render() {
    return (
      <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/Unrec/GW/August/Unrec_DesktopTallHero_3000x1200._CB630557043_.jpg" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/Unrec/GW/August/Unrec_DesktopTallHero_3000x1200._CB630557043_.jpg" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/Unrec/GW/August/Unrec_DesktopTallHero_3000x1200._CB630557043_.jpg" alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    )
  }
}

export default Slidee