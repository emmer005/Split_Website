import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./Image.module.scss";
interface Imageprops {
  src: StaticImageData;
  alt: string;
  text: string;
  sty: string;
}
const ImageCircle = (props: Imageprops) => {
  return (
    <div className={`${styles[props.sty]}  flex flex-col justify-center`}>
      <Image
        className={`w-24 object-center aspect-square object-cover rounded-full`}
        src={props.src}
        alt={props.alt}
      />
      <h1 className="text-center">{props.text}</h1>
    </div>
  );
};

export default ImageCircle;
