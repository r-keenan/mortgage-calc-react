import styled from "styled-components";

export const MortgageCalcStyle = styled.div`
  label {
    padding-right: 0.75rem;
    text-align: left;
  }

  h3 {
    margin-left: 10%;
  }
  .mortgageCalcContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
    padding-left: 20px;
    place-self: center;
    column-gap: 30px;
    width: 40%;
  }

  .containerRow {
    margin-bottom: 0.75rem;
  }
`;
