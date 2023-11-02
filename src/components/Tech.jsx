import React from "react";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { technologies } from "../constants";
import { staggerContainer } from "../utils/motion";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div key={technology.name} className="w-28 h-28">
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Tech;
