import React, { Component } from 'react';

class Jumbo extends Component {
    render() {
        return (
            <div className="container">
                <br></br>
                <div class="jumbotron jumbotron-fluid">
                    <div className="row">
                        <div className="container col-2">
                       <h5 className>What's new</h5>
                       <p className="mt-3"><small>Surface Go</small></p>
                       <p className="mt-3"><small>Windows 10</small></p>
                       <p className="mt-3"><small>Surface Go</small></p>
                       <p className="mt-3"><small>Office apps</small></p>
                       </div>
                       <div className="container col-2">
                       <h5 className>Microsoft Store</h5>
                       <p className="mt-3"><small>Account profile</small></p>
                       <p className="mt-3"><small>Download Center</small></p>
                       <p className="mt-3"><small>Microsoft store</small></p>
                       <p className="mt-3"><small>Order tracking</small></p>
                       </div>
                       <div className="container col-2">
                       <h5 className>Education</h5>
                       <p className="mt-3"><small>Microsoft in education</small></p>
                       <p className="mt-3"><small>Office for students</small></p>
                       <p className="mt-3"><small>Office 365 for school</small></p>
                       <p className="mt-3"><small>Office apps</small></p>
                       </div>
                       <div className="container col-2">
                       <h5 className>Enterprise</h5>
                       <p className="mt-3"><small>Azure</small></p>
                       <p className="mt-3"><small>AppSource</small></p>
                       <p className="mt-3"><small>Automotive</small></p>
                       <p className="mt-3"><small>Government</small></p>
                       </div>
                       <div className="container col-2">
                       <h5 className>Developer</h5>
                       <p className="mt-3"><small>Microsoft Visual Studio</small></p>
                       <p className="mt-3"><small>Developer Network</small></p>
                       <p className="mt-3"><small>TechNet</small></p>
                       <p className="mt-3"><small>Office Dev Center</small></p>
                       </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Jumbo;