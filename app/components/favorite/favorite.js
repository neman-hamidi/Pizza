import React from "react";
import Image from "next/image";
import details from "./Text";
export default function favorite() {
  return (
    <section className="bg-[#181513] z-50 relative pt-52 pb-32">
      <div className="relative">
        <Image
          src="/images/favorite-img.png"
          width={1344}
          height={314}
          alt="minipizza"
          className="mx-auto"
        />
        <p className="absolute text-4xl top-10 right-52 text-white">
          رسپی های محبوب
        </p>
        <div className="flex justify-center items-center absolute p-7 rounded-full bg-black/50 w-52 h-52 -top-24 left-80">
          <Image
            src="/images/minipizza.png"
            width={200}
            height={200}
            alt="minipizza"
          />
        </div>
        <div className="flex justify-center gap-6 absolute -bottom-8 right-32">
          {details.map((item, index) => (
            <div
              key={index}
              className="bg-[#1B1A19] rounded-tr-full rounded-tl-full rounded-b-md w-40 h-[217px] relative"
            >
              <div className="absolute top-6 right-9">
                <Image
                  src={item.src}
                  width={100}
                  height={100}
                  alt="minipizza"
                />
              </div>
              <p
                className={`mt-4 text-white text-center text-3xl absolute bottom-3 ${item.className}`}
              >
                {item.title}
              </p>
            </div>
          ))}

          <div className="bg-[#1B1A19] rounded-tr-full rounded-tl-full rounded-b-md w-40 h-[217px] relative">
            <div className="flex absolute top-6 right-8">
              <Image
                src="/images/drink.png"
                width={50}
                height={92}
                alt="minipizza"
                className="rotate-6"
              />
              <Image
                src="/images/drink.png"
                width={50}
                height={92}
                alt="minipizza"
              />
            </div>
            <p className="mt-4 text-white mx-auto text-3xl absolute bottom-3 right-8">
              نوشیدنی
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
