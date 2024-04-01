import React from "react";
import Image from "next/image";

interface Props {
  name: string;
  designation: string;
  image: string;
  description: string;
  isRightAlign: boolean;
}

function PersonInfo({
  name,
  designation,
  image,
  description,
  isRightAlign,
}: Props) {
  return (
    <div
      className={`flex ${isRightAlign ? "flex-row-reverse" : "flex-row"} gap-3`}
    >
      <Image
        src={image}
        alt="alt"
        width={200}
        height={200}
        className=" w-[100px] h-[100px] object-cover rounded"
      />
      <div className={`${isRightAlign ? "text-right" : "text-left"}`}>
        <h1 className="font-[500] text-black">{name}</h1>
        <p className="text-[12px] mb-2 text-zinc-800">{designation}</p>
        <p className="text-[12px] text-zinc-800">{description}</p>
      </div>
    </div>
  );
}

export default PersonInfo;
