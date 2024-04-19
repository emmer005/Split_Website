import React from 'react'
import items_image1 from "../../../../public/Img/collaberation.jpg";
import items_image2 from "../../../../public/Img/flowerhat.jpg";
import items_image3 from "../../../../public/Img/handflower.jpg";
import items_image4 from "../../../../public/Img/growth.jpg";
import items_image5 from "../../../../public/Img/hands.jpg";
import Image_Container from "../image/Image_Container";
import Button from '@/app/components/Button/Button';
import styles from "./Manners.module.scss"
const arr = [
    {
      heading: "Collaboration",
      subtext:
        "We look to power growth across the board for our clients, partners and the Justuna teams. We build technology that empowers.",
      alt: "Flower in Hand",
      src: items_image1,
    },
    {
      heading: "Have Fun Building",
      subtext:
        "We look to power growth across the board for our clients, partners and the Justuna teams. We build technology that empowers.",
      alt: "Flower in Hand",
      src: items_image2,
    },
    {
      heading: "Selflessness",
      subtext:
        "We look to power growth across the board for our clients, partners and the Justuna teams. We build technology that empowers.",
      alt: "Flower in Hand",
      src: items_image3,
    },
    {
      heading: "Growth Mindset",
      subtext:
        "We look to power growth across the board for our clients, partners and the Justuna teams. We build technology that empowers.",
      alt: "Flower in Hand",
      src: items_image4,
    },
    {
      heading: "Trust and Respect",
      subtext:
        "We look to power growth across the board for our clients, partners and the Justuna teams. We build technology that empowers.",
      alt: "Flower in Hand",
      src: items_image5,
    },
  ];
const Manner = () => {
  return (
    <div className={styles.imageCircleMain}>
    <div className={styles.imageCircle}>
      <div>
        <div className="h-54 grid">
          <h1 className="text-3xl font-black">
            We're driven by our values
          </h1>
          <Button title="View Opportunities" bgColor="#fe02a0" />
        </div>
        <Image_Container
          heading={arr[0].heading}
          subtext={arr[0].subtext}
          alt={arr[0].alt}
          src={arr[0].src}
        />
      </div>
      <div className="mt-20 md:mt-0">
        <Image_Container
          heading={arr[1].heading}
          subtext={arr[1].subtext}
          alt={arr[1].alt}
          src={arr[1].src}
        />
        <Image_Container
          heading={arr[2].heading}
          subtext={arr[2].subtext}
          alt={arr[2].alt}
          src={arr[2].src}
        />
      </div>
      <div className="mt-40 lg:mt-0">
        <Image_Container
          heading={arr[3].heading}
          subtext={arr[3].subtext}
          alt={arr[3].alt}
          src={arr[3].src}
        />
        <Image_Container
          heading={arr[4].heading}
          subtext={arr[4].subtext}
          alt={arr[4].alt}
          src={arr[4].src}
        />
      </div>
    </div>
  </div>
  )
}

export default Manner