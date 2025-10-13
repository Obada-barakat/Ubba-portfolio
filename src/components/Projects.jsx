import { useState } from "react";
import styles from "../styles/projects.module.css";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { FaLink, FaGithub } from "react-icons/fa";
import { GiClick } from "react-icons/gi";
import { colors } from "../styles/colors";

const fetchProjects = async () => {
  const response = await fetch("/projects.json");
  if (!response.ok) throw new Error("Failed to fetch projects");
  return response.json();
};

const ProjectsList = () => {
  const {
    data: projects,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <Card allProjects={projects} />;
};

function Card({ allProjects }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      {allProjects.map((p) => (
        <motion.div
          className={styles.cardContainer}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.9 }}
          key={p.id}
        >
          <div className={styles.splash} />
          <motion.div
            layout
            onClick={() => setSelected(p)}
            className={styles.card}
            variants={cardVariants}
            whileHover={{ rotate: 0 }}
            transition={{ ease: "easeInOut" }}
          >
            <GiClick className={styles.clickMe} />
            <h3 className={styles.cardTitle}>{p.title}</h3>
            <p>{p.description}</p>
          </motion.div>
        </motion.div>
      ))}

      {selected && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut" }}
          onClick={(e) => {
            e.stopPropagation();
            setSelected(null);
          }}
        >
          <motion.div
            layout={`project-${selected.id}`}
            className={styles.expandedCard}
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              ease: ["easeIn", "easeInOut"],
            }}
          >
            <img src={selected.image} alt={selected.title} />
            <h3>{selected.title}</h3>
            <div className={styles.projectBtns}>
              <a
                onClick={(e) => {
                  e.stopPropagation();
                }}
                href={selected.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live <FaLink />
              </a>
              <a
                onClick={(e) => {
                  e.stopPropagation();
                }}
                href={selected.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <FaGithub />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 20,
    rotate: -5,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.99,
      delay: 0.2,
      ease: ["easeInOut", "easeOut"],
    },
  },
};

function ViewMore() {
  return (
    <motion.a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/Obada-barakat?tab=repositories"
      className={styles.viewMore}
      whileHover={{ backgroundColor: colors.blueBtnsHover }}
    >
      View More On <FaGithub />
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.title}>Things I’ve Built</h2>
      <div className={styles.container}>
        <ProjectsList />
      </div>
      <div className={styles.viewMoreContainer}>
        <ViewMore />
      </div>
    </section>
  );
}
