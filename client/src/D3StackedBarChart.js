import React from "react";
import * as d3 from "d3";

export default class D3StackedBarChart extends React.Component {
    constructor(props) {
        super(props);

        this.D3Example = React.createRef()
    }

    render() {
        return (
            <div ref={this.D3Example}>
            </div>
        );
    }
}
