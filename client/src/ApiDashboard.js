import React, { useState, useEffect} from 'react';
import { json } from 'd3';
const fs = require('fs');

function ApiDashboard() {
    const [dashboard, setDashboard] = useState(false);
    useEffect(() => {
        getDashboard();
    }, []);
    function getDashboard() {
        fetch('/apidashboard')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setDashboard(data);
            });
    }

    return (
        <div>
            {dashboard ? dashboard : 'There is dashboard data available'}
            <br />
            <button onClick={getDashboard}>Get dashboard</button>
        </div>
    );
}