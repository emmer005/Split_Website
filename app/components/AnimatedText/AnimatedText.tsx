import { string } from "prop-types";
import React, { useRef } from "react";
import { once } from "events";
import { color, frame } from "framer-motion";
import { delay, motion, transform, useInView } from "framer-motion";

interface type {
  text: string;
}
const AnimatedText = (props: type) => {
  const def = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      aria-hidden
      transition={{ staggerChildren: 0.1 }}
    >
      {props.text.split(" ").map((word) => (
        <span key={props.text} className="inline-block">
          {word.split("").map((char) => (
            <motion.span key={char} className=" inline-block" variants={def}>
              {char}
            </motion.span>
          ))}
          <span className=" inline-block">&nbsp;</span>
        </span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
