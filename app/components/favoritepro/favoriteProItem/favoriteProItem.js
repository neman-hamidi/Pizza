import Image from "next/image";
import React from "react";
export default function favoriteProItem({
  src,
  title,
  time,
  desc,
  price,
}) {
  return (
    <div className="p-5 w-[280px] h-[490px] bg-favorite">
      <div className="flex justify-center items-center mt-4">
        <Image
          src={src}
          width={150}
          height={173}
          alt="pizza"
          className="mx-auto"
        />
      </div>
      <div className="flex justify-between items-center my-4">
        <p className="text-white text-xl">{title}</p>
        <p className="text-slate-400 text-sm flex justify-center items-center gap-1">
          {time} دقیقه
          <svg className="w-6 h-6">
            <use href="#clock"></use>
          </svg>
        </p>
      </div>
      <div className="w-[266px] mx-auto ml-1 translate-x-[8px]">
        <p className=" text-white break-words mb-8 font-vazir-light h-20">
          {desc}
        </p>
        <h3 className="text-center text-white text-2xl font-bold">
          {price} تومان
        </h3>
      </div>
    </div>
  );
}
