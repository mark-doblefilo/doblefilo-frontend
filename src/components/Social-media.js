import React from 'react';
import '../stylesheets/Social-media.css';

export default class SocialMedia extends React.Component {
    render() {
        return <div className="mainDiv">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <h3>STAY CONNECTED</h3>
            <center>
                <a href="http://twitter.com/mark_doblefilo" class="fa fa-twitter"></a>
                <a href="http://github.com/mark-doblefilo" class="fa fa-github"></a>
                <a href="http://instagram.com/mark_doblefilo" class="fa fa-instagram"></a>
            </center>
        </div>
    }
}