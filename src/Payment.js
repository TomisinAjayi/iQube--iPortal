import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Payment extends Component { 
    render() { 
        return (
            <div className="container">
                <div className="paymentSection">
                    <table className="table">
                        <thead>
                            <th>Item Name</th>
                            <th>&#8358; Price</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Data science and usability</td>
                                <td>50,000.00</td>
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td className="zero">0.00</td>
                            </tr>
                            <tr>
                                <td colSpan={2} className="horizontal"></td>
                            </tr>
                            <tr className="total">
                                <td>Total</td>
                                <td>50,000.00</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="form-group row">
                        <div className="col-5">
                            <NavLink to="/confirm"><button type="submit" className="btn form-control" id="nextBtn">Pay</button></NavLink>
                        </div>
                        <div className="col-6">
                            <NavLink to="/" className="form-control cancel">Cancel Payment</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Payment;