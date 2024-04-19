import Image from "next/image";
import termsImg from "../../../public/Img/terms.jpg";
import React from "react";
import styles from "./term.module.scss";
import Button from "@/app/components/Button/Button";

const Terms = () => {
  return (
    <div className={styles.main}>
      <div className="flex justify-center">
        <Image
          src={termsImg}
          alt="Man wearing apple vision pro"
          className={styles.Image}
        />
      </div>
      <div className="flex flex-col justify-center gap-4 ">
        <h1 className="relative font-black text-3xl items-center">
          Terms of Service
        </h1>
        <h2 className="lg:text-sm">
          <p>
            Welcome to <b>Split</b>! By accessing and using our services, you
            agree to the following terms: Acceptance of Terms: By using our
            website or services, you accept these terms in full. If you disagree
            with any part of these terms, please refrain from using our
            platform.
          </p>
          <p>
            Privacy and Data: Read our Privacy Policy to understand how we
            handle your data. We respect your privacy and take data protection
            seriously. Disclaimer of Warranties: We provide our services “as is”
            without any warranties. We do not guarantee uninterrupted access or
            error-free operation. Limitation of Liability: We are not liable for
            any direct, indirect, or consequential damages.
          </p>
          <p>
            Your use of our services is at your own risk. Changes to Terms: We
            may update these terms. Check back for changes. We’ll notify you of
            significant updates.
          </p>
          <p>
            Contact Us: If you have questions or concerns, reach out to us at
            <b> owusuemmanuel@gmail.com</b>. Thank you for choosing{" "}
            <b>Split!</b>
          </p>
        </h2>

        <span className="justify-end flex">
          <Button title="Accept" bgColor="#fe02a0" />
        </span>
      </div>
    </div>
  );
};

export default Terms;
