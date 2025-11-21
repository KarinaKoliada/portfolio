import { useLang } from "components/Contexts/LangContext";
import styles from "./Projects.module.scss";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
}

const Projects = () => {
  const { t } = useLang();


  const projects = t<Project>("projects.projectsList", true);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{t("projects.projectsTitle")}</h2>
        <p className={styles.subtitle}>{t("projects.projectsSubtitle")}</p>
      </div>

      <div className={styles.projects_grid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.project_card}>
            
            <div className={styles.project_image}>
              <img src={project.image} alt={project.title} />

              <div className={styles.project_overlay}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.view_button}
                >
                  {t("projects.viewProject")} →
                </a>
              </div>
            </div>

            <div className={styles.project_content}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className={styles.tech_stack}>
                <span className={styles.tech_label}>
                  {t("projects.technologies")}:
                </span>

                <div className={styles.tech_tags}>
                  {project.tech.map((tech, index) => (
                    <span key={index} className={styles.tech_tag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
