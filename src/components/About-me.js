import React from 'react';
import {data} from '../services/info';
import '../stylesheets/About-me.css';
import background from '../images/me.jpg';

export default class AboutMe extends React.Component {
    render(){
        function handleScroll() {
            document.getElementById('Popularprojects').scrollIntoView({behavior: 'smooth'})
        }

        return <div className="image" style={{ backgroundImage: `url(${background})` }}>
            <div className="nameText">{data.name}</div>
            <div className="descriptionText">{data.description}</div>
            <button type="button" className="readmoreButton" onClick={handleScroll}>Read more</button>
        </div>
    }
}