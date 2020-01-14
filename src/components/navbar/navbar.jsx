import React from 'react';
import './navbar.css';

function NavItem (props){
    return <a  className="navLink" href={props.link}>{props.name}</a> 
}

class Navbar extends React.Component{
    render(){
        return(
            <div className="navItem">
                <div className="image">
                    <img src="https://cekstok.com/static/images/cekstok.svg" alt="Logo"></img>
                </div>
                <div className="nav">
                    <NavItem  link = "!" name = "Home" />
                    <NavItem  link = "!!" name = "News" />
                    <NavItem  link = "!!!" name = "Item" />
                    <NavItem  link = "!!!!" name = "About" />
                    <NavItem  link = "!!!!!" name = "Contact Us" />
                </div>
                <div className="btn">
                    <button type="submit">DAPATKAN TOKO ONLINEMU SEKARANG</button>
                </div>
            </div>
        );
    }
}

export default Navbar;