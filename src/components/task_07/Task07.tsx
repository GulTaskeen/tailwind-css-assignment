"use client";
import React from "react";
import { useState } from "react";

function Task07() {
  const [email, setEmail] = useState("");
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(`Email submitted: ${email}`);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-3 text-zinc-800 rounded-l-lg border border-l-zinc-400 border-t-zinc-400 border-b-zinc-400 focus:border-l-teal-400 focus:border-t-teal-400 focus:border-b-teal-400 active:border-red-700"
        style={{ width: "300px" }}
      />
      <input
        type="submit"
        value="Subscribe"
        className="py-3 px-8 rounded-r-lg border border-zinc-400 bg-teal-700"
      />
    </form>
  );
}

export default Task07;
