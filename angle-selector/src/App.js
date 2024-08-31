import React, { useState } from 'react';
import './App.css';

function App() {
    const [angle, setAngle] = useState(0);

    const handleInputChange = (e) => {
        let value = Math.max(0, Math.min(360, parseInt(e.target.value)));
        setAngle(value);
    };

    const handleSliderChange = (e) => {
        setAngle(parseInt(e.target.value));
    };

    const handleRadioChange = (e) => {
        setAngle(parseInt(e.target.value));
    };

    return (
        <div className="container">
            <input
                type="number"
                value={angle}
                min="0"
                max="360"
                onChange={handleInputChange}
                className="controls"
            />
            <input
                type="range"
                min="0"
                max="360"
                value={angle}
                onChange={handleSliderChange}
                className="slider"
            />
            <div className="radio-buttons">
                {[0, 45, 60, 90, 180].map(value => (
                    <label key={value}>
                        <input
                            type="radio"
                            name="angle"
                            value={value}
                            checked={angle === value}
                            onChange={handleRadioChange}
                        />
                        {value}
                    </label>
                ))}
            </div>
        </div>
    );
}

export default App;
