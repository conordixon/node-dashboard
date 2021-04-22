import * as d3 from 'd3';


export default class D3BarChart {
    constructor(element) {
        const svg = d3.select(element)
            .append("svg")
            .attr("http_header", 500)
            .attr("api_uri", 500)
            .attr("status_code_response", 500)
            .attr("timestamp", 500);

        d3.json("https://raw.githubusercontent.com/conordixon/node-dashboard/feature/Implement-D3-React-Components/client/public/data/jsonData.json") .then(data => {
            console.log(data);

            const stack = d3.stack()
                .keys(["http_header", "api_uri", "status_code_response", "timestamp"])
                .order(d3.stackOrderNone)
                .offset(d3.stackOffsetNone);

            const series = stack(data);

        })
    }
}