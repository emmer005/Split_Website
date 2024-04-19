import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import styles from "./Contact.module.scss";
import items_image1 from "../../../public/Img/collaberation.jpg";
import items_image2 from "../../../public/Img/flowerhat.jpg";
import items_image3 from "../../../public/Img/handflower.jpg";
import items_image4 from "../../../public/Img/growth.jpg";
import items_image5 from "../../../public/Img/hands.jpg";
import Image from "next/image";
const Contact = () => {
  return (
    <div className="bg-slate-200 overflow-hidden flex flex-col p-10 justify-center relative 2xl:h-screen">
      <div className={styles.contactMain}>
        <div className="flex flex-col gap-7 ">
          <h1 className="text-3xl font-bold">Contact</h1>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            excepturi.
          </h4>
          <span className="flex items-center gap-4">
            <FaPhoneAlt /> +233 5963 34321
          </span>
          <span className="flex items-center gap-4">
            <IoMdMail />
            elvisAddai@gmail.com
          </span>
          <span className="flex items-center gap-4">
            <FaLocationDot />
            Office AK-110-3321 Costal Building
          </span>
        </div>
        <div>
          <form className={styles.form} action="">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                placeholder="e.g John"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                placeholder="e.g Micheal"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="tel"
                placeholder="e.g. +233 4567 34533"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <input
                type="text"
                placeholder="Your message"
                className="input input-bordered"
                required
              />
            </div>
          </form>
        </div>
      </div>

      <Image
        className=" top-5 left-1/2  absolute max-w-14  aspect-square object-cover rounded-full"
        src={items_image1}
        alt="iksl"
      />
      <Image
        className="md:hidden top-1/4 left-1/3  absolute max-w-14 aspect-square object-cover rounded-full"
        src={items_image2}
        alt="iksl"
      />
      <Image
        className="md:hidden top-3/4 left-1/3  absolute max-w-14 aspect-square object-cover rounded-full"
        src={items_image3}
        alt="iksl"
      />
     
    </div>
  );
};

export default Contact;
