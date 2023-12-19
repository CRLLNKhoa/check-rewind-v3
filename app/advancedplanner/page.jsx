"use client";
import React, { useEffect, useState } from "react";
import ChatAI from "./ChatAI";


export default function Page() {
  return (
    <main className="flex bg-white min-h-screen flex-col p-4 gap-4">
      <h1 className="font-bold text-xl text-center mb-4">
        Advanced Planner (coded 30%)
      </h1>
      <ChatAI />
    </main>
  );
}
