import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={` ${styles.footer}`}>
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link href="/user/branding" className="link link-hover">
            Branding
          </Link>
          <Link href="/user/design" className="link link-hover">
            Design
          </Link>
          <Link href="/user/marketing" className="link link-hover">
            Marketing
          </Link>
          <Link href="/user/advertisement" className="link link-hover">
            Advertisement
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link href="/user/aboutUs" className="link link-hover">
            About us
          </Link>
          <Link href="/user/contact" className="link link-hover">
            Contact
          </Link>
          <Link href="/user/blog" className="link link-hover">
            Blogs
          </Link>
          <Link href="/user/product" className="link link-hover">
            Product
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link href="/user/terms" className="link link-hover">
            Terms of use
          </Link>
          <Link href="/user/policy" className="link link-hover">
            Privacy policy
          </Link>
          <Link href="/user/cookie" className="link link-hover">
            Cookie policy
          </Link>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
