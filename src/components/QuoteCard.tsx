import React from "react";

function QuoteCard({
  widthClass,
  qoute,
  author,
}: {
  widthClass: WidthClassForQuoteCard;
  qoute: string;
  author: string;
}) {
  return (
    <div
      className={`${widthClass} rounded p-5 bg-gradient-to-t from-indigo-200 via-purple-200 to-pink-200 text-stone-600 gap-5`}
    >
      <p className="tracking-wide italic">{qoute}</p>
      <h4 className="uppercase text-stone-500">{`- ${author}`}</h4>
    </div>
  );
}

export default QuoteCard;
