import { calculateInvestmentResults, formatter } from "../util/investment";

const Result = ({ input }) => {
  const results = [];
  calculateInvestmentResults(input, results);
  if (results.length === 0) {
    return <p>Invalid input data provided.</p>;
  }
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value </th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((res, i) => {
          const totalInterest =
            res.valueEndOfYear -
            res.annualInvestment * res.year -
            initialInvestment;
          const totalAmountInvested = res.valueEndOfYear - totalInterest;
          return (
            <tr key={res.year}>
              <td>{res.year}</td>
              <td>{formatter.format(res.valueEndOfYear)}</td>
              <td>{formatter.format(res.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Result;
