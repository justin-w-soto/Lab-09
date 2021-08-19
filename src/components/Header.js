import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import  '../Header.css';

class Header extends Component {
 
    render() { 

        return ( 
            
            <header>
            
                <div className="links">
                    <NavLink exact to="/">Home </NavLink>
                    <NavLink to="/create">Add New Friends </NavLink>
                </div>
            </header>
         );
    }
};
 
export default Header;