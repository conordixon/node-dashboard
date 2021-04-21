import React, { Component} from 'react';
import "./App.css";
import './index.js';
import Chart from "./Chart";
import { Container, Navbar } from 'react-bootstrap';
import { json } from 'd3';

class App extends Component {
    render() {
        return (
            <div className="chart">
                <Navbar bg="gray">
                    <Navbar.Brand>API Dashboard</Navbar.Brand>
                </Navbar>
                <Container>
                    <Chart/>
                </Container>
            </div>
        );
    }
}

export default App;