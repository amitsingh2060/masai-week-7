import React, { Component } from 'react';

class Microslide extends Component {
    render() {
        return (
            <div className="container">
                <div className="bd-example">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://wallpapercave.com/wp/wp3897519.jpg" className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                        <h5></h5>
                        <p></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2Ni4z?ver=0f5a&q=90&m=8&h=303&w=539&b=%23FFFFFFFF&l=f&x=361&y=178&s=1759&d=989&aim=true" className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                        <h5>Go a touch above ordinary</h5>
                        <p>Surface Laptop 2.</p>
                        </div>
                    </div>
                    
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                    </a>
                </div>
                </div>
            </div>
        );
    }
}

export default Microslide;