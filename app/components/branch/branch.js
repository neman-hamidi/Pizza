import React from "react";
import Image from "next/image";
import details from "./Text";
export default function branch() {
  return (
    <>
      <div className="bg-[#181513] z-50 relative pt-52 pb-72">
        <div className="relative">
          <Image
            src="/images/favorite-img.png"
            width={1344}
            height={314}
            alt="minipizza"
            className="mx-auto"
          />
          <h3 className="absolute text-4xl top-10 right-52 text-white">
            شعب رستوران ها
          </h3>
          <div className="flex justify-center gap-6 absolute -bottom-52 right-32">
            {details.map((item, index) => (
              <div
                key={index}
                className="bg-[#1B1A19] rounded-tr-full rounded-tl-full w-100 h-100 relative "
              >
                <div>
                  <Image
                    src={item.src}
                    width={400}
                    height={266}
                    alt="minipizza"
                    className="rounded-tr-full rounded-tl-full"
                  />
                </div>
                <div>
                  <p className="mt-4 text-white text-2xl pr-4">{item.title}</p>
                  <p className="mt-4 text-white font-vazir-light pr-4">
                    {item.Add}
                  </p>
                  <p className="mt-4 text-white font-vazir-light pr-4">
                    {item.phone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-10 bg-[#181513] pb-20 pt-16">
        <div>
          <Image src="/images/3.png" width={400} height={325} alt="banner" />
        </div>
        <div>
          <Image src="/images/2.png" width={400} height={325} alt="banner" />
        </div>
        <div>
          <Image src="/images/1.png" width={400} height={325} alt="banner" />
        </div>
      </div>
    </>
  );
}
