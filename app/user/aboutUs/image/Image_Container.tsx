import React from "react";
import styles from "./Image.module.scss";
import items_image1 from "../../../../public/Img/hands.jpg";
import Images, { StaticImageData } from "next/image";

interface items {
  heading: string;
  subtext: string;
  src: StaticImageData;
  alt: string;
}

const Image = (props: items) => {
  return (
    <div className={styles.ImageDivCircle}>
      <div>
        <h1 className="text-2xl font-bold">{props.heading}</h1>
        <span className="text-slate-500 text-sm">{props.subtext}</span>
      </div>
      <Images src={props.src} alt={props.alt} />
    </div>
  );
};

export default Image;
