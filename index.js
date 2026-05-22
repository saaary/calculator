// Pizza Dough Maturity Calculator App
import React, { useState, useEffect } from 'react';
import './App.css';

function PizzaDoughCalculator() {
  const [flourWeight, setFlourWeight] = useState(1000);
  const [temperature, setTemperature] = useState(24);
  const [hydration, setHydration] = useState(65);
  const [yeastPercentage, setYeastPercentage] = useState(0.3);
  const [salt, setSalt] = useState(2.5);
  const [fermentationHours, setFermentationHours] = useState(48);
  
  // Calculate biga details
  const [results, setResults] = useState({});

  useEffect(() => {
    calculateBiga();
  }, [flourWeight, temperature, hydration, yeastPercentage, salt, fermentationHours]);

  const calculateBiga = () => {
    // Water weight based on hydration percentage
    const waterWeight = (flourWeight * hydration) / 100;
    
    // Yeast weight
    const yeastWeight = (flourWeight * yeastPercentage) / 100;
    
    // Salt weight
    const saltWeight = (flourWeight * salt) / 100;
    
    // Total dough weight
    const totalWeight = flourWeight + waterWeight + yeastWeight + saltWeight;
    
    // Calculate fermentation factor based on temperature
    // Higher temp = faster fermentation
    const tempFactor = (temperature - 18) / 10; // Base 18°C
    const adjustedHours = fermentationHours / Math.max(0.5, tempFactor);
    
    // Maturity score (0-100)
    const maturityScore = Math.min(100, (fermentationHours / 72) * 100);
    
    setResults({
      waterWeight: waterWeight.toFixed(1),
      yeastWeight: yeastWeight.toFixed(1),
      saltWeight: saltWeight.toFixed(1),
      totalWeight: totalWeight.toFixed(1),
      maturityScore: Math.round(maturityScore),
      adjustedHours: adjustedHours.toFixed(1),
      tempFactor: tempFactor.toFixed(2),
    });
  };

  const getMaturityStatus = (score) => {
    if (score < 30) return 'Early Stage';
    if (score < 60) return 'Developing';
    if (score < 85) return 'Ready';
    return 'Optimal';
  };

  const getMaturityColor = (score) => {
    if (score < 30) return '#ef4444';
    if (score < 60) return '#f97316';
    if (score < 85) return '#eab308';
    return '#22c55e';
  };

  return (
    <div className="calculator-container">
      <header className="header">
        <h1>🍕 Pizza Dough Maturity Calculator</h1>
        <p>Calculate perfect Neapolitan Biga fermentation</p>
      </header>

      <div className="content">
        <div className="inputs-section">
          <div className="input-group">
            <label>Flour Weight (g)</label>
            <input
              type="range"
              min="500"
              max="5000"
              step="100"
              value={flourWeight}
              onChange={(e) => setFlourWeight(Number(e.target.value))}
            />
            <span className="input-value">{flourWeight}g</span>
          </div>

          <div className="input-group">
            <label>Temperature (°C)</label>
            <input
              type="range"
              min="15"
              max="30"
              step="0.5"
              value={temperature}
              onChange={(e) => setTemperature(Number(e.target.value))}
            />
            <span className="input-value">{temperature}°C</span>
          </div>

          <div className="input-group">
            <label>Hydration (%)</label>
            <input
              type="range"
              min="55"
              max="75"
              step="1"
              value={hydration}
              onChange={(e) => setHydration(Number(e.target.value))}
            />
            <span className="input-value">{hydration}%</span>
          </div>

          <div className="input-group">
            <label>Yeast (% of flour)</label>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.1"
              value={yeastPercentage}
              onChange={(e) => setYeastPercentage(Number(e.target.value))}
            />
            <span className="input-value">{yeastPercentage}%</span>
          </div>

          <div className="input-group">
            <label>Salt (% of flour)</label>
            <input
              type="range"
              min="1.5"
              max="3.5"
              step="0.1"
              value={salt}
              onChange={(e) => setSalt(Number(e.target.value))}
            />
            <span className="input-value">{salt}%</span>
          </div>

          <div className="input-group">
            <label>Fermentation Hours</label>
            <input
              type="range"
              min="12"
              max="96"
              step="1"
              value={fermentationHours}
              onChange={(e) => setFermentationHours(Number(e.target.value))}
            />
            <span className="input-value">{fermentationHours}h</span>
          </div>
        </div>

        <div className="results-section">
          <div className="maturity-card">
            <div
              className="maturity-circle"
              style={{
                borderColor: getMaturityColor(results.maturityScore || 0),
              }}
            >
              <div className="maturity-content">
                <div className="maturity-score">{results.maturityScore || 0}%</div>
                <div className="maturity-status">
                  {getMaturityStatus(results.maturityScore || 0)}
                </div>
              </div>
            </div>
            <p className="maturity-label">Dough Maturity</p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">{results.waterWeight || 0}g</div>
              <div className="stat-label">Water</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{results.yeastWeight || 0}g</div>
              <div className="stat-label">Yeast</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{results.saltWeight || 0}g</div>
              <div className="stat-label">Salt</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{results.totalWeight || 0}g</div>
              <div className="stat-label">Total Dough</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{results.tempFactor || 0}x</div>
              <div className="stat-label">Temp Factor</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{results.adjustedHours || 0}h</div>
              <div className="stat-label">Adjusted Hours</div>
            </div>
          </div>

          <div className="recommendation-box">
            <h3>Fermentation Tips</h3>
            <ul>
              <li>✓ Maintain steady temperature for consistent results</li>
              <li>✓ Higher temperatures accelerate fermentation</li>
              <li>✓ Lower yeast percentages require longer fermentation</li>
              <li>✓ Check dough at 75% maturity for best flavor development</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PizzaDoughCalculator;
