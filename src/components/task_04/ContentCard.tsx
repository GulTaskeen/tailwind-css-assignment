import React from "react";
import Image from "next/image";
interface Props {
  title: string;
  descption: string;
  icon: string;
}
function ContentCard({ title, descption, icon }: Props) {
  return (
    <div className="flex flex-col items-center gap-5 p-5 text-zinc-900 rounded-lg bg-gradient-to-t from-indigo-200 via-purple-200 to-pink-200">
      {/* <Image
        src={icon}
        alt="alt"
        width={100}
        height={100}
        className="w-[50px] h-[50px] object-cover rounded-full"
      /> */}
      <div className="w-[50px] h-[50px] rounded-full bg-red-300"></div>
      <h1 className="font-[600]">{title}</h1>
      <p className=" text-center">{descption}</p>
    </div>
  );
}

export default ContentCard;
