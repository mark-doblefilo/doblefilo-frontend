import React from 'react';
import '../stylesheets/Popular-projects.css';

export default class PopularProjects extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            repos: [],
        };
      }
    
    async componentDidMount() {
        const response = await fetch('http://localhost:8081/repos', {
            method: 'GET',
            headers: new Headers({'Content-Type': 'application/json'})
        });
        const json = await response.json();
        this.setState({ repos: json});
      }

    render() {
        const { repos } = this.state;

        return <div id='Popularprojects'>
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
                            <td className="name">{item.name}</td>
                            <td className="descr">{item.description}</td>
                            <td>{item.language}</td>
                            <td className="stars">{item.stars}</td>
                        </tr>
                    ))}
            </table>
        </div>
    }
}
