import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Bill from "./Bill";
import Payment from "./Payment";
import Confirm from "./Confirm";
import { Helmet } from "react-helmet";

class Main extends Component {
    render() {
        return (
            <Router>
                <div className="container content">
                    <h1 className="heading">Complete your Purchase</h1>
                    <ul className="header">
                        <li className="list activeLink"><NavLink to="/">Personal Info</NavLink></li>
                        <li className="list"><NavLink to="/bill">Billing Info</NavLink></li>
                        <li className="list"><NavLink to="/payment">Confirm Payment</NavLink></li>
                    </ul>
                    <hr />
                    <div className="">
                        <Routes>
                        <Route exact path="/" element={ <Home /> }/>
                        <Route path="/bill" element={ <Bill /> }/>
                        <Route path="/payment" element={ <Payment /> }/>
                        <Route path="/confirm" element={ <Confirm /> }/>
                        </Routes>
                        <Helmet>
                            <script src="./script.js" type="text/javascript" />
                        </Helmet>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Main;