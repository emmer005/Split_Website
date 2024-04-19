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
      <section className={`${styles.section2} gap-y-5 gap-x-3 `}>
        <div className="  p-6 justify-between grid items-center bg-sky-200">
          <div>
            <h1 className=" text-3xl font-bold">Automated Reports</h1>
            <p className={styles.subText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              minus molestias reiciendis
            </p>
          </div>
          <div className=" flex justify-center items-center">
            <Image
              width={100}
              height={100}
              className="w-40 aspect-square object-contain"
              src="/Img/google.png"
              alt=""
            />
          </div>
        </div>
        <div className="  p-6 justify-between  items-center bg-pink-200">
          <div>
            <h1 className=" text-3xl font-bold">Customer Service</h1>
            <p className={styles.subText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              minus molestias reiciendis
            </p>
          </div>
          <div className=" flex justify-center items-center">
            <Image
              width={100}
              height={100}
              className="w-40 aspect-square object-contain"
              src="/Img/customerCare.png"
              alt=""
            />
          </div>
        </div>
        <div className="  p-6 justify-between  items-center bg-orange-200">
          <div>
            <h1 className=" text-3xl font-bold">Accessibility </h1>
            <p className={styles.subText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              minus molestias reiciendis
            </p>
          </div>
          <div className=" flex justify-center items-center">
            <Image
              width={100}
              height={100}
              className="w-40 aspect-square object-contain"
              src="/Img/access.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="  relative overflow-hidden h-[70vh]">
        <video className=" z-0  absolute w-[100vw] " autoPlay loop muted>
          <source src="/Img/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </div>
  );
}
