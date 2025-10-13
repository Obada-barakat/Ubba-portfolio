import styles from "../styles/navBar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navBar}>
      <h1 className={styles.h1Heading}>Ubba Obada</h1>
      <ul>
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
