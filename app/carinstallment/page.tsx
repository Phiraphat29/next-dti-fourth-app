"use client";

import React from "react";
import Image from "next/image";
import carinstallment from "@/public/car.jpg";

export default function page() {
  return (
    <div className="bg-[#f0f4f8] flex justify-center items-center min-h-screen p-8 w-full">
      <div className="bg-white rounded-[1.5rem] shadow-xl p-10 max-w-[450px] w-full text-center">
        {/* <!-- Main title --> */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">คำนวณราคารถ</h1>
        {/* <!-- Subtitle --> */}
        <p className="text-gray-500 mb-6">คำนวณราคารถยนต์</p>

        {/* <!-- Image --> */}
        <div className="mb-8 flex justify-center">
          <Image
            src={carinstallment}
            alt="Car Installment"
            width={100}
            height={100}
          />
        </div>

        {/* <!-- User Input --> */}
        <div className="mb-6 text-left">
          <label
            htmlFor="weight"
            className="block text-gray-700 font-semibold mb-2"
          >
            ป้อนชื่อผู้คำนวณ
          </label>
          <input
            type="text"
            id="weight"
            placeholder="กรอกชื่อ"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 outline-none"
          />
        </div>

        {/* <!-- Car Price Input --> */}
        <div className="mb-6 text-left">
          <label
            htmlFor="height"
            className="block text-gray-700 font-semibold mb-2"
          >
            ราคารถ (บาท)
          </label>
          <input
            type="number"
            id="height"
            placeholder="กรอกราคารถ"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 outline-none"
          />
        </div>

        {/* <!-- Interest Rate Input --> */}
        <div className="mb-6 text-left">
          <label
            htmlFor="age"
            className="block text-gray-700 font-semibold mb-2"
          >
            ดอกเบี้ยต่อปี (%)
          </label>
          <input
            type="number"
            id="age"
            placeholder="กรอกดอกเบี้ย"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 outline-none"
          />
        </div>

        {/* <!-- Down Payment Input --> */}
        <div className="mb-6 text-left">
          <label
            htmlFor="gender"
            className="block text-gray-700 font-semibold mb-2"
          >
            เงินดาวน์ (%)
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="downpayment"
                value="10"
                className="mr-2"
              />
              15%
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="downpayment"
                value="20"
                className="mr-2"
              />
              20%
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="downpayment"
                value="25"
                className="mr-2"
              />
              25%
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="downpayment"
                value="30"
                className="mr-2"
              />
              30%
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="downpayment"
                value="35"
                className="mr-2"
              />
              35%
            </label>
          </div>
        </div>

        {/* <!-- Loan Installment Dropdown --> */}
        <div className="mb-6 text-left">
          <label
            htmlFor="loaninstallment"
            className="block text-gray-700 font-semibold mb-2"
          >
            จำนวนเดือนที่ผ่อน
          </label>
          <select
            id="loaninstallment"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 outline-none"
          >
            <option value="12">12 เดือน</option>
            <option value="24">24 เดือน</option>
            <option value="36">36 เดือน</option>
            <option value="48">48 เดือน</option>
            <option value="60">60 เดือน</option>
          </select>
        </div>

        {/* <!-- Buttons --> */}
        <div className="flex gap-4 justify-center mt-8 md:flex-row flex-col">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 w-full">
            คำนวณ BMR
          </button>
          <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 w-full">
            รีเซ็ต
          </button>
        </div>

        {/* <!-- Result text --> */}
        <p className="text-lg font-semibold text-gray-700 mt-6">
          ยอดผ่อนชำระต่อเดือน:{" "}
          <span id="result" className="text-blue-600 font-bold">
            0.00
          </span>
        </p>
      </div>
    </div>
  );
}
