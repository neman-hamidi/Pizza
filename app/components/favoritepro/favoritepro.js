import React from "react";
import Image from "next/image";
import "./favorite.css";
import FavoriteProItem from "./favoriteProItem/favoriteProItem";
export default function favoritepro() {
  return (
    <div className="bg-[#181513] pb-20">
      <div className="flex items-center justify-center gap-5 w-9/10 mx-auto">
        <FavoriteProItem
          title="پیتزا ساندویچ"
          time="32"
          desc="سس‌مخصوص‌کدو،ذرت،نخود،سبز،زیبتون،قارچ،فلفل،گوجه فرنگی،پنیر،خیارشور"
          price=" 155,000"
        >
          <Image
            src="/images/image 26_prev_ui.png"
            width={170}
            height={173}
            alt="pizza"
            className="mx-auto"
          />
        </FavoriteProItem>
        <FavoriteProItem
          title="پیتزا  مکــــزیکو"
          time="30"
          desc="سس مخصوص،پنیر موزارلا،زیتون سیاه،قارچ،فلفل دلمه،گوجه فرنگی،پنیر پارمسان،تخم مرغ"
          price="199,000"
        >
          <Image
            src="/images/image 27.png"
            width={170}
            height={173}
            alt="pizza"
            className="mx-auto"
          />
        </FavoriteProItem>
        <FavoriteProItem
          title="پیتزا  پپـــــرونی"
          time="28"
          desc="سس‌مخصوص،پپرونی،زیتون،قارچ،فلفل،پنیر پیتزا،
گوجه فرنگی،ژامبون گوشت"
          price="195,000"
        >
          <Image
            src="/images/image 28.png"
            width={170}
            height={173}
            alt="pizza"
            className="mx-auto"
          />
        </FavoriteProItem>
        <FavoriteProItem
          title="پیتزا سیر و استیک"
          time="34"
          desc="خمیر مخصوص،فیله گوساله مرینیت شده،زیتون،قارچ،
فلفل،پیاز‌ و‌ سیر تازه،گوجه فرنگی،پنیر،پیازچه"
          price="375,000"
        >
          <Image
            src="/images/minipizza.png"
            width={140}
            height={173}
            alt="pizza"
            className="mx-auto mb-7"
          />
        </FavoriteProItem>
        <FavoriteProItem
          title="پیتزا  رمــــــــــــا"
          time="27"
          desc="سس مخصوص،ژامبون گوشت تنوری،ذرت،ژامبون مرغ،،قارچ،فلفل دلمه،پنیر"
          price="245,000"
        >
          <Image
            src="/images/image 30.png"
            width={170}
            height={173}
            alt="pizza"
            className="mx-auto"
          />
        </FavoriteProItem>
      </div>
    </div>
  );
}
