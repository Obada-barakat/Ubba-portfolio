import styles from "../styles/skills.module.css";
import { useQuery } from "@tanstack/react-query";

const fetchSkills = async () => {
  const response = await fetch("./skills.json");
  if (!response) throw new Error("Failed to fetch skills");
  return response.json();
};

const SkillsList = ({ showSecond }) => {
  const {
    data: skills,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["skills"],
    queryFn: fetchSkills,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <Card allSkills={skills} showSecond={showSecond} />;
};

function Card({ allSkills, showSecond }) {
  const entries = Object.entries(allSkills);

  const half = Math.ceil(entries.length / 2);
  const firstGroup = entries.slice(0, half);
  const secondGroup = entries.slice(half);

  const groupToShow = showSecond ? secondGroup : firstGroup;

  return (
    <ul>
      {groupToShow.map(([category, skills]) => (
        <li key={category}>
          <strong>{category}:</strong>{" "}
          {skills.map((skill, i) => (
            <span key={i}>{skill}</span>
          ))}
        </li>
      ))}
    </ul>
  );
}

export default function Skills() {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Tools & Technologies</h2>
      <div className={styles.skillsContainer}>
        <p>
          Here are the tools and technologies I use to build web experiences.
        </p>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <SkillsList showSecond={false} />
          </div>
          <div className={styles.card}>
            <SkillsList showSecond={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
