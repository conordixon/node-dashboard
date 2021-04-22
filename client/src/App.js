import React, { Component, State, setState } from 'react';
import './App.css';
import './index.js';
import Chart from "./Chart";
import { Container, Navbar, Row } from 'react-bootstrap';
import { json } from 'd3';

class App extends Component {
    state = {
        data : []
    }

    componentWillMount() {
        json("/client/public/data/jsonData.json")
            .then(data => this.setState({ data }))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="chart">
                <Navbar bg="gray">
                    <Navbar.Brand>API Dashboard</Navbar.Brand>
                </Navbar>
                <Container>
                    <Row>
                    </Row>
                        <Chart/>
                </Container>
            </div>
        );
    }
}

export default App;