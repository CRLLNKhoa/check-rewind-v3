"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { doubleCost } from "@/api/doubleCost";

export default function Home() {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [input, setInput] = useState({
    curr: 0,
    expected: 0,
  });
  const handleSearch = () => {
    setFrom(input.curr);
    setTo(input.expected);
  };
  const [sort, setsort] = useState(false);
  return (
    <main className="flex bg-white min-h-screen flex-col items-center p-4">
      <div className="flex flex-col p-4 justify-center items-center">
        <h1 className="text-xl font-bold">Quick Double Rewind</h1>
        <p className="mb-4">The lower the cost, the faster the rewind time</p>
        <div className="flex gap-2 select-none">
          <div className="flex border-2 rounded-xl overflow-hidden border-primary p-2">
            <input
              className="h-[28px] w-[140px] text-primary font-bold outline-none"
              type="number"
              placeholder="Day current"
              onChange={(e) => setInput({ ...input, curr: e.target.value })}
            />
            <span className="bg-slate-100 px-4">TO</span>
            <input
              className="h-[28px] w-[140px] text-primary font-bold text-right outline-none pl-2"
              type="number"
              placeholder="Expected day"
              onChange={(e) => setInput({ ...input, expected: e.target.value })}
            />
          </div>
        </div>
        <div className="flex gap-2 my-4">
          <Button
            size="sm"
            className="w-[120px]"
            onClick={handleSearch}
          >
            <img
              src="/search.svg"
              alt=""
              className="w-5 mr-2"
            />
            Search
          </Button>

          {!sort ? (
            <Button
              size="sm"
              className="w-[80px]"
              onClick={() => setsort(!sort)}
            >
              <img
                src="/up.svg"
                alt=""
                className="w-5 mr-2"
              />
              Sort
            </Button>
          ) : (
            <Button
              size="sm"
              className="w-[80px]"
              onClick={() => setsort(!sort)}
            >
              <img
                src="/down.svg"
                alt=""
                className="w-5 mr-2"
              />
              Sort
            </Button>
          )}
        </div>
      </div>
      <Table>
        <TableHeader className="bg-sky-500">
          <TableRow>
            <TableHead className="text-center text-white">Day</TableHead>
            <TableHead className="text-center text-white">Skip</TableHead>
            <TableHead className="text-center text-white">Tickets</TableHead>
            <TableHead className="text-center text-white">Cost</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sort
            ? doubleCost
                .filter(
                  (filtered) => from <= filtered.day && filtered.day <= to
                )
                .sort((a, b) => a.cost - b.cost)
                .map((item) => {
                  const bg = (cost) => {
                    if (cost > 200 && cost < 300) {
                      return "bg-lime-400";
                    }
                    if (cost < 400 && cost >= 300) {
                      return "bg-lime-500";
                    }
                    if (cost < 450 && cost >= 400) {
                      return "bg-lime-600";
                    }
                    if (cost < 500 && cost >= 450) {
                      return "bg-red-700";
                    }
                    if (cost < 550 && cost >= 500) {
                      return "bg-red-800";
                    }
                    if (cost < 600 && cost >= 550) {
                      return "bg-red-900";
                    }
                    if (cost < 700 && cost >= 600) {
                      return "bg-red-900";
                    }
                  };
                  return (
                    <TableRow
                      className={`text-black ${bg(item.cost)} p-2 text-center`}
                      key={item.day}
                    >
                      <TableCell className="font-medium">{item.day}</TableCell>
                      <TableCell>{item.skip}</TableCell>
                      <TableCell>{Math.floor(item.tickets)}</TableCell>
                      <TableCell>{Math.floor(item.cost)}</TableCell>
                    </TableRow>
                  );
                })
            : doubleCost
                .filter(
                  (filtered) => from <= filtered.day && filtered.day <= to
                )
                .map((item) => {
                  const bg = (cost) => {
                    if (cost > 200 && cost < 300) {
                      return "bg-lime-400";
                    }
                    if (cost < 400 && cost >= 300) {
                      return "bg-lime-500";
                    }
                    if (cost < 450 && cost >= 400) {
                      return "bg-lime-600";
                    }
                    if (cost < 500 && cost >= 450) {
                      return "bg-red-700";
                    }
                    if (cost < 550 && cost >= 500) {
                      return "bg-red-800";
                    }
                    if (cost < 600 && cost >= 550) {
                      return "bg-red-900";
                    }
                    if (cost < 700 && cost >= 600) {
                      return "bg-red-900";
                    }
                  };
                  return (
                    <TableRow
                      className={`text-black ${bg(item.cost)} p-2 text-center`}
                      key={item.day}
                    >
                      <TableCell className="font-medium">{item.day}</TableCell>
                      <TableCell>{item.skip}</TableCell>
                      <TableCell>{Math.floor(item.tickets)}</TableCell>
                      <TableCell>{Math.floor(item.cost)}</TableCell>
                    </TableRow>
                  );
                })}
        </TableBody>
      </Table>
      {!from && !to && (
        <div className="flex items-center justify-center p-6">Enter Day &gt; 2000</div>
      )}
    </main>
  );
}
