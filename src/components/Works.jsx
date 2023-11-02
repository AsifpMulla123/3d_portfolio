import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { projects } from "../constants";
import { github } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";
import { staggerContainer } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full  object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img-hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="text-secondary mt-2 text-[14px]">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <p key={tag.name} className={`${tag.color} text-[14px]`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
const Works = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 text-[17px] max-w-3xl leading-[30px]"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A,
          doloremque ipsam. Nostrum reiciendis culpa illo. Minima, modi.
          Inventore animi reiciendis, neque, cum laudantium vel esse illum
          fugiat iure impedit hic deserunt eum, quos ad debitis alias? Rem,
          voluptatibus quibusdam alias voluptas ut facilis cupiditate eos!
        </motion.p>
      </div>
      <div className="flex flex-wrap gap-7 mt-20">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

export default Works;
