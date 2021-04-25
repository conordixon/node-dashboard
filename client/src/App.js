import React, { Component, State, setState } from 'react';
import './App.css';
import './index.js';
import * as d3 from 'd3';
import Chart from "./Chart";
import { Container, Navbar, Row } from 'react-bootstrap';
import { json } from 'd3';

class App extends Component {
    state = {
        jsondata : []
    }

    componentWillMount() {
        json("/client/public/data/jsonData.json")
            .then(data => this.setState({ data }))
            .catch(error => console.log(error));


        d3.json("https://raw.githubusercontent.com/conordixon/node-dashboard/feature/Implement-D3-React-Components/client/public/data/jsonData.json")
            .then(data => this.setState({
                jsondata: data

            }));

    }

    render() {

        const {jsondata} = this.state

        return (
            <div className="chart">
                <table width class="table">
                {jsondata.map(m=>

                        <tr>
                            <td width="15%">
                                {m.http_header}
                            </td>
                            <td width="60%">
                                <h6>{m.api_uri}</h6>
                            </td>
                            <td width="15%">
                                {m.status_code_response}
                            </td>
                            <td width="15%">
                                {m.timestamp}
                            </td>
                        </tr>

                )}
                </table>
            </div>
        );
    }
}

export default App;