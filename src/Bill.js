import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Bill extends Component {

    render() {

        return (
            <div className="container">
                <form className="cardForm">
                    <div className="form-group">
                        <label for="cardname">Name on Card <span className="redAsterick">*</span></label>
                        <input type="text" name="cardname" className="form-control" placeholder="Opara Linus Ahmed"></input>
                    </div>
                    <div className="form-group">
                    <label for="cardtype">Card Type <span className="redAsterick">*</span></label>
                        <select id="cardtype" name="cardtype" className="form-control">
                            <option value="Visa">Visa</option>
                            <option value="Mastercard">Mastercard</option>
                            <option value="Verve">Verve</option>
                        </select>
                    </div>
                    <div className="form-group row">
                        <div className="col-6 cdd">
                            <label for="carddetails">Card details <span className="redAsterick">*</span></label>
                            <input type="text" name="carddetails" className="form-control" placeholder="44960 44960 44960 44960"></input>
                        </div>
                        <div className="col-3 ex">
                            <label for="expiry">Expiry date <span className="redAsterick">*</span></label>
                            <input type="text" name="expiry" className="form-control" placeholder="04 / 23"></input>
                        </div>
                        <div className="col-3 ex">
                            <label for="cvv">CVV <span className="redAsterick">*</span></label>
                            <input type="text" name="cvv" className="form-control" placeholder="923"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-5">
                            <NavLink to="/payment"><button type="submit" className="btn form-control" id="nextBtn">Next</button></NavLink>
                        </div>
                        <div className="col-6">
                            <NavLink to="/" className="form-control cancel">Cancel Payment</NavLink>
                        </div>
                        <div className="col-3">

                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Bill;