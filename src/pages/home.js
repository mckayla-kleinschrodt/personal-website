import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <header id="home">

                <nav id="nav-wrap">
                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">home</a></li>
                        <li><a className="smoothscroll" href="#about">about</a></li>
                        <li><a className="smoothscroll" href="#experience">experience</a></li>
                        <li><a className="smoothscroll" href="#contact">contact</a></li>
                    </ul>
                </nav>

                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">HI!</h1>
                        <h1>My name is: McKayla Kleinschrodt!</h1>
                        <h1>Use the Navbar at the the top, click around to get to know me and my work!</h1>
                    </div>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                </p>

            </header>
        );
    }
}

export default Home;