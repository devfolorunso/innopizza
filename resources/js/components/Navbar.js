import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import ReactDOM from 'react-dom';


class NavbarComponent extends Component{
    render(){ 
        return (
            <div>

                    <Navbar.Brand href="#home" className="font-weight-bold xl:tw-ml-20">
                      <img
                        alt=""
                        src="/media/logo.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-center"
                      />
                      {' innoPizza'}
                    </Navbar.Brand>

            
            </div>
        );
    }   
}

export default NavbarComponent;

if (document.getElementById('navbar')) {
    ReactDOM.render(<NavbarComponent />, document.getElementById('navbar'));
}
