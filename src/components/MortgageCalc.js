import React from "react";
import { MortgageCalcStyle } from "../styles/MortgageCalcStyle";
import { useState } from "react";

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
  return (
    <>
      <MortgageCalcStyle>
        <h3>Mortgage Calculator</h3>

        <div class="mortgageCalcContainer">
          <div class="containerRow">
            <label for="homeValue">Home Value</label>
          </div>
          <div class="containerRow">
            <input
              name="homeValue"
              type="text"
              onChange={handleChange}
              value={state.homeValue}
            />
          </div>
          <div class="containerRow">
            <label for="downPayment">Down Payment</label>
          </div>
          <div class="containerRow">
            <input
              name="downPayment"
              type="text"
              onChange={handleChange}
              value={state.downPayment}
            />
          </div>
          <div class="containerRow">
            <label for="loanAmount">Loan Payment</label>
          </div>
          <div class="containerRow">
            <input
              name="loanAmount"
              type="text"
              onChange={handleChange}
              value={state.loanAmount}
            />
          </div>
          <div class="containerRow">
            <label for="interestRate">Interest Rate</label>
          </div>
          <div class="containerRow">
            <input
              name="interestRate"
              type="text"
              onChange={handleChange}
              value={state.interestRate}
            />
          </div>
          <div class="containerRow">
            <label for="loanTerm">Loan Term (years)</label>
          </div>
          <div class="containerRow">
            <input
              name="loanTerm"
              type="text"
              onChange={handleChange}
              value={state.loanTerm}
            />
          </div>
          <div class="containerRow">
            <label for="startDate">Start Date</label>
          </div>
          <div class="containerRow">
            <input
              name="startDate"
              type="text"
              onChange={handleChange}
              value={state.startDate}
            />
          </div>
          <div class="containerRow">
            <label for="propertyTax">Property Tax</label>
          </div>
          <div class="containerRow">
            <input
              name="propertyTax"
              type="text"
              onChange={handleChange}
              value={state.propertyTax}
            />
          </div>
          <div class="containerRow">
            <label for="pmi">PMI</label>
          </div>
          <div class="containerRow">
            <input
              name="pmi"
              type="text"
              onChange={handleChange}
              value={state.pmi}
            />
          </div>
          <div class="containerRow">
            <label for="homeInsurance">Home Insurance</label>
          </div>
          <div class="containerRow">
            <input
              name="homeInsurance"
              type="text"
              onChange={handleChange}
              value={state.homeInsurance}
            />
          </div>
          <div class="containerRow">
            <label for="monthlyHOA">Monthly HOA</label>
          </div>
          <div class="containerRow">
            <input
              name="monthlyHOA"
              type="text"
              onChange={handleChange}
              value={state.monthlyHOA}
            />
          </div>
        </div>
      </MortgageCalcStyle>
    </>
  );
}
