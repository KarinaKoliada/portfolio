import { useLang } from "components/Contexts/LangContext";
import styles from "./Contacts.module.scss";

const Contacts = () => {
  const { t } = useLang();

  const contactItems = [
    {
      icon: "📧",
      label: t("contact.email"),
      value: "koladakarina1112@gmail.com",
      link: "mailto:koladakarina1112@gmail.com",
    },
    {
      icon: "💼",
      label: t("contact.linkedin"),
      value: "LinkedIn Profile",
      link: "https://www.linkedin.com/in/karina-k-543521263/",
    },
    {
      icon: "👨‍💻",
      label: t("contact.github"),
      value: "GitHub",
      link: "https://github.com/karinakoliada",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t("contact.title")}</h2>
          <p className={styles.subtitle}>{t("contact.subtitle")}</p>
        </div>

        <div className={styles.contact_grid}>
          {contactItems.map((item, index) => (
            <div key={index} className={styles.contact_card}>
              <div className={styles.icon}>{item.icon}</div>
              <div className={styles.info}>
                <span className={styles.label}>{item.label}</span>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.value}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className={styles.value}>{item.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
