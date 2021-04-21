import * as d3 from 'd3';
import { json, fetch } from 'd3';
import ApiDashboard from './ApiDashboard';


const url = '/apidashboard';


export default class D3BarChart {
    constructor(element) {
        const svg = d3.select(element)
        .append("svg")
            .attr("http_header", 800)
            .attr("status_code_response", 800)

        d3.json(url).then(data => {
            const rects = svg.selectAll("rect")
                .data(data)
            console.log(data)

            rects.enter().append("rect")
                .attr("x", (d, i) => i * 100)
                .attr("y", 0)
                .attr("http_header", 50)
                .attr("height", d => d.status_code_response)
                .attr("fill", "grey")
        })
    }
}