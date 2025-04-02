export const MARKET_SCENARIOS = {
  default: {
    label: "Default",
    returnRate: 0
  },
  conservative: {
    label: "Conservative (4%)",
    returnRate: 4
  },
  moderate: {
    label: "Moderate (7%)",
    returnRate: 7
  },
  aggresive: {
    label: "Aggresive (10%)",
    returnRate: 10
  }
}

export function calculateWealthGrowth(
  { initialInvestment, monthly, years, scenario },
  results
) {
  let total = initialInvestment;
  let totalInvested = initialInvestment;
  const returnRate = MARKET_SCENARIOS[scenario].returnRate;
  
  for (let year = 1; year <= years; year++) {
    const interest = total * (returnRate / 100);
    total += interest + monthly * 12;
    totalInvested += monthly * 12;
    results.push({
      year,
      total: Math.round(total), 
      invested: totalInvested, 
      interest: Math.round(interest),
      scenario: MARKET_SCENARIOS[scenario].label
    });
  }

  return results;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
