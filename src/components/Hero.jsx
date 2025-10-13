import styles from "../styles/hero.module.css";
import heroImg from "/public/assets/hero-illustration.webp";
import { motion } from "framer-motion";
import { colors } from "../styles/colors";

const getDelay = (i) => i * 0.5;

const draw = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => {
    const delay = getDelay(i);
    return {
      opacity: 1,
      x: 0,
      transition: { delay, duration: 0.5, ease: "easeOut" },
    };
  },
};

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <motion.div initial="hidden" animate="visible">
        <h2 className={styles.heroText}>
          <motion.span variants={draw} custom={1}>
            Hey -{" "}
          </motion.span>
          <motion.span variants={draw} custom={1.5}>
            I am <span className={styles.ownerName}>Ubba</span>.{" "}
          </motion.span>
          <motion.span variants={draw} custom={1.75}>
            I build fast, accessible UIs with React.{" "}
          </motion.span>
        </h2>
      </motion.div>
      <div style={{ width: "100", height: "400px", overflow: "visible" }}>
        <motion.img
          src={heroImg}
          className={styles.heroImg}
          alt="Developer illustration"
          initial={{ opacity: 0, x: "10%", rotate: -30 }}
          animate={{ opacity: 1, x: "0", rotate: 0 }}
          transition={{
            duration: 0.4,
            delay: getDelay(2),
            type: "spring",
            stiffness: 120,
            damping: 10,
            bounce: 0.2,
          }}
        ></motion.img>
      </div>
      <motion.span
        className={styles.subText}
        initial="hidden"
        animate="visible"
        variants={draw}
        custom={3}
      >
        I build pixel-perfect, responsive interfaces and small apps that ship
        quickly
      </motion.span>
      <motion.div
        className={styles.btns}
        initial="hidden"
        animate="visible"
        variants={draw}
        custom={4}
      >
        <motion.button
          whileHover={{
            scale: 1.05,
            backgroundColor: `${colors.blueBtnsHover}`,
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            window.open(
              "https://github.com/Obada-barakat?tab=repositories",
              "_blank"
            )
          }
        >
          View my work
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.05,
            backgroundColor: `${colors.orangeBtnsHover}`,
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            (window.location.href =
              "mailto:obada.baracat1@gmail.com?subject=Hello Ubba!&body=Let's Connect!")
          }
        >
          Contact me
        </motion.button>
      </motion.div>
    </section>
  );
}
