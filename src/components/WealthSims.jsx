
import { useState } from 'react';
import { formatter } from '../util/investment';

export const SimpleWealthSimulator = () => {
  const [inputs, setInputs] = useState({
    initial: 10000,
    monthly: 500,
    years: 10,
    returnRate: 7,
  });

  const calculateGrowth = () => {
    const results = [];
    let total = inputs.initial;
    let totalInvested = inputs.initial;

    for (let year = 1; year <= inputs.years; year++) {
      const interest = total * (inputs.returnRate / 100);
      total += interest + inputs.monthly * 12;
      totalInvested += inputs.monthly * 12;
      
      results.push({
        year,
        total: Math.round(total),
        invested: totalInvested,
        interest: Math.round(interest),
      });
    }

    return results;
  };

  const results = calculateGrowth();

  return (
    <div className="max-w-[50rem] mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Wealth Accumulation Calculator</h2>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">Initial Investment (Rp)</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={inputs.initial}
              onChange={(e) => setInputs(prev => ({ ...prev, initial: +e.target.value }))}
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-1">Monthly Contribution (Rp)</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={inputs.monthly}
              onChange={(e) => setInputs(prev => ({ ...prev, monthly: +e.target.value }))}
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-1">Investment Years</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={inputs.years}
              onChange={(e) => setInputs(prev => ({ ...prev, years: +e.target.value }))}
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-1">Annual Return (%)</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={inputs.returnRate}
              onChange={(e) => setInputs(prev => ({ ...prev, returnRate: +e.target.value }))}
            />
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Projection Results</h3>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left">Year</th>
                  <th className="px-4 py-2 text-right">Total Value</th>
                  <th className="px-4 py-2 text-right">Total Invested</th>
                  <th className="px-4 py-2 text-right">Yearly Growth</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result) => (
                  <tr key={result.year} className="border-t">
                    <td className="px-4 py-2">{result.year}</td>
                    <td className="px-4 py-2 text-right">{formatter.format(result.total)}</td>
                    <td className="px-4 py-2 text-right">{formatter.format(result.invested)}</td>
                    <td className="px-4 py-2 text-right">{formatter.format(result.interest)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};