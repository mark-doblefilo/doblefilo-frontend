import React from 'react';
import {data} from '../services/info';

export default class AboutMe extends React.Component {
    render(){
        return <div>
            <h1>{data.name}</h1>
        </div>
    }
}