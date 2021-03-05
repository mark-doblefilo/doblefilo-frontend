import React, { useEffect } from 'react';
import { isTemplateSpan } from 'typescript';
import {data} from '../services/info';
import '../stylesheets/Popular-projects.css';

export default class PopularProjects extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          repos: [],
        };
      }
    
    async componentDidMount() {
        fetch('https://api.github.com/users/mark-doblefilo/repos?sort=stargazers&order=desc&per_page=3&type=owner')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    repos: result,
                })
            }
        )
      }

    render() {
        const { repos } = this.state;

        return <div>
            <h3>Popular Projects</h3>
            <table>
                <hr></hr>
                <tr>
                    <th>Project</th>
                    <th>Description</th>
                    <th>Language</th>
                    <th>Stars</th>
                </tr>
                <hr></hr>
                    {repos.map(item => (
                        <tr>
                            <td>{item.name}</td>
                            <td className="descr">{item.description}</td>
                            <td>{item.language}</td>
                            <td>{item.stargazers_count}</td>
                        </tr>
                    ))}
            </table>
        </div>
    }
}