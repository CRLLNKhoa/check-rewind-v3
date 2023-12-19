"use client";
import React, { useEffect, useState } from "react";
import Upcalculate from "./Upcalculate";
import Incalculate from "./Incalculate";
import Bdcalculate from "./Bdcalculate";
import Hlcalculate from "./Hlcalculate";
import Mscalculate from "./Mscalculate";
import Bscalculate from "./Bscalculate";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { donvi } from "@/api/donvi";

export default function Advance() {
  const [extra, setextra] = useState(1);
  const [totalElix, setTotalElix] = useState({
    up: 0,
    in: 0,
    bd: 0,
    hl: 0,
    ms: 0,
    bs: 0,
  });
  const [wt, setWt] = useState(true);
  const [milestone, setMilestone] = useState({
    up: 3,
    in: 3,
    bd: 2,
    hl: 2,
    ms: 3,
    bs: 3,
  });

  useEffect(() => {
    if (!wt) {
      setMilestone({
        up: 2,
        in: 2,
        bd: 2,
        hl: 2,
        ms: 3,
        bs: 3,
      });
    } else
      setMilestone({
        up: 3,
        in: 3,
        bd: 2,
        hl: 2,
        ms: 3,
        bs: 3,
      });
  }, [wt]);

  const [ketQuaTotal, setKetQuaTotal] = useState(null);

  return (
    <div className="border-t border-slate-700 mt-4 pt-4">
      <h1>Tính day khi cộng skill</h1>
      <div className="flex flex-wrap my-4 items-center gap-4">
        <p>Bạn đã mở Wolrd Tree chưa:</p>
        <Button
          onClick={() => setWt(false)}
          variant="outline"
          className={cn("bg-transparent px-8", !wt && "bg-white text-black")}
          size="sm"
        >
          Chưa mở
        </Button>
        <Button
          onClick={() => setWt(true)}
          variant="outline"
          className={cn("bg-transparent px-8", wt && "bg-white text-black")}
          size="sm"
        >
          Đã mở
        </Button>
      </div>
      <span>Extra HL Milestones</span>
      {wt && (
        <div className="flex gap-4">
          <span>
            [<b className="text-yellow-500">3</b>]: level TE + 2
          </span>
          <span>,</span>
          <span>
            [<b className="text-green-500">3</b>]: level IN + 2
          </span>
        </div>
      )}
      <div className="flex flex-col mt-4 gap-4">
        <Upcalculate
          wt={wt}
          get={totalElix}
          set={setTotalElix}
          getMilestone={milestone}
          setMilestone={setMilestone}
        />
        <Incalculate
          wt={wt}
          get={totalElix}
          set={setTotalElix}
          getMilestone={milestone}
          setMilestone={setMilestone}
        />
        <Bdcalculate
          wt={wt}
          get={totalElix}
          set={setTotalElix}
          getMilestone={milestone}
          setMilestone={setMilestone}
        />
        <Hlcalculate
          wt={wt}
          get={totalElix}
          set={setTotalElix}
          getMilestone={milestone}
          setMilestone={setMilestone}
          extra={extra}
        />
        <Mscalculate
          wt={wt}
          get={totalElix}
          set={setTotalElix}
          getMilestone={milestone}
          setMilestone={setMilestone}
        />
        <Bscalculate
          wt={wt}
          get={totalElix}
          set={setTotalElix}
          getMilestone={milestone}
          setMilestone={setMilestone}
        />
      </div>
      <div className="flex justify-between items-center py-4 ">
        <div className="flex gap-2 items-center">
          <label htmlFor="extra">Extra HL Milestones</label>
          <input
            value={1}
            id="extra"
            type="number"
            className="bg-transparent border-b w-[52px] text-center outline-none"
            onChange={(e) => setextra(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
