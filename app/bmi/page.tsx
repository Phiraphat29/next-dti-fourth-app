"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [result, setResult] = useState("");

  const handlerCalculate = () => {
    // Validate Input
    if (
      !weight ||
      !height ||
      parseFloat(weight) <= 0 ||
      parseFloat(height) <= 0
    ) {
      alert("กรุณาระบุข้อมูลให้ถูกต้อง และต้องมากกว่า 0");
      return;
    }
    // Calculate BMI (convert height from cm to meters)
    const heightInMeters = Number(height) / 100;
    const bmiValue = Number(weight) / (heightInMeters * heightInMeters);
    const bmiFormatted = bmiValue.toFixed(2);
    setBmi(bmiFormatted);
    setResult("ค่า BMI ที่คำนวณได้: " + bmiFormatted);
  };

  const handlerReset = () => {
    setWeight("");
    setHeight("");
    setBmi("");
    setResult("");
  };
  return (
    <div className="bg-[#f0f4f8] flex justify-center items-center min-h-screen p-8 w-full">
      <div className="bg-white rounded-[1.5rem] shadow-xl p-10 max-w-[450px] w-full text-center">
        {/* <!-- Main title --> */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">คำนวณ BMI</h1>
        {/* <!-- Subtitle --> */}
        <p className="text-gray-500 mb-6">คำนวณดัชนีมวลกาย</p>

        {/* <!-- Image --> */}
        <div className="mb-8 flex justify-center">
          <Image src="/bmi.png" alt="BMI" width={100} height={100} />
        </div>

        {/* <!-- Weight Input --> */}
        <div className="mb-6 text-left">
          <label
            htmlFor="weight"
            className="block text-gray-700 font-semibold mb-2"
          >
            ป้อนน้ำหนัก (กิโลกรัม)
          </label>
          <input
            type="number"
            id="weight"
            placeholder="เช่น 65"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 outline-none"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        {/* <!-- Height Input --> */}
        <div className="mb-6 text-left">
          <label
            htmlFor="height"
            className="block text-gray-700 font-semibold mb-2"
          >
            ป้อนส่วนสูง (เซนติเมตร)
          </label>
          <input
            type="number"
            id="height"
            placeholder="เช่น 170"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 outline-none"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        {/* <!-- Buttons --> */}
        <div className="gap-4 justify-center mt-8 md:flex-row flex-col">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 mb-4 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 w-full"
            onClick={() => {
              handlerCalculate();
            }}
          >
            คำนวณ BMI
          </button>
          <button
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-6 mb-4 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 w-full"
            onClick={() => {
              handlerReset();
            }}
          >
            รีเซ็ต
          </button>
        </div>

        {/* <!-- Result text --> */}
        <p className="text-lg font-semibold text-blue-700 mt-6">{result}</p>
      </div>
    </div>
  );
}
