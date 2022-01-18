import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (  
            <div className="content"> 
            <Router>
                
                    <Navbar/>
                    <p className="App-intro">{this.state.apiResponse}</p>

                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/create" element={<CreatePage />} />
                       
                    </Routes>
            </Router>
            </div>

        );
    }
}

export default App;