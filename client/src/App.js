import React, {useState, useEffect} from 'react';
import logo from "./logo.svg";
import "./App.css";


function App() {
    const [dashboard, setDashboard] = useState(false);
    useEffect(() => {
        getDashboard();
    }, []);
    function getDashboard() {
        fetch('http://localhost:3001')
            .then(response => {
                return response.text();
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

export default App;