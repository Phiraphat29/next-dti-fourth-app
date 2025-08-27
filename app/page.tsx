import React from "react";
import Image from "next/image";
import bmi from "@/public/bmi.png";
import bmr from "@/public/bmr.png";
import carinstallment from "@/public/car.jpg";
import calculatorIcon from "@/public/calculatorIcon.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="text-center">
        <Image
          src={calculatorIcon}
          alt="logo"
          width={100}
          height={100}
          className="mx-auto"
        />
      </div>
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800 tracking-tight mb-4">
            เครื่องมือคำนวณออนไลน์
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            เลือกเครื่องมือคำนวณที่คุณต้องการใช้งานด้านล่างนี้
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <!-- BMI Card --> */}
          <Link
            href="/bmi"
            className="card p-6 flex flex-col items-center text-center"
          >
            <div className="flex-shrink-0 mb-4">
              <Image src={bmi} alt="BMI" width={96} height={96} />
            </div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              คำนวณค่า BMI
            </h2>
            <p className="text-gray-500">
              คำนวณดัชนีมวลกาย เพื่อประเมินภาวะอ้วนหรือผอม
            </p>
          </Link>

          {/* <!-- BMR Card --> */}
          <Link
            href="/bmr"
            className="card p-6 flex flex-col items-center text-center"
          >
            <div className="flex-shrink-0 mb-4">
              <Image src={bmr} alt="BMR" width={96} height={96} />
            </div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              คำนวณค่า BMR
            </h2>
            <p className="text-gray-500">
              คำนวณอัตราการเผาผลาญพลังงานในร่างกาย
            </p>
          </Link>

          {/* <!-- Car Installment Card --> */}
          <Link
            href="/carinstallment"
            className="card p-6 flex flex-col items-center text-center"
          >
            <div className="flex-shrink-0 mb-4">
              <Image
                src={carinstallment}
                alt="Car Installment"
                width={96}
                height={96}
              />
            </div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              คำนวณค่างวดรถ
            </h2>
            <p className="text-gray-500">
              คำนวณค่างวดรถยนต์รายเดือนอย่างรวดเร็ว
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
