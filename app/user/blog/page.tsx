import React from "react";
import styles from "./blog.module.scss";
import { IoArrowUndo } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { TiArrowForward } from "react-icons/ti";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

const Blog = () => {
  return (
    <div className="grid gap-16">
      <section className="py-10  relative h-[50vh] flex items-center justify-center overflow-hidden ">
        <div className=" z-10  font-sans   flex flex-col justify-center items-center">
          <span className=" text-sm">BLOG</span>
          <span className={` tracking-widest text-7xl font-black `}>
            IDEAS <span className={styles.text_Stroke}>THAT</span>{" "}
            <span className="relative">
              INSPIRE
              <span className=" absolute left-[112px]">
                <IoArrowUndo className=" text-yellow-400 rotate-[120deg] text-3xl" />
              </span>
            </span>
          </span>
        </div>
        <div className=" w-[200px] aspect-square top-[-30px]  absolute left-[-30px]">
          <div className=" w-full flex justify-center items-center border-zinc-200 aspect-square rounded-full border-[1px] ">
            <div className="flex justify-center items-center w-[70%] border-zinc-200 aspect-square rounded-full border-[1px]">
              <div className=" flex justify-center items-center w-[50%] border-zinc-200 aspect-square rounded-full border-[1px]"></div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.animatedCircle} z-0 w-[300px] aspect-square bottom-[0]  absolute right-[30px]`}
        >
          <div className=" w-full flex justify-center items-center border-zinc-200 aspect-square rounded-full border-[1px] ">
            <div className="flex justify-center items-center w-[70%] border-zinc-200 aspect-square rounded-full border-[1px]">
              <div className=" flex justify-center items-center w-[50%] border-zinc-200 aspect-square rounded-full border-[1px]"></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={`${styles.blog_grid}`}>
          <div>
            <div className=" text-sm flex items-center gap-[6vw]">
              <div className="gap-[4vw] flex items-center justify-center">
                <div className=" gap-2 flex items-center justify-center">
                  <BsFillGrid3X3GapFill />
                  <IoMdMenu />
                </div>
                <div className=" flex gap-4 items-center justify-center">
                  <span>Showing</span>{" "}
                  <span className=" text-blue-400 text-xs ">212 RESULTS</span>
                </div>
              </div>
              <div className=" flex items-center justify-center">
                <span>Sort</span>
                <span>
                  <IoMdArrowDropdown />
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className=" flex w-fit items-center pl-4 border-2 border-zinc-500 rounded-[200px] overflow-hidden">
              <input
                className=" outline-none bg-transparent"
                type="search"
                placeholder="Search"
              />
              <button className=" w-fit cursor-pointer bg-green-600 p-2 text-white ">
                <CiSearch />
              </button>
            </div>
            <div>
              <h1>ALL CATEGORIES</h1>
              <ul className=" flex flex-col gap-2">
                {categories.map((list) => (
                  <div key={uuidv4()} className={styles.Cate_list_main}>
                    <li
                      className={`${styles.Cate_list} w-fit hover:text-orange-500 transition-colors text-sm`}
                    >
                      <TiArrowForward
                        className={`${styles.icon} text-orange-500 `}
                      />
                      <Link href={list.href}>{list.title}</Link>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

const categories = [
  {
    title: "Design and Branding",
    href: "#",
  },
  {
    title: "Computers",
    href: "#",
  },
  {
    title: "Social Media",
    href: "#",
  },
  {
    title: "Laptops",
    href: "#",
  },
  {
    title: "Speakers",
    href: "#",
  },
];
