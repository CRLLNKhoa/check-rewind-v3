"use client";
import React, { useState } from "react";
import { time } from "@/api/time";

export default function Page() {
  const [tab, settab] = useState(1);
  const [num, setNum] = useState({ from: 0, to: 74 });
  return (
    <section className="min-h-screen mx-2 bg-white p-4 rounded-lg">
        <h1 className="text-center text-xl font-bold">Time Rewind</h1>
      <p className="mb-4 text-center text-muted-foreground">
        The data provided by players is therefore incomplete and not highly
        accurate.
      </p>
      <div className="flex justify-evenly gap-2 flex-wrap bg-white">
        <a
          onClick={() => {
            settab(1);
            setNum({ from: 0, to: 74 });
          }}
          className={tab === 1 ? " bg-sky-500 p-2 text-white font-bold cursor-pointer" : "font-bold cursor-pointer bg-slate-100 p-2 rounded-lg"}
        >
          1000
        </a>
        <a
          onClick={() => {
            settab(2);
            setNum({ from: 75, to: 135 });
          }}
          className={tab === 2 ? " bg-sky-500 p-2 text-white font-bold cursor-pointer" : "font-bold cursor-pointer bg-slate-100 p-2 rounded-lg"}
        >
          1500
        </a>
        <a
          onClick={() => {
            settab(3);
            setNum({ from: 136, to: 159 });
          }}
          className={tab === 3 ? " bg-sky-500 p-2 text-white font-bold cursor-pointer" : "font-bold cursor-pointer bg-slate-100 p-2 rounded-lg"}
        >
          2000
        </a>
        <a
          onClick={() => {
            settab(4);
            setNum({ from: 160, to: 228 });
          }}
          className={tab === 4 ? " bg-sky-500 p-2 text-white font-bold cursor-pointer" : "font-bold cursor-pointer bg-slate-100 p-2 rounded-lg"}
        >
          3000
        </a>
        <a
          onClick={() => {
            settab(5);
            setNum({ from: 229, to: 280 });
          }}
          className={tab === 5 ? " bg-sky-500 p-2 text-white font-bold cursor-pointer" : "font-bold cursor-pointer bg-slate-100 p-2 rounded-lg"}
        >
          5000
        </a>
        <a
          onClick={() => {
            settab(6);
            setNum({ from: 281, to: 317 });
          }}
          className={tab === 6 ? " bg-sky-500 p-2 text-white font-bold cursor-pointer" : "font-bold cursor-pointer bg-slate-100 p-2 rounded-lg"}
        >
          8000
        </a>
        <a
          onClick={() => {
            settab(7);
            setNum({ from: 318, to: 369 });
          }}
          className={tab === 7 ? " bg-sky-500 p-2 text-white font-bold cursor-pointer" : "font-bold cursor-pointer bg-slate-100 p-2 rounded-lg"}
        >
          10000
        </a>
        <a
          onClick={() => {
            settab(8);
            setNum({ from: 370, to: 9000 });
          }}
          className={tab === 8 ? " bg-sky-500 p-2 text-white font-bold cursor-pointer" : "font-bold cursor-pointer bg-slate-100 p-2 rounded-lg"}
        >
          11600
        </a>
      </div>

      <div>
        <div className="flex flex-col w-full gap-2 mt-4">
          {time.map((item, index) => {
            if (index >= num.from && index <= num.to) {
              return (
                <div
                  key={index}
                  className="cursor-pointer hover:bg-lime-300 h-10 odd:bg-red-300 even:bg-sky-300 rounded-sm justify-center flex items-center gap-4"
                >
                  <span className="font-bold">Day: {item.Day}</span>{" "}
                  <span>--- </span>
                  <span className="">
                    The average time: <b>{item.Time}</b>
                  </span>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
