import React from "react";

interface Props {
  index: number;
  question: string;
  answer: string;
}
function QA_Tile({ index, question, answer }: Props) {
  return (
    <div className="flex gap-5">
      <div className="px-2 rounded-sm bg-lime-600 h-min w-min">
        <h1 className="font-bold text-white">{index}</h1>
      </div>
      <div>
        <h1 className="font-semibold text-zinc-800">{question}</h1>
        <p className="text-zinc-800 text-sm">{answer}</p>
      </div>
    </div>
  );
}

export default QA_Tile;
