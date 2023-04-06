import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg" target="_blank">
          {position}&nbsp;
          <a
            className="text-primary dark:text-primaryDark capitalize"
            href={companyLink}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md-w[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Intern"
            company="SEO"
            companyLink="https://www.seoczar.com/"
            time="2023 || Present"
            address="Noida - 63, IN"
            work="Worked on a team responsible for developing new features for company
            search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization."
          />
          <Details
            position="Intern"
            company="Midas"
            companyLink="www.Midas.com"
            time="2023 || FEB-MAR"
            address="Noida - 59, IN."
            work="Worked on a team responsible for developing 
            share short-form content, including designing and implementing a new user interface 
            and developing the Frontend infrastructure to support the feature."
          />
          <Details
            position="Intern"
            company="Wipro"
            companyLink="https://www.wipro.com"
            time="2022-2023 || NOV-JAN"
            address="Online"
            work="Wipro is a leading global information technology, consulting and business process services company. It provides digital strategy, customer centric design, consulting, infrastructure services, business process services, research and development, cloud, mobility and advanced analytics and product engineering for customers around the world"
          />
          <Details
            position="Intern"
            company="IBM"
            companyLink="https://www.ibm.com/in-en"
            time="2022 || SEP"
            address="Online"
            work="As an IBM intern, you’ll work collaboratively as part of an intern team on a project that addresses a strategic IBM Marketing business challenge. In addition to the project, the internship includes educational, networking, and social activities1. IBM also offers undergraduate students a virtual learning experience with live, weekly learning sessions over eight weeks during the summer through its IBM Accelerate program"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
