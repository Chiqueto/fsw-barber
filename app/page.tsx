"use client";

import Header from "./_components/header";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Felipe</h2>
        <p>Segunda-feira 05 de agosto.</p>
      </div>
    </div>
  );
}
