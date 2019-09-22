import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="container">
                <br></br>
                <br></br>
                <div className="card-deck">
                <div className="card">
                  <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2Ogje?ver=bdc6&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" className="card-img-top" alt="..."></img>
                  <div className="card-body">
                    <h5 className="card-title">This is your 365</h5>
                    <p className="card-text">Discover what's possible every day with Office</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
                <div className="card">
                  <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWfbJT?ver=8259&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" className="card-img-top" alt="..."></img>
                  <div className="card-body">
                    <h5 className="card-title">Surface Book 2</h5>
                    <p className="card-text">Powerhouse performance in the ultimate laptop.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
                <div className="card">
                  <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1uWfh?ver=0868&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" className="card-img-top" alt="..."></img>
                  <div className="card-body">
                    <h5 className="card-title">Xbox Game Pass Ultimate</h5>
                    <p className="card-text">Xbox Live Gold and over 100 high-quality console and PC games.Play together with friends and discove your next favourite game</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
                <div className="card">
                  <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE37bh1?ver=33cd&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" className="card-img-top" alt="..."></img>
                  <div className="card-body">
                    <h5 className="card-title">Xbox One S</h5>
                    <p className="card-text">The ultimate games and 4K entertainment system.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Card;