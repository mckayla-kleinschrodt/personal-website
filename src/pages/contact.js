import React, { Component } from "react";

class Contact extends Component{
    render () {
        return(
            <section id='contact'>
                <h1>Drop me a line!</h1>
                <a href="mailto:kaylakleinschrodt@gmail.com?body=My custom mail body">Email</a>
                <a href="https://www.linkedin.com/in/mckayla-kleinschrodt/">Connect with me on LinkedIn</a>
            </section>
        );
    }
}

export default Contact;