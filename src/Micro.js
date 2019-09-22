import React, { Component } from 'react';

class Micro extends Component {
    render() {
        return (
            <div className="container">
                

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <nav class="navbar navbar-light bg-light">
                    <a class="navbar-brand" href="#">
                       <img src="https://image.flaticon.com/icons/png/512/14/14619.png" width="30" height="30" alt=""/>
                   </a>
                </nav>
                
                <a className="navbar-brand" href="#">Microsoft</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                 <ul className="navbar-nav">
                     <li className="nav-item active">
                          <a className="nav-link" href="#">Office <span className="sr-only">(current)</span></a>
                     </li>
                     <li className="nav-item">
                         <a className="nav-link" href="#">Windows <span className="sr-only">(current)</span></a>
                        
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Surface<span className="sr-only">(current)</span></a> 
                    </li>

                    <li className="nav-item">
                          <a className="nav-link" href="#">Xbox</a>
                    </li>
     
                    </ul>
                    </div>
                    </nav>


        
            </div>
        );
    }
}

export default Micro;