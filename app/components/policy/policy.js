import React from "react";
import Image from "next/image";
import PolicyItem from "./policyItem/policyItem";
import "./policyItem/policyItem.css";
export default function policy() {
  return (
    <div className="bg-[#181513] pt-14 ">
      <p className="text-center text-4xl text-main mb-12">سیاست کاری ما</p>
      <PolicyItem
        title="فضایی دنج و آرام"
        desc="با نورپردازی ملایم و دکوراسیونی دلنشین، فضایی فراهم کرده‌ایم که شما را از هیاهوی روزمره دور کند. 
اینجا مکانی است که می‌توانید با خیال راحت لحظاتی خوش را در کنار عزیزانتان سپری کنید و از طـــعم‌های بی‌نظیر غذاهای ما لـــذت ببرید.
"
      >
        <Image
          src="/images/p1.png"
          width={432}
          height={452}
          alt="policy-img"
          className="rounded-full p-2 border-dashed border-2 border-policy"
        />
      </PolicyItem>
      <PolicyItem
        title="سرآشپزهای مـــــاهر"
        dir="rtl"
        desc="سرآشپزهای با تجربه ما با استفاده از تازه‌ترین مواد اولیه و تکنیک‌های نوین آشـــــپزی و با عشق و دقت ، هـــــنر آشپزی را به نمایش می گذارند . 
هر لقمه از غذاهای ما، نتیجه تعهد و تخصص این هنرمندان آشپزخانه است که همواره در تلاش‌اند تا تجربه‌ای بی‌نقص و لـــذیذ را برای شما به ارمغان بیاورند.
"
      >
        <Image
          src="/images/p2.png"
          width={432}
          height={452}
          alt="policy-img"
          className="rounded-full p-2 border-dashed border-2 border-policy"
        />
      </PolicyItem>
      <PolicyItem
        title="مواد اولیه باکیفیت"
        desc=" ما با دقــت و وسواس فراوان، تـــازه‌ترین و بهترین مــــــــواد را از تأمین ‌کنندگان معتبر انتخاب می‌کنیم تا غذاهای درجــــه ۱ و بی‌نظیری را برای شما آماده کنیم. از ســـــبزیجات تازه گرفته تا گــــوشت‌های باکــیفیت و ادویــــه‌های اصــــیل.تـــــعهد ما به استفاده از مواد اولیه با کـــــیفیت، تضمین‌کننده رضایت و سلامت شماست."
      >
        <Image
          src="/images/p3.png"
          width={432}
          height={452}
          alt="policy-img"
          className="rounded-full p-2 border-dashed border-2 border-policy"
        />
      </PolicyItem>
      <PolicyItem
        title="قیمت های منصفانه"
        dir="rtl"
        desc="ما باور داریم که کیفیت بالا و قــــــــــیمت مناسب می‌توانند در کنار هم وجود داشته باشند. از این رو، منوی ما به گونه‌ای طراحی شده است که با هر بودجه‌ای سازگار باشد،بدون آنکه از کیفیت و طعم بی‌نظیر غذاها کاسته شود. رضایت شما از خدمات و قیمت‌های ما، اولویت اصــــــــــلی ماست."
      >
        <Image
          src="/images/p4.png"
          width={432}
          height={452}
          alt="policy-img"
          className="rounded-full p-2 border-dashed border-2 border-policy"
        />
      </PolicyItem>
    </div>
  );
}
