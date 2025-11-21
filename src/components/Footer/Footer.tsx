import { Link, useLocation } from "react-router-dom";
import Stroke from "assets/arrow.svg";
import styles from "./Footer.module.scss";
import { useLang } from "components/Contexts/LangContext";

const Footer = () => {
  const location = useLocation();
  const { t } = useLang();

  const links = [
    {
      path: "https://github.com/KarinaKoliada/",
      title: "footer.github",
      external: true,
    },
    { path: "/contact", title: "footer.contact" },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_logo}>
        <Link to="/" className={styles.logo_link}>
          <p className={styles.logo_title}>Karina Koliada</p>
        </Link>
      </div>

      <nav aria-label="Footer navigation" className={styles.nav}>
        {links.map((link) =>
          link.external ? (
            <a
              key={link.title}
              href={link.path}
              className={styles.nav_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t(link.title).toUpperCase()}
            </a>
          ) : (
            <Link
              key={link.title}
              to={link.path}
              className={`${styles.nav_link} ${
                location.pathname === link.path ? styles.isActive : ""
              }`}
            >
              {t(link.title).toUpperCase()}
            </Link>
          )
        )}
      </nav>

      <div className={styles.back}>
        <span className={styles.back_text}>{t("footer.back")}</span>
        <button
          className={styles.back_btn}
          onClick={handleScrollToTop}
          aria-label="Back to top"
        >
          <img className={styles.back_img} src={Stroke} alt="" loading="lazy" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
