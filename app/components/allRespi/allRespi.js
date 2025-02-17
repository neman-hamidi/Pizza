import React from "react";
import Image from "next/image";
export default function allRespi() {
  return (
    <section className="bg-[#181513]">
      <div className="flex w-9/10 mr-auto items-center">
        <div className="py-3.5 px-7 w-40 text-white bg-main rounded-2xl">
          تمام رسپی ها
        </div>
        <div className="bg-main w-full h-1"></div>
      </div>
      <div className="my-24">
        <Image
          src="/images/banner.png"
          width={1334}
          height={370}
          alt="img-banner"
          className="mx-auto rounded-2xl"
        />
      </div>
      <div className="flex items-center justify-center">
        <div>
          <p className="text-main text-4xl mb-6 left-14">جوانه های چشایی شما</p>
          <h3 className="text-main text-4xl mb-14 left-14"> متحول خواهد شد!</h3>
          <p className="text-white text-justify w-[700px] text-2xl leading-10">
            پـــــــیتزا، این دایره‌ی جادویی که با هر برشی، آدم را به دنیایی از
            طعم و لذت می‌برد. نــــان داغ و ترد که با عــــطر خوشایند خود،
            وعده‌ای از یک تجربه‌ی بی‌نظیر را می‌دهد. سس گـوجه‌فرنگی تازه و
            خوش‌طعم که با ادویه‌های مخصوص، پایه‌ای محکم برای این شـــــاهکار
            آشپزی فراهم می‌کند. روی این بستر، پـــــنیر کش‌دار و طلایی که با هر
            لــــقمه، کشیده می‌شود و در دهان ذوب می‌گردد، همچون رویایی شیرین
            است. بـوی ریــحان تازه و ادویه‌های ایتالیایی که در هوا می‌پیچد، حس و
            حال یک سفر به قلب ایتالیا را زنده می‌کند.هر لقمه از این خوراکی
            محبوب...
          </p>
        </div>
        <div>
          <Image
            src="/images/slicePizaad.png"
            width={700}
            height={671}
            alt="slicePizza"
          />
        </div>
      </div>
      <div className="flex w-9/10 ml-auto mt-16 items-center">
        <div className="bg-main w-full h-1"></div>
        <div className="py-3.5 px-7 w-60 pr-8  text-white bg-main rounded-2xl">
          همین الان سفارش بده
        </div>
      </div>
    </section>
  );
}
