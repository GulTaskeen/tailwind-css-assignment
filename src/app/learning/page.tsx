import QuoteCard from "@/components/QuoteCard";
import React from "react";

function Example1() {
  return (
    <div className="flex flex-row justify-center items-center bg-violet-100 w-full h-screen p-10">
      <div className="flex flex-col md:flex-row p-10 my-50 justify-center bg-white rounded-2xl gap-5">
        <QuoteCard
          widthClass="w-3/8"
          qoute="Always code as if the guy who ends up maintaining your code will be a violent psychile"
          author="Linus Torvalds"
        />
        <QuoteCard
          widthClass="w-2/8"
          qoute="The best way to predict the future is to invent it"
          author="Alan"
        />
        <QuoteCard
          widthClass="w-3/8"
          qoute="Always code as if the guy who ends up maintaining your code will be a violent psychile"
          author="Linus Torvalds"
        />
      </div>
    </div>
  );
}

export default Example1;
