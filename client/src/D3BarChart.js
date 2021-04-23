import * as d3 from 'd3';

/*
Four columns
http_header - "GET" or "POST"

api_uri -
https://sandbox.api.mastercard.com/fraud/merchant/v3/termination-inquiry?PageLength=10&Format=JSON
https://sandbox.api.mastercard.com/atms/v1/atm?PageOffset=0&PageLength=5&AddressLine1=114%20Fifth%20Avenue&AddressLine2=Apartment%201&City=New%20York%20City&CountrySubdivision=NY&PostalCode=11101&Country=USA&Latitude=38.76006576913497&Longitude=-90.74615107952418&DistanceUnit=MILE&Radius=25&SupportEMV=1&InternationalMaestroAccepted=1

status_code_response
200
400

time_stamp

"2021-03-27 14:44:23.735000"

formatSecond = d3.timeFormat(":%S"),
formatMinute = d3.timeFormat("%I:%M"),
formatHour = d3.timeFormat("%I %p"),
formatDay = d3.timeFormat("%a %d"),
formatWeek = d3.timeFormat("%b %d"),
formatMonth = d3.timeFormat("%B"),
formatYear = d3.timeFormat("%Y");

*/


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