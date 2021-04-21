import React, { Component } from 'react';
import App from "./App";
import * as d3 from 'd3';
import { json } from 'd3';
import D3BarChart from './D3BarChart'

export default class Chart extends Component {
    componentDidMount(){
        new D3BarChart(this.refs.chart)
    }

    render() {
        return <div ref="chart"></div>
    }
}