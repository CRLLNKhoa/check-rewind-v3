"use client";
import React, { useState, useEffect } from "react";
import Advance from "./Advance";

export default function ChatAI() {
  const [option, setOption] = useState(0);
  return (
    <div className="w-full p-4 bg-slate-900 rounded-lg text-white font-mono duration-1000">
      <h1>Xin chào!</h1>
      <p>Tôi có thể giúp gì cho bạn:</p>
      <ul className="ml-12 list-decimal">
        <li className="hover:text-green-500 hover:underline cursor-pointer duration-500">
          Tính dầu khi leo day
        </li>
        <li className="hover:text-green-500 hover:underline cursor-pointer duration-500">
          Tính day cộng thêm khi đổi vũ khí
        </li>
        <li className="hover:text-green-500 hover:underline cursor-pointer duration-500">
          Tính day khi cộng skill
        </li>
      </ul>
      <div className="border-t mt-4 border-slate-700">
        <CalculateElix />
        <CalculateWb />
        <Advance />
      </div>
    </div>
  );
}

function CalculateElix() {
  const [text, setText] = useState("");

  const [curr, setCurr] = useState(0);
  const [planner, setPlanner] = useState(0);

  function calculateValue(F14, F13) {
    var numerator = Math.floor(
      50 + Math.pow(F14 / 10.6, 2.5 + Math.max(0, F14 - 3000) * 0.0002)
    );
    var denominator = Math.floor(
      50 + Math.pow(F13 / 10.6, 2.5 + Math.max(0, F13 - 3000) * 0.0002)
    );
    setText(
      `Dầu của bạn tăng: ${Math.ceil((numerator / denominator - 1) * 100)}%`
    );
  }

  return (
    <div className="flex flex-col mt-4">
      <p>Tính dầu khi leo day</p>
      <div className="flex flex-wrap">
        <h1 className="mr-2">Bạn đang ở day</h1>
        <input
          onChange={(e) => setCurr(e.target.value)}
          type="number"
          className="border-b bg-transparent outline-none w-[72px] text-center"
        />
        <h1 className="mr-2">, day ban muốn leo</h1>
        <input
          onChange={(e) => setPlanner(e.target.value)}
          type="number"
          className="border-b bg-transparent outline-none w-[72px] text-center"
        />
        <h1
          onClick={() => {
            calculateValue(planner, curr);
          }}
          className="mx-4 text-green-500 cursor-pointer"
        >
          Xác nhận
        </h1>
      </div>
      <div
        className="text-red-500"
        id="outputCalcutelateElix"
      >
        {text}
      </div>
    </div>
  );
}

function CalculateWb() {
  const [text, setText] = useState("");

  const [curr, setCurr] = useState(0);
  const [planner, setPlanner] = useState(0);


  function calculateValue(F14, F13) {
    setText(
      `Day cộng thêm: ${Math.ceil(((planner - curr) / 78.1) * 11)} day`
    );
  }

  return (
    <div className="flex flex-col mt-4 border-t border-slate-700 pt-4">
      <p>Tính day cộng thêm khi đổi vũ khí</p>
      <div className="flex flex-wrap">
        <h1 className="mr-2">Day vũ khí hiện tại</h1>
        <input
          onChange={(e) => setCurr(e.target.value)}
          type="number"
          className="border-b bg-transparent outline-none w-[72px] text-center"
        />
        <h1 className="mr-2">, day vũ khí mới</h1>
        <input
          onChange={(e) => setPlanner(e.target.value)}
          type="number"
          className="border-b bg-transparent outline-none w-[72px] text-center"
        />
        <h1
          onClick={() => {
            calculateValue(planner, curr);
          }}
          className="mx-4 text-green-500 cursor-pointer"
        >
          Xác nhận
        </h1>
      </div>
      <div
        className="text-red-500"
        id="outputCalcutelateWb"
      >{text}</div>
    </div>
  );
}
