import React, { Component } from "react";
import headshot from './headshot.jpg';


class About extends Component{
    render () {
        return(
            <section id='about'>
                <h1>All About McKayla </h1>
                <div class="column left">
                <img src={headshot} class="img-thumbnail" alt="..." />
                </div>
                <div class="column right">
                <p>Most people call me Kayla, I am a young engineer with dreams of creating a more accesible web experiene for all! Below is a summary of my professional career, as well as a personal blurb that allows people to get to know me outside of tech!</p>
                <h2>work</h2>
                    <ul>
                        <li>Member of 2022 Graduating class at Wayne State University</li>
                            <li>B.S. in Computer Science</li>
                            <li>B.A. in Political Science</li>
                        <li>Accomplished Intern as Software Engineer at Autodesk</li>
                        <li>Lecturer for Introduction to Engineering, Summer 2022</li>
                        <li>Published researcher regarding engineering education</li>
                    </ul>
                <h2>play</h2>
                    <ul>
                        <li>Lifelong Tennis lover</li>
                        <li>Vinyl Collector</li>
                        <li>Home chef</li>
                        <li>Mediocre, but engthusiastic Golfer</li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default About;
