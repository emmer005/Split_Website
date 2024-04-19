import React from "react";
import Link from "next/link";
import reviewImage from "./images.json";
import items from "../../components/Reviews/review.json";
import Reviews from "../../components/Reviews/Reviews";
import Button from "../../components/Button/Button";
import styles from "./about.module.scss";
import Shape from "./Shape/Shape";
import { motion } from "framer-motion";
import Manner from "./manners/Manner";



const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className={`${styles.heading} text-center`}>
          We build luxurious technology to empower businesses
        </h1>
        <Link href="">
          <Button title="View Oppurtunities" bgColor="#fe02a0" />
        </Link>
      </div>
      {/* Image worker Reviews */}
      <div className={styles.ImageMainContainer}>
        {reviewImage.map((item) => (
          <div className={`${styles.imageDiv}`} key={item.id}>
            <Shape />
            <img
              className={styles.image}
              src={item.src}
              alt={item.alt}
              key={item.id}
            />
          </div>
        ))}
      </div>
      {/* company rate and reviews */}
      <div className="flex flex-col gap-10">
        <div className="flex items-center text-start justify-between md:flex-col">
          <h2 className="text-2xl font-black">We do this differently</h2>
          <span className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            odio.ipsum dolor
          </span>
        </div>
        {/* mapping of json file in the review folder */}
        <div className={styles.Reviews}>
          {items.map((item) => (
            <Reviews
              title={item.Title}
              key={item.id}
              number={item.number}
              subText={item.SubText}
            />
          ))}
        </div>
      </div>
      {/* company manners image with description  */}
      <Manner/>

      {/* Tables of opportunities */}
      <div className="flex flex-col gap-20">
        <div className="grid gap-4 w-5/6">
          <h1 className="text-3xl font-black">
            You guessed it. We're changing the game.Creating milestone
          </h1>
          <small>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quis
            fugiat deserunt, recusandae nesciunt doloremque libero ea, dolores
            ipsum aut dolorum! Laborum, necessitatibus! Facere reiciendis quae
            minus porro illum facilis.
          </small>
        </div>
        <div className="overflow-x-auto">
          <table className=" table">
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <th>October 2023</th>
                <td>Get 30M dollars funding</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <th>July 2021</th>
                <td>Over 50+ team members</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <th>February 2020</th>
                <td>Hit over 1M+ active users worldwide</td>
              </tr>
              <tr>
                <th>4</th>
                <th>April 2019</th>
                <td>Lunch our first beta version</td>
              </tr>
              <tr>
                <th>5</th>
                <th>January 2019</th>
                <td>We started our journey</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col items-center bg-blue-900 text-white py-14 relative">
        <Shape />
        <h1 className={`${styles.heading} text-center`}>
          Discover a better way to manage spending
        </h1>
        <Link href="/user/GetStarted">
          <Button title="Go start now" bgColor="#fe02a0" />
        </Link>
      </div>
    </>
  );
};

export default AboutUs;
