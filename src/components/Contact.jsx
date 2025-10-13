import styles from "../styles/contact.module.css";
import Mailto from "./MailTo";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDev } from "react-icons/fa";

export default function Contact() {
  return (
    <section className={styles.container} id="contact">
      <h2 className={styles.title}>Get In Touch</h2>
      <div className={styles.contactSection}>
        <p>
          I’m always open to discussing new projects, collaborations, or
          freelance opportunities. Have a question or idea?
          <span style={{ display: "block" }}>I’d love to hear from you.</span>
        </p>

        <div className={styles.socialSection}>
          <div className={styles.card}>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/ubba-obada/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LikedIn
                  <FaLinkedinIn className={styles.icon} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Obada-barakat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <FaGithub className={styles.icon} />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/Ubba_Obada"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                  <FaXTwitter className={styles.icon} />
                </a>
              </li>
              <li>
                <a
                  href="https://dev.to/ubbaobada"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DEV community
                  <FaDev className={styles.icon} />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.mailMe}>
            <span>Send Me a Message</span>
            <Mailto />
          </div>
        </div>
      </div>
    </section>
  );
}
