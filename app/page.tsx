"use client";

import styles from "./Home.module.scss";
import userImage from "./user/aboutUs/images.json";
import HomeImage from "../public/Img/HomePageImag.png";
import HomeBg from "../public/Img/HomeBg.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaUserPlus } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";
import AnimatedText from "./components/AnimatedText/AnimatedText";
import { title } from "process";
import Autobox from "./components/Home/AutoBox/Autobox";
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  // const {
  //   data: blogs,
  //   isPending,
  //   error,
  // } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="grid gap-20">
      {/* Section one or Landing Page */}
      <section className={`${styles.section1} grid  `}>
        <div className={`${styles.div1}`}>
          <div className="flex flex-col space-y-4">
            <motion.h1 className={styles.h1}>
              <AnimatedText text="Welcome to SPLIT" />
              <span>
                <ul className={styles.animatedText}>
                  <div>
                    <li>Innovation</li>
                    <li>Possibility</li>
                    <li>Limitless</li>
                    <li>Potential</li>
                  </div>
                </ul>
              </span>
            </motion.h1>
            <motion.h5 className={styles.subText}>
              <AnimatedText text="Ready to ride the digital wave? Dive into our blog, explore our projects, and let’s build something extraordinary together." />
            </motion.h5>

            <div className={`${styles.inputGrid}`}>
              <input
                className=" rounded-full py-2 border-slate-500 border-2 px-6 flex items-center focus:outline-none bg-transparent"
                type="text"
                placeholder="Enter a product"
              />
              <motion.input
                className={`${styles.buttonInput} cursor-pointer focus:outline-none rounded-full`}
                type="submit"
                value="Find now"
              />
            </div>
          </div>
          <div className={`${styles.div3}`}>
            <div className="flex gap-4">
              <FaUserPlus />
              <div>
                <h1 className="font-bold text-xl">9,550,041</h1>
                <small className={styles.subText}>user trust us</small>
              </div>
            </div>
            <div className="flex gap-4">
              <AiFillSound />
              <div>
                <h1 className="font-bold text-xl">70million</h1>
                <small className={styles.subText}>official tracks</small>
              </div>
            </div>
          </div>
          <div className="flex ">
            {userImage.map((image) => (
              <Image
                className={`${
                  styles[`${image.leftStyle}`]
                } relative object-cover rounded-full aspect-square object-center`}
                key={image.id}
                src={image.src}
                alt={image.alt}
                width={50}
                height={50}
              />
            ))}
          </div>
        </div>

        <div className={`${styles.div2} `}>
          <Image className={styles.HomeBg} src={HomeBg} alt="" />

          {/* <Image
          className=" w-20 rounded-md aspect-square object-cover top-0 absolute bottom-0"
          src={song1}
          alt=""
        /> */}
          <Image className={`${styles.HomeImage}`} src={HomeImage} alt="" />
        </div>
      </section>
      <section className={styles.GetPromoSection}>
        <div>
          <h1 className={styles.h1}>Get promtions & updates!</h1>
          <p className={styles.subText}>
            Seamlessly empower fully researched growth strategies and
            interoperable internal or “organic” sources credibly innovate
            granular internal .
          </p>
        </div>
        <form action="" autoComplete="off">
          <input type="email" name="email" placeholder="Enter your email" />
          <input type="submit" value="Subscribe" name="submit" />
        </form>
      </section>
      {/* Section two */}
      <section >
    <div className=" mx-auto  w-[80%] space-y-8">
    <h1 className={`${styles.h1} text-center `}> Services </h1>
     <div className={`${styles.section2} gap-y-5 gap-x-3`} >
     {
        AutoboxArray.map((items) => (
          <Autobox key={uuidv4()} tailwindStyle={items.bgColor} imagePath={items.imagePage} title={items.title} subText={items.subText}/>
        ))
      }
     </div>
    </div>
      </section>
      <section className={styles.videoSection}>
        <video className="z-0 flex object-cover h-[100%]  absolute w-[100vw] " autoPlay loop muted>
          <source  src="/Img/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={ `${styles.videoBg} h-full w-full absolute `}>
          <h1 className={`${styles.h1} text-white`}>Hello There</h1>
        </div>
      </section>
    </div>
  );
}

const AutoboxArray = [
  {
    title: "Automated Reports",
    subText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse minus molestias reiciendis",
    imagePage:"/Img/google.png",
    bgColor: "bg-slate-300"
  },
  {
    title: "Customer Care",
    subText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse minus molestias reiciendis",
    imagePage:"/Img/customercare.png"
    ,
    bgColor: "bg-pink-200"
  },
  {
    title: "Accessibility",
    subText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse minus molestias reiciendis",
    imagePage:"/Img/access.png"
    ,
    bgColor: "bg-slate-300"
  }
]