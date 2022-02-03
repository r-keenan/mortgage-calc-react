import React from "react";
import { MortgageCalcStyle } from "../styles/MortgageCalcStyle";

export default function MortgageCalc() {
  return (
    <>
      <MortgageCalcStyle>
        <h3>Mortgage Calculator</h3>

        <div class="mortgageCalcContainer">
          <div class="containerRow">
            <label for="homeValue">Home Value</label>
          </div>
          <div class="containerRow">
            <input name="homeValue" type="text" />
          </div>
          <div class="containerRow">
            <label for="downPayment">Down Payment</label>
          </div>
          <div class="containerRow">
            <input name="downPayment" type="text" />
          </div>
          <div class="containerRow">
            <label for="loanAmount">Loan Payment</label>
          </div>
          <div class="containerRow">
            <input name="loanAmount" type="text" />
          </div>
          <div class="containerRow">
            <label for="interestRate">Interest Rate</label>
          </div>
          <div class="containerRow">
            <input name="interestRate" type="text" />
          </div>
          <div class="containerRow">
            <label for="loanTerm">Loan Term (years)</label>
          </div>
          <div class="containerRow">
            <input name="loanTerm" type="text" />
          </div>
          <div class="containerRow">
            <label for="startDate">Start Date</label>
          </div>
          <div class="containerRow">
            <input name="startDate" type="text" />
          </div>
          <div class="containerRow">
            <label for="propertyTax">Property Tax</label>
          </div>
          <div class="containerRow">
            <input name="propertyTax" type="text" />
          </div>
          <div class="containerRow">
            <label for="pmi">PMI</label>
          </div>
          <div class="containerRow">
            <input name="pmi" type="text" />
          </div>
          <div class="containerRow">
            <label for="homeInsurance">Home Insurance</label>
          </div>
          <div class="containerRow">
            <input name="homeInsurance" type="text" />
          </div>
          <div class="containerRow">
            <label for="monthlyHOA">Monthly HOA</label>
          </div>
          <div class="containerRow">
            <input name="monthlyHOA" type="text" />
          </div>
        </div>
      </MortgageCalcStyle>
    </>
  );
}
