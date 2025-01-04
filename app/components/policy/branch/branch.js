import React from "react";
import Image from "next/image";
export default function branch() {
  return (
    <div>
      <div className="bg-[#181513] z-50 relative pt-52 pb-72">
        <div className="relative">
          <Image
            src="/images/favorite-img.png"
            width={1344}
            height={314}
            alt="minipizza"
            className="mx-auto"
          />
          <p className="absolute text-4xl top-10 right-52 text-white">
            شعب رستوران ها
          </p>
          <div className="flex justify-center gap-6 absolute -bottom-52 right-56">
            <div className="bg-[#1B1A19] rounded-tr-full rounded-tl-full w-100 h-100 relative ">
              <div className="">
                <Image
                  src="/images/sh1.png"
                  width={400}
                  height={266}
                  alt="minipizza"
                  className="rounded-tr-full rounded-tl-full"
                />
              </div>
              <div>
                <p className="mt-4 text-white text-2xl pr-4">شعبه یک</p>
                <p className="mt-4 text-white font-vazir-light pr-4">آدرس : مشهد،خیابان هفت تیر،بین هفت تیر13و15</p>
                <p className="mt-4 text-white font-vazir-light pr-4">تلفن : 38666666</p>
              </div>
            </div>
            <div className="bg-[#1B1A19] rounded-tr-full rounded-tl-full rounded-b-md w-100 h-100 relative -translate-y-20 ">
              <div className="">
                <Image
                  src="/images/sh1.png"
                  width={400}
                  height={266}
                  alt="minipizza"
                  className="rounded-tr-full rounded-tl-full"
                />
              </div>
              <div>
                <p className="mt-4 text-white text-2xl pr-4">شعبه مرکزی</p>
                <p className="mt-4 text-white font-vazir-light pr-4">آدرس : مشهد</p>
                <p className="mt-4 text-white font-vazir-light pr-4">تلفن : 38666666</p>
              </div>
            </div>

            <div className="bg-[#1B1A19] rounded-tr-full rounded-tl-full rounded-b-md  w-100 h-100 relative ">
              <div className="">
                <Image
                  src="/images/sh3.png"
                  width={400}
                  height={266}
                  alt="minipizza"
                  className="rounded-tr-full rounded-tl-full"
                />
              </div>
              <div>
                <p className="mt-4 text-white text-2xl pr-4">شعبه دو</p>
                <p className="mt-4 text-white font-vazir-light pr-4">آدرس : مشهد</p>
                <p className="mt-4 text-white font-vazir-light pr-4">تلفن : 4040404040</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-10 bg-[#181513] pb-20 pt-16">
        <div><Image src="/images/3.png" width={400} height={325} alt="banner"/></div>
        <div><Image src="/images/2.png" width={400} height={325} alt="banner"/></div>
        <div><Image src="/images/1.png" width={400} height={325} alt="banner"/></div>
      </div>
    </div>
  );
}
