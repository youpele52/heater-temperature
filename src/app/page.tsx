import Heater from "./components/HeaterTemperature";

export default function Home() {
  return (
    <main>
      <Heater
        minimumTemperature={10}
        maximumTemperature={120}
        targetTemperature={22}
      />
    </main>
  );
}
