"use client"
import React, { useEffect, useState } from "react";

export default function Elix() {
  const [resultElix, setResultElix] = useState();
  const [elix, setElix] = useState({
    from: 0,
    to: 0,
  });

  useEffect(() => {
    calculateValue(elix.to, elix.from);
  }, [elix.from, elix.to]);

  function calculateValue(F14, F13) {
    var numerator = Math.floor(
      50 + Math.pow(F14 / 10.6, 2.5 + Math.max(0, F14 - 3000) * 0.0002)
    );
    var denominator = Math.floor(
      50 + Math.pow(F13 / 10.6, 2.5 + Math.max(0, F13 - 3000) * 0.0002)
    );
    setResultElix(Math.ceil((numerator / denominator - 1) * 100));
  }
  
  return (
    <div className="flex flex-col border p-4">
      <h2 className="font-bold">% dầu tăng</h2>
      <div className="flex flex-wrap gap-2 justify-center mt-2">
        <div>
          <h3>Ngày hiện tại</h3>
          <input
            value={elix.from}
            type="number"
            className="border outline-none border-primary p-1 mt-2 rounded-lg"
            onChange={(e) => setElix({ ...elix, from: Number(e.target.value) })}
          />
        </div>
        <div>
          <h3 className="text-end">Ngày dự kiến</h3>
          <input
            value={elix.to}
            type="number"
            className="border outline-none border-primary p-1 mt-2 rounded-lg"
            onChange={(e) => setElix({ ...elix, to: Number(e.target.value) })}
          />
        </div>
      </div>
      <h1 className="text-center my-2">
        Dầu tăng: <b className="text-red-600">{resultElix}</b> %{" "}
      </h1>
    </div>
  );
}
