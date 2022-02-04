import React from "react";
import { MortgageCalcStyle } from "../styles/MortgageCalcStyle";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function MortgageCalc() {
  const initialCalcState = {
    homeValue: 0.0,
    downPayment: 0.0,
    loanAmount: 0.0,
    interestRate: 0.0,
    loanTerm: 0.0,
    startDate: 0.0,
    propertyTax: 0.0,
    pmi: 0.0,
    homeInsurance: 0.0,
    monthlyHOA: 0.0,
  };
  const [state, setState] = useState(initialCalcState);
  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    //console.log(`${e.target.name}: ${e.target.value}`);
  };
  const logState = (e) => {
    console.log(state);
  };
  const handleReset = (e) => {
    setState(initialCalcState);
  };
  return (
    <>
      <MortgageCalcStyle>
        <h3>Mortgage Calculator</h3>

        <div className="mortgageCalcContainer">
          <div className="containerRow">
            <label htmlFor="homeValue">Home Value</label>
          </div>
          <div className="containerRow">
            <input
              name="homeValue"
              type="text"
              onChange={handleChange}
              value={state.homeValue}
            />
          </div>
          <div className="containerRow">
            <label htmlFor="downPayment">Down Payment</label>
          </div>
          <div className="containerRow">
            <input
              name="downPayment"
              type="text"
              onChange={handleChange}
              value={state.downPayment}
            />
          </div>
          <div className="containerRow">
            <label htmlFor="loanAmount">Loan Amount</label>
          </div>
          <div className="containerRow">
            <input
              name="loanAmount"
              type="text"
              onChange={handleChange}
              value={state.loanAmount}
            />
          </div>
          <div className="containerRow">
            <label htmlFor="interestRate">Interest Rate</label>
          </div>
          <div className="containerRow">
            <input
              name="interestRate"
              type="text"
              onChange={handleChange}
              value={state.interestRate}
            />
          </div>
          <div className="containerRow">
            <label htmlFor="loanTerm">Loan Term (years)</label>
          </div>
          <div className="containerRow">
            <input
              name="loanTerm"
              type="text"
              onChange={handleChange}
              value={state.loanTerm}
            />
          </div>
          <div className="containerRow">
            <label htmlFor="startDate">Start Date</label>
          </div>
          <div className="containerRow">
            <input
              name="startDate"
              type="date"
              onChange={handleChange}
              value={state.startDate}
            />
          </div>
          <div className="containerRow">
            <label htmlFor="propertyTax">Property Tax</label>
          </div>
          <div className="containerRow">
            <input
              name="propertyTax"
              type="text"
              onChange={handleChange}
              value={state.propertyTax}
            />
          </div>
          <div className="containerRow">
            <label htmlFor="pmi">PMI</label>
          </div>
          <div className="containerRow">
            <input
              name="pmi"
              type="text"
              onChange={handleChange}
              value={state.pmi}
            />
          </div>
          <div className="containerRow">
            <label htmlFor="homeInsurance">Home Insurance</label>
          </div>
          <div className="containerRow">
            <input
              name="homeInsurance"
              type="text"
              onChange={handleChange}
              value={state.homeInsurance}
            />
          </div>
          <div className="containerRow">
            <label htmlFor="monthlyHOA">Monthly HOA</label>
          </div>
          <div className="containerRow">
            <input
              name="monthlyHOA"
              type="text"
              onChange={handleChange}
              value={state.monthlyHOA}
            />
          </div>
          <div className="containerRow">
            <Stack spacing={2} direction="row">
              <Button variant="contained" onClick={logState}>
                Calculate
              </Button>
              <Button variant="contained" onClick={handleReset}>
                Reset
              </Button>
            </Stack>
          </div>
        </div>
      </MortgageCalcStyle>
    </>
  );
}
