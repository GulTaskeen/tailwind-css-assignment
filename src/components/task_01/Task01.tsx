import React from "react";

function Task01() {
  return (
    <div className="flex flex-col items-center max-w-[370px] mx-auto bg-white rounded-xl p-10 gap-5">
      <h1 className="text-3xl text-blue-600 font-bold">CSS Flex & Grid</h1>
      <p className="text-stone-800 ">
        In this CSS Grid vs Flexbox tutorial, you have looked into the
        differences between CSS Grid and Flexbox layout, how they function in
        modern browsers. With the right amount of practice, you can master both
        the layouts and create impressive web pages.
      </p>
      <div className="flex justify-between w-full">
        <button className="bg-blue-200 text-stone-800 px-3 rounded-sm">
          Prev
        </button>
        <button className="bg-blue-200 text-stone-800 px-3 rounded-sm">
          Next
        </button>
      </div>
    </div>
  );
}

export default Task01;
