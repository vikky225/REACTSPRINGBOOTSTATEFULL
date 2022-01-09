import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbardark bg-dark">
                     <div><a href="https://javaguides.net" className="navbar-brand"> Employee Management App </a></div>   

                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;