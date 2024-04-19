import React from "react";
import ImageCircle from "./Image";
import image1 from "../../../public/Img/PolicyImg1.jpg";
import image2 from "../../../public/Img/PolicyImg2.jpg";
import image3 from "../../../public/Img/PolicyImg3.jpg";
import image4 from "../../../public/Img/PolicyImg4.jpg";
import image5 from "../../../public/Img/PolicyImg5.jpg";
import styles from "./page.module.scss";
import imageCropper from "../../../public/Img/imageCropper.jpg";
import IconCircle from "./IconCircle";
import Image from "next/image";

const Policy = () => {
  return (
    <div>
      <div className="h-screen flex flex-col pt-20">
        <div className="flex flex-col items-center text-center">
          <div>
            <h3 className=" text-pink-400 text-sm">LAUNCH MANGEMENT</h3>
          </div>
          <div>
            <h1 className=" text-slate-500 text-2xl w-80">
              Aligh your team around a single source of truth
            </h1>
          </div>
        </div>
        {/* second container containg five rounded images of employess */}
        <div className=" flex flex-col gap-16 ">
          {/* first items of justify between content */}
          <div className=" flex justify-between items-center">
            <ImageCircle
              src={image5}
              alt="Worker1"
              text="Security"
              sty="after"
            />
            <div className={styles.textAfter}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perferendis asperiores, ipsam odit veritatis hic beatae
              perspiciatis nisi? Expedita, nostrum sapiente.
            </div>
            <ImageCircle src={image2} alt="Worker2" text="QA" sty="aftera" />
          </div>
          {/* items align in a space around format */}
          <div className=" flex justify-around">
            <ImageCircle
              src={image3}
              alt="Worker3"
              text="Privacy"
              sty="after3"
            />
            <ImageCircle
              src={image4}
              alt="Worker4"
              text="Engineering"
              sty="after4"
            />
            <ImageCircle
              src={image1}
              alt="Worker5"
              text="Design"
              sty="after5"
            />
          </div>
        </div>
      </div>
      <div className={styles.ImageCropper}>
        <div>
          <Image src={imageCropper} alt="List policy" />
        </div>
        <div className={`${styles.key} flex flex-col gap-4`}>
          <IconCircle />
          <IconCircle />
          <IconCircle />
          <IconCircle />
        </div>
      </div>
    </div>
  );
};

export default Policy;
