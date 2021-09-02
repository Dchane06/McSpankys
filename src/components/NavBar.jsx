import React from "react";
import ReactDOM from "react-dom";
import { FaAlignRight } from "react-icons/fa"

class NavBar extends React.Component {

    state = {
        toggle:false
    }
    Toggle = () => {
        this.setState({toggle:!this.state.toggle})
    }

render () {
    return (
        <>
    <div className="navbar">
        <button onClick={this.Toggle}>
                        <FaAlignRight />
                    </button>
                    <ul className={this.state.toggle ? "nav-links show-nav" : "nav-links"}>
                        <li href="#home" >Home</li>
                        <li href="#menu">Menu</li>
                        <li href="#about">About Us</li>
                        <li href="#contact">Contact Us</li>
                        <li href="#special">Special Thanks</li>
                    </ul>
    </div>
        </>
    )
        }
}



export default NavBar;