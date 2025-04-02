import {  calculateWealthGrowth, formatter } from "../util/investment";

export const Result = ({ input }) => {
  const results = [];
  calculateWealthGrowth(input, results);
  if (results.length === 0) {
    return <p className="items-center">Year duration must be greater than 0.</p>;
  }
 
  return (
    <article className="bg-white mt-6 max-w-[50rem] rounded-lg shadow overflow-hidden">
    <h3 className="text-xl font-bold m-3">Table Result</h3>
      <table className="w-full max-w-[50rem] mx-auto p-4 [border-spacing:5rem] text-right">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-center">Year</th>
            <th className="px-4 py-2 text-center">Total Value</th>
            <th className="px-4 py-2 text-center">Total Invested</th>
            <th className="px-4 py-2 text-center">Yearly Growth</th>
            <th className="px-4 py-2 text-center">Risk Profile</th>

          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.year} className="border-t">
              <td className="px-4 py-2">{result.year}</td>
              <td className="px-4 py-2 text-right">{formatter.format(result.total)}</td>
              <td className="px-4 py-2 text-right">{formatter.format(result.invested)}</td>
              <td className="px-4 py-2 text-right">{formatter.format(result.interest)}</td>
              <td className="px-4 py-2">{result.scenario}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
};