import { useState } from "react";
import { MARKET_SCENARIOS } from "../util/investment";

export const UserInput = ({ userInput, onChange }) => {
  const [errors, setErrors] = useState({});

  const validateInput = (field, value) => {
    let errorMsg = "";
    if (isNaN(value)) {
      errorMsg = "Value must be a number";
    } else if (value < 0) {
      errorMsg = "Must be not negative";
    }
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const handleChange = (field, value) => {
    validateInput(field, value);
    onChange(field, value);
  };

  return (
    <form className="grid grid-cols-2 gap-4">
      {/* Initial Investment */}
      <div>
        <label className="block text-gray-700 mb-1">
          Initial Investment (Rp)
        </label>
        <input
          type="number"
          className={`w-full p-2 border rounded ${
            errors.initialInvestment ? "border-red-500" : "border-gray-300"
          }`}
          value={userInput.initialInvestment}
          onChange={(e) => handleChange("initialInvestment", +e.target.value)}
        />
        {errors.initialInvestment && (
          <p className="text-red-500 text-sm mt-1">
            {errors.initialInvestment}
          </p>
        )}
      </div>

      {/* Monthly Contribution */}
      <div>
        <label className="block text-gray-700 mb-1">
          Monthly Contribution (Rp)
        </label>
        <input
          type="number"
          className={`w-full p-2 border rounded ${
            errors.monthly ? "border-red-500" : "border-gray-300"
          }`}
          value={userInput.monthly}
          onChange={(e) => handleChange("monthly", +e.target.value)}
        />
        {errors.monthly && (
          <p className="text-red-500 text-sm mt-1">{errors.monthly}</p>
        )}
      </div>

      {/* Investment Years */}
      <div>
        <label className="block text-gray-700 mb-1">Investment Years</label>
        <input
          type="number"
          className={`w-full p-2 border rounded ${
            errors.years ? "border-red-500" : "border-gray-300"
          }`}
          value={userInput.years}
          onChange={(e) => handleChange("years", +e.target.value)}
        />
        {errors.years && (
          <p className="text-red-500 text-sm mt-1">{errors.years}</p>
        )}
      </div>

      {/* Market Scenario */}
      <div>
        <label className="block text-gray-700 mb-1">Market Scenario:</label>
        <select
          value={userInput.scenario}
          onChange={(e) => handleChange("scenario", e.target.value)}
          className="w-full p-2 border rounded"
        >
          {Object.entries(MARKET_SCENARIOS).map(([key, { label }]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
