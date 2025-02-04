import { useState, useMemo } from "react";
import './tailwind.css';
function App() {
  const [weight, setWeight] = useState(70); 
  const [height, setHeight] = useState(170); 

 
  const bmi = useMemo(() => {
      if (height === 0) return 0;
      const heightInMeters = height / 100;
      return ((weight / (heightInMeters * heightInMeters)).toFixed(2));
  }, [weight, height]); 

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-semibold mb-6 text-center">BMI Hesaplayıcı</h1>
        <div className="mb-4">
          <label htmlFor="weight" className="block text-lg mb-2">Ağırlık (kg): {weight}</label>
          <input
            type="range"
            id="weight"
            min="30"
            max="200"
            step="1"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full h-2 bg-gray-200 rounded-lg"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="height" className="block text-lg mb-2">Boy (cm): {height}</label>
          <input
            type="range"
            id="height"
            min="100"
            max="220"
            step="1"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full h-2 bg-gray-200 rounded-lg"
          />
        </div>
        <div className="text-center">
          <p className="text-xl font-semibold">
            Vücut Kitle İndeksi (BMI): {bmi}
          </p>
          <p className="mt-4 text-sm text-gray-600">
            {bmi < 18.5
              ? 'Zayıf'
              : bmi <= 24.9
              ? 'Normal'
              : bmi <= 29.9
              ? 'Fazla Kilolu'
              : 'Obez'}
          </p>
        </div>
      </div>
    </div>
  );
}



export default App;
