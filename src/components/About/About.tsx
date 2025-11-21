import { useLang } from "components/Contexts/LangContext";
import { useState } from "react";
import styles from "./About.module.scss";
import Arrow from "assets/arrow.svg";
const About = () => {
  const { t } = useLang();
  const [openSections, setOpenSections] = useState<string[]>(["intro"]); // intro открыто по умолчанию

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const skills = t<string>("about.skills", true);
  const projects = t<string>("about.projects", true);
  const experiences = t<{ role: string; description: string }>(
    "about.experiences",
    true
  );
  const education = t<{ school: string; description: string }>(
    "about.education",
    true
  );
  const languages = t<string>("about.languages", true);

  return (
    <div className={styles.container}>
      <div className={styles.intro_section}>
        <h2 className={styles.title}>{t("about.title")}</h2>
        <p className={styles.intro}>{t("about.intro")}</p>
      </div>

      <div className={styles.section}>
        <button
          className={styles.section_header}
          onClick={() => toggleSection("skills")}
        >
          <h3>{t("about.skillsTitle")}</h3>

          <img
            className={`${styles.arrow} ${
              openSections.includes("skills") ? styles.open : ""
            }`}
            src={Arrow}
            alt=""
          />
        </button>
        {openSections.includes("skills") && (
          <div className={styles.section_content}>
            <div className={styles.skills_grid}>
              {skills.map((skill, index) => (
                <span key={index} className={styles.skill_tag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className={styles.section}>
        <button
          className={styles.section_header}
          onClick={() => toggleSection("projects")}
        >
          <h3>{t("about.projectsTitle")}</h3>
          <img
            className={`${styles.arrow} ${
              openSections.includes("projects") ? styles.open : ""
            }`}
            src={Arrow}
            alt=""
          />
        </button>
        {openSections.includes("projects") && (
          <div className={styles.section_content}>
            <ul className={styles.list}>
              {projects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className={styles.section}>
        <button
          className={styles.section_header}
          onClick={() => toggleSection("experience")}
        >
          <h3>{t("about.experienceTitle")}</h3>

          <img
            className={`${styles.arrow} ${
              openSections.includes("experience") ? styles.open : ""
            }`}
            src={Arrow}
            alt=""
          />
        </button>
        {openSections.includes("experience") && (
          <div className={styles.section_content}>
            {experiences.map((exp, index) => (
              <div key={index} className={styles.experience_item}>
                <h4>{exp.role}</h4>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.section}>
        <button
          className={styles.section_header}
          onClick={() => toggleSection("education")}
        >
          <h3>{t("about.educationTitle")}</h3>
          <img
            className={`${styles.arrow} ${
              openSections.includes("education") ? styles.open : ""
            }`}
            src={Arrow}
            alt=""
          />
        </button>
        {openSections.includes("education") && (
          <div className={styles.section_content}>
            {education.map((edu, index) => (
              <div key={index} className={styles.education_item}>
                <h4>{edu.school}</h4>
                <p>{edu.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.section}>
        <button
          className={styles.section_header}
          onClick={() => toggleSection("languages")}
        >
          <h3>{t("about.languagesTitle")}</h3>
          <img
            className={`${styles.arrow} ${
              openSections.includes("languages") ? styles.open : ""
            }`}
            src={Arrow}
            alt=""
          />
        </button>
        {openSections.includes("languages") && (
          <div className={styles.section_content}>
            <ul className={styles.languages_list}>
              {languages.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
