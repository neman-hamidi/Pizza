import React from "react";
import Image from "next/image";
export default function comments() {
  return (
    <div>
      <div className="bg-[#000000] z-50 relative pt-32 pb-48">
        <div className="relative">
          <Image
            src="/images/favorite-img.png"
            width={1344}
            height={314}
            alt="minipizza"
            className="mx-auto"
          />
          <p className="absolute text-4xl top-10 right-52 text-white">
          نظرات مشتریان
          </p>
          <div className="absolute top-8 left-56 flex gap-2">
            <div className="flex justify-center items-center rounded-lg p-2 bg-white"><svg className="w-4 text-main h-4 "><use href="#arrow"></use></svg></div>
            <div className="flex justify-center items-center rounded-lg p-2 bg-white"><svg className="w-4 text-main h-4 rotate-180"><use href="#arrow"></use></svg></div>
          </div>
          <div className="flex justify-center gap-6 absolute -bottom-52 right-32">
            <div className=" w-100 h-100 relative ">
              <div className="">
                <Image
                  src="/images/bg-comment.png"
                  width={400}
                  height={308}
                  alt="minipizza"
                  className=""
                />
              </div>
              <div className="absolute right-36 -translate-x-2 top-3">
                <div>
                  <Image
                    src="/images/Avatar Image.png"
                    width={100}
                    height={100}
                    alt="minipizza"
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="absolute top-28">
                <p className="mt-4 text-black text-2xl pr-4 text-center">ساسان گودرزی</p>
                <div className="mt-4 text-black font-vazir-light pr-4">
                  <div className="flex gap-1 justify-center items-center">
                    <svg className="w-5 h-5 text-yellow-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400">
                      <use href="#star"></use>
                    </svg>
                  </div>
                </div>
                <p className="mt-4 text-black font-vazir-light pr-4">
                  واقعاً تحت تأثیر طعم بی‌نظیر غذاهای این رستوران قرار گرفتم. هر
                  لقمه‌ای که می‌خورم،از پیش‌غذاها گرفته تا دسر،همه چیز با دقت و
                  عشق آماده شده است.
                </p>
              </div>
            </div>
            <div className=" w-100 h-100 relative ">
              <div className="">
                <Image
                  src="/images/bg-comment.png"
                  width={400}
                  height={308}
                  alt="minipizza"
                  className=""
                />
              </div>
              <div className="absolute right-36 -translate-x-2 top-3">
                <div>
                  <Image
                    src="/images/Avatar Image2.png"
                    width={100}
                    height={100}
                    alt="minipizza"
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="absolute top-28">
                <p className="mt-4 text-black text-2xl pr-4 text-center">
                  نازنین بیات
                </p>
                <div className="mt-4 text-black font-vazir-light pr-4">
                  <div className="flex gap-1 justify-center items-center">
                    <svg className="w-5 h-5 text-yellow-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400">
                      <use href="#star"></use>
                    </svg>
                  </div>
                </div>
                <p className="mt-4 text-black font-vazir-light pr-4">
                  هر بار که به این رستوران می‌آیم، حس می‌کنم در خانه‌ام و غذاها
                  همیشه فراتر از انتظارم هستند.🏠💖و بی‌صــــبرانه منتظر بازگشت
                  دوباره هستم!
                </p>
              </div>
            </div>

            <div className=" w-100 h-100 relative ">
              <div className="">
                <Image
                  src="/images/bg-comment.png"
                  width={400}
                  height={308}
                  alt="minipizza"
                  className=""
                />
              </div>
              <div className="absolute right-36 -translate-x-2 top-3">
                <div>
                  <Image
                    src="/images/Avatar Image3.png"
                    width={100}
                    height={100}
                    alt="minipizza"
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="absolute top-28">
                <p className="mt-4 text-black text-2xl pr-4 text-center">
                  علی رستگار
                </p>
                <div className="mt-4 text-black font-vazir-light pr-4">
                  <div className="flex gap-1 justify-center items-center">
                    <svg className="w-5 h-5 text-yellow-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400">
                      <use href="#star"></use>
                    </svg>
                  </div>
                </div>
                <p className="mt-4 text-black font-vazir-light pr-4">
                  اگه به دنبال تجربه‌ای جدید و بی‌نظیر از طعم پیتزا هستید، اینجا
                  بهترین انتخابه! هر لقمه‌اش یه سفر به دنیای طـــــعم‌ هاست که
                  نمی‌تونید ازش دست بکشید. 🍕😋
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
