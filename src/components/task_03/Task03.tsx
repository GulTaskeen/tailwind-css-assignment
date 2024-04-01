import React from "react";
import Image from "next/image";
function Task03() {
  return (
    <div className="flex rounded-xl p-5 items-center bg-gradient-to-tr from-cyan-500 to-blue-500 w-fit gap-5">
      <Image
        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt="alt"
        width={100}
        height={100}
        className="w-[100px] h-[100px] rounded-full object-cover"
      />
      <div>
        <h1 className="font-[500]">Matt Cooper</h1>
        <p className="text-[13px] ">Designer - CircleAI</p>
      </div>
    </div>
  );
}

export default Task03;
