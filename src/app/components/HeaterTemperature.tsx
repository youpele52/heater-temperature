import React from "react";
import "./heaterTemperature.css";

interface HeaterTemperatureProps {
  minimumTemperature: number;
  maximumTemperature: number;
  targetTemperature: number;
}

export default function HeaterTemperature({
  minimumTemperature,
  maximumTemperature,
  targetTemperature,
}: HeaterTemperatureProps) {
  const calculateRotation = (value: number) => {
    const totalRange = maximumTemperature - minimumTemperature;
    const rotationPercentage = (value - minimumTemperature) / totalRange;
    return rotationPercentage * 360;
  };

  const minRotation = calculateRotation(minimumTemperature);
  const maxRotation = calculateRotation(maximumTemperature);
  const targetRotation = calculateRotation(targetTemperature);

  return (
    <figure>
      <div className="clock">
        <div className="minimum-temperature  temperature-line"></div>
        <div className="maximum-temperature  temperature-line"></div>
        <div
          className="target-temperature temperature-line"
          style={{ transform: `rotate(${targetRotation}deg)` }}
        ></div>
      </div>
      <div className="target-temperature-outside-circle">
        {targetTemperature} °C
      </div>
    </figure>
  );
}
