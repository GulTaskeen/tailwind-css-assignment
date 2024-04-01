import React from "react";
import Image from "next/image";
interface Props {
  name: string;
  designation: string;
  image: string;
}

function PersonAvatar({ name, designation, image }: Props) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={image}
        alt="alt"
        width={200}
        height={200}
        className=" w-[100px] h-[100px] object-cover rounded-full"
      />
      <h1 className="font-[500]">{name}</h1>
      <p className="text-[12px] ">{designation}</p>
    </div>
  );
}

export default PersonAvatar;
