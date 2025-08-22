import React, { useState, useEffect } from 'react';
import './App.css';
import { unitCategories, convertUnits } from './units';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('length');
  const [fromUnit, setFromUnit] = useState('meter');
  const [toUnit, setToUnit] = useState('kilometer');
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  useEffect(() => {
    const categoryUnits = Object.keys(unitCategories[selectedCategory].units);
    setFromUnit(categoryUnits[0]);
    setToUnit(categoryUnits[1] || categoryUnits[0]);
    setInputValue('');
    setOutputValue('');
  }, [selectedCategory]);

  useEffect(() => {
    if (inputValue === '' || isNaN(inputValue)) {
      setOutputValue('');
      return;
    }
    
    const result = convertUnits(
      parseFloat(inputValue),
      fromUnit,
      toUnit,
      selectedCategory
    );
    
    setOutputValue(result.toString());
  }, [inputValue, fromUnit, toUnit, selectedCategory]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const swapUnits = () => {
    const tempUnit = fromUnit;
    setFromUnit(toUnit);
    setToUnit(tempUnit);
    setInputValue(outputValue);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Unit Converter</h1>
        <p>Convert between units with precision</p>
      </header>

      <div className="converter">
        <div className="category-selector">
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            {Object.entries(unitCategories).map(([key, category]) => (
              <option key={key} value={key}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="conversion-area">
          <div className="input-group">
            <div className="unit-input">
              <input
                type="number"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter value"
                className="value-input"
              />
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="unit-select"
              >
                {Object.entries(unitCategories[selectedCategory].units).map(([key, unit]) => (
                  <option key={key} value={key}>
                    {unit.name} ({unit.symbol})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="swap-section">
            <button onClick={swapUnits} className="swap-button">
              ⇄
            </button>
          </div>

          <div className="output-group">
            <div className="unit-output">
              <input
                type="text"
                value={outputValue}
                readOnly
                placeholder="Result"
                className="value-output"
              />
              <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                className="unit-select"
              >
                {Object.entries(unitCategories[selectedCategory].units).map(([key, unit]) => (
                  <option key={key} value={key}>
                    {unit.name} ({unit.symbol})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;