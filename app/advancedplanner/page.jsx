"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { donvi } from "@/api/donvi";
import Elix from "./Elix";
import Wb from "./Wb";
import Advance from "./Advance";
import ChatAI from "./ChatAI";

function getExponentialPart(str) {
  const indexE = str.indexOf("e");
  if (indexE !== -1) {
    // Nếu "e" được tìm thấy trong chuỗi
    console.log("debug",donvi.find((item) => item.value === Number(1 + str.substring(indexE)))?.key)
    return donvi.find((item) => item.value === Number(1 + str.substring(indexE)))?.key;
    // Hoặc sử dụng slice: return str.slice(indexE);
  } else {
    // Nếu "e" không được tìm thấy
    return "";
  }
}

function calculateExpression(G5, J5, H5) {
  const result = Math.ceil(Math.log10(Math.pow(G5, (Math.floor(Math.log10(J5)) - Math.floor(Math.log10(H5)))) * (J5 / H5)) / Math.log10(1.065));
  return result;
}



export default function Page() {
  const [up, setUp] = useState({
    from: 0,
    dvfrom: 0,
    dvto: 0,
    to: 0,
    milestone: 0,
  });
  const [upRS, setUpRS] = useState({
    em: 0,
    day: 0,
  });

  useEffect(
    () => {
      setUpRS({
        ...upRS,
        em:
          ((up.to * up.dvto - up.from * up.dvfrom) / 2) *
            (up.from * up.dvfrom * 2 + (up.to * up.dvto * 2 - 2)) ===
          0
            ? 0
            : (
                (((up.to * up.dvto - up.from * up.dvfrom) / 2) *
                  (up.from * up.dvfrom * 2 + (up.to * up.dvto * 2 - 2))) /
                Math.pow(
                  10,
                  Math.floor(
                    Math.log10(
                      ((up.to * up.dvto - up.from * up.dvfrom) / 2) *
                        (up.from * up.dvfrom * 2 + (up.to * up.dvto * 2 - 2))
                    )
                  )
                )
              ).toFixed(2),
      });
    },
    [up.from, up.to],
    up.dvfrom,
    up.dvto
  );

  const [inh, setInh] = useState({
    from: 0,
    dvfrom: 0,
    dvto: 0,
    to: 0,
    milestone: 0,
  });
  const [inhRS, setInhRS] = useState({
    em: 0,
    day: 0,
  });

  useEffect(
    () => {
      setInhRS({
        ...inhRS,
        em:
          ((inh.to * inh.dvto - inh.from * inh.dvfrom) / 2) *
            (inh.from * inh.dvfrom * 2 + (inh.to * inh.dvto * 2 - 2)) ===
          0
            ? 0
            : (
                (((inh.to * inh.dvto - inh.from * inh.dvfrom) / 2) *
                  (inh.from * inh.dvfrom * 2 + (inh.to * inh.dvto * 2 - 2))) /
                Math.pow(
                  10,
                  Math.floor(
                    Math.log10(
                      ((inh.to * inh.dvto - inh.from * inh.dvfrom) / 2) *
                        (inh.from * inh.dvfrom * 2 + (inh.to * inh.dvto * 2 - 2))
                    )
                  )
                )
              ).toFixed(2),
      });
    },
    [inh.from, inh.to],
    inh.dvfrom,
    inh.dvto
  );

  return (
    <main className="flex bg-white min-h-screen flex-col p-4 gap-4">
      <h1 className="font-bold text-xl text-center mb-4">
        Advanced Planner (beta)
      </h1>
      <ChatAI />
    </main>
  );
}
