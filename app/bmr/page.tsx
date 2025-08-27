"use client";

import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="bg-[#f0f4f8] flex justify-center items-center min-h-screen p-8 w-full">
      <div className="bg-white rounded-[1.5rem] shadow-xl p-10 max-w-[450px] w-full text-center">
        {/* <!-- Main title --> */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">คำนวณ BMR</h1>
        {/* <!-- Subtitle --> */}
        <p className="text-gray-500 mb-6">คำนวณอัตราการเผาผลาญพลังงาน</p>

        {/* <!-- Image --> */}
        <div className="mb-8 flex justify-center">
          <Image src="/bmr.png" alt="BMR" width={100} height={100} />
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
          />
        </div>

        {/* <!-- Age Input --> */}
        <div className="mb-6 text-left">
          <label
            htmlFor="age"
            className="block text-gray-700 font-semibold mb-2"
          >
            ป้อนอายุ (ปี)
          </label>
          <input
            type="number"
            id="age"
            placeholder="เช่น 25"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 outline-none"
          />
        </div>

        {/* <!-- Gender Radio --> */}
        <div className="mb-6 text-left">
          <label
            htmlFor="gender"
            className="block text-gray-700 font-semibold mb-2"
          >
            เพศ
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input type="radio" name="gender" value="male" className="mr-2" />
              ชาย
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                className="mr-2"
              />
              หญิง
            </label>
          </div>
        </div>

        {/* <!-- Buttons --> */}
        <div className="gap-4 justify-center mt-8 md:flex-row flex-col">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 mb-4 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 w-full">
            คำนวณ BMR
          </button>
          <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 w-full">
            รีเซ็ต
          </button>
        </div>

        {/* <!-- Result text --> */}
        <p className="text-lg font-semibold text-gray-700 mt-6">
          ค่า BMR ที่คำนวณได้:{" "}
          <span id="result" className="text-blue-600 font-bold">
            0.00
          </span>
        </p>
      </div>
    </div>
  );
}
