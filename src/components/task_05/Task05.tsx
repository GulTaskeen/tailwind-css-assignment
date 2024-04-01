import React from "react";
import QA_Tile from "./QA_Tile";

function Task05() {
  return (
    <div className="flex flex-col gap-5 p-5 max-w-[500px] bg-white rounded-lg items-center">
      <div className="flex gap-1 text-pretty text-2xl mb-5 italic">
        <h1 className="font-bold text-lime-600">Frequent</h1>
        <h1 className="font-bold text-zinc-800">Questions</h1>
      </div>
      <QA_Tile
        index={1}
        question="What is refactoring?"
        answer="Refactoring is the process of taking care of existing code and restructuring it, typically to improve the code through small changes without altering its underlying behavior."
      />
      <QA_Tile
        index={2}
        question="What is CSS Grid?"
        answer="It is a grid layout system based on a two-dimensional array of rows and columns"
      />
      <QA_Tile
        index={3}
        question="How do functional requirements differ from non-functional ones?"
        answer="Generally, functional requirements define a system's operation, while non-functional requirements outline how a solution should perform or behave."
      />
    </div>
  );
}

export default Task05;
