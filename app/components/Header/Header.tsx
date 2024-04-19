"use client";

import logo from "../../../public/Img/logo.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.scss";
import Button from "../Button/Button";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const navigationTitle = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Contact",
      href: "/user/contact",
    },
    {
      title: "Blog",
      href: "/user/blog",
    },
    {
      title: "Product",
      href: "/user/product",
    },
  ];
  // framer motion varients
  const menuVers = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        type: "spring",
        duration: 0.5,
        stiffness: 120,
      },
    },
    exit: {
      scaleY: 0,
    },
  };

  const [isClick, setisClick] = useState(false);

  const toggleNavbar = (): void => {
    setisClick(!isClick);
  };
  let menuRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        // setisClick(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [menuRef.current]);
  const currentPath = usePathname();

  return (
    <>
      <header className={styles.mainHeader}>
      <div>
      <Link href="/" className="flex items-center gap-4">
          <Image className=" max-w-9" src={logo} alt="logo" />
          <h1 className="text-xl font-bold">Split</h1>
        </Link>
      </div>

        <nav className="md:hidden">
          <ul className="flex items-center justify-between gap-16 ">
            {navigationTitle.map((list) => (
              <li
                key={list.href}
                className={classNames({
                  " border-b": list.href === currentPath,
                  "text-zinc-200": list.href !== currentPath,
                })}
              >
                <Link href={list.href}>{list.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-4 md:hidden">
          <Link href="/user/Login">
            {/* <button className={styles.button}>Log In</button> */}
            <Button title="Login" bgColor="#fe02a0" />
          </Link>
          <Link href="/user/GetStarted">
            {/* <button className={styles.button}>Get Started</button> */}
            <Button title="Get Started" bgColor="#000" />
          </Link>
        </div>
        <div className="hidden md:block">
          <button
            
            onClick={toggleNavbar}
          >
            
            {isClick ? (
          <div className="fixed z-30 right-8 top-10">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0,0,256,256"
              >
                <g fill="#ffffff">
                  <g transform="scale(10.66667,10.66667)">
                    <path d="M4.99023,3.99023c-0.40692,0.00011 -0.77321,0.24676 -0.92633,0.62377c-0.15312,0.37701 -0.06255,0.80921 0.22907,1.09303l6.29297,6.29297l-6.29297,6.29297c-0.26124,0.25082 -0.36647,0.62327 -0.27511,0.97371c0.09136,0.35044 0.36503,0.62411 0.71547,0.71547c0.35044,0.09136 0.72289,-0.01388 0.97371,-0.27511l6.29297,-6.29297l6.29297,6.29297c0.25082,0.26124 0.62327,0.36648 0.97371,0.27512c0.35044,-0.09136 0.62411,-0.36503 0.71547,-0.71547c0.09136,-0.35044 -0.01388,-0.72289 -0.27512,-0.97371l-6.29297,-6.29297l6.29297,-6.29297c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273l-6.29297,6.29297l-6.29297,-6.29297c-0.18827,-0.19353 -0.4468,-0.30272 -0.7168,-0.30273z"></path>
                  </g>
                </g>
              </svg>
            </div>
            ) : (
           <div  className={` ${styles.ResponsiveButton}  fixed z-30 right-8 top-3 inline-flex items-center justify-around gap-2 p-2  `}>
              <span className="">MENU</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0,0,256,256"
              >
                <g fill="#ffffff">
                  <g transform="scale(8.53333,8.53333)">
                    <path d="M3,7c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h24c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM3,14c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h24c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM3,21c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h24c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587z"></path>
                  </g>
                </g>
              </svg>
           </div>
            )}
          </button>
        </div>

        {/* Responsive Header */}
        <AnimatePresence>
          {isClick && (
            <motion.div
              ref={menuRef}
              variants={menuVers}
              initial="initial"
              animate="animate"
              exit="exit"
              className={`${styles.Responsive} pl-8  hidden origin-top bottom-0 w-2/6 top-0 fixed lg:w-6/12  z-20 right-0 sm:w-4/6  md:block`}
            >
              <nav className="text-sm  h-full items-center j  grid ">
                <span className={styles.Navigation}>NAVIGATION</span>
                <ul className="flex flex-col items-start justify-between gap-10 ">
                  {navigationTitle.map((list) => (
                    <li
                      key={list.href}
                      className={classNames({
                        " border-b": list.href === currentPath,
                        "text-zinc-200": list.href !== currentPath,
                      })}
                    >
                      <Link href={list.href}>{list.title}</Link>
                    </li>
                  ))}
                </ul>
                <div
                  className="
             
             
            flex space-x-8 "
                >
                  <Link href="/user/Login">
                    {/* <button className={styles.button}>Log In</button> */}
                    <Button title="Login" bgColor="#fe02a0" />
                  </Link>
                  <Link href="/user/GetStarted">
                    {/* <button className={styles.button}>Get Started</button> */}
                    <Button title="Get Started" bgColor="#000" />
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
