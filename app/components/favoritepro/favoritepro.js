import React from "react";
import details from "./Text";
import FavoriteProItem from "./favoriteProItem/favoriteProItem";
import "./favorite.css";
export default function favoritepro() {
  return (
    <section className="bg-[#181513] pb-20">
      <div className="flex items-center justify-center gap-5 w-9/10 mx-auto">
        {details.map((item, index) => (
          <FavoriteProItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
