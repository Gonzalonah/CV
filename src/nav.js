import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
export default function nav(){
    ReactDOM.render(
        <><div nameClass="overlay-navigation">
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">Contacta</a></li>
                </ul>
            </nav>
        </div>
       </>,
        document.getElementById('nav')
        )}