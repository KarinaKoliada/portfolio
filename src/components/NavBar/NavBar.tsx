import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useMyContext } from "../Contexts/Contexts";
import { useCategory } from "../Contexts/CategoryContext";
import MobMenu from "../MobMenu/MobMenu";
import Close from "assets/close.svg";
import Menu from "assets/burger-menu.svg";
import LanguageSwitcher from "components/LanguageSwitcher/LanguageSwitcher";
import styles from "./NavBar.module.scss";
import { useLang } from "components/Contexts/LangContext";

export const NavBar: React.FC = () => {
  const { isMenuOpen, setIsMenuOpen } = useMyContext();
  const { currentCategory } = useCategory();
  const { t } = useLang();
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const menuId = "mobile-navigation";

  const links = [
    { path: "/", titleKey: "header.home" },
    { path: "/projects", titleKey: "header.projects" },
    { path: "/about", titleKey: "header.about" },
    { path: "/contact", titleKey: "header.contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [setIsMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      setTimeout(() => firstLinkRef.current?.focus(), 0);
    }
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <Link
            to="/"
            className={styles.logo_link}
            onClick={() => setIsMenuOpen(false)}
          >
            <p className={styles.logo_title}>Karina Koliada</p>
          </Link>
        </div>

        <nav className={styles.desktopNav} aria-label="Main navigation">
          {links.map((link, i) => (
            <Link
              key={link.path}
              ref={i === 0 ? firstLinkRef : null}
              to={link.path}
              className={`${styles.navLink} ${
                currentCategory === t(link.titleKey).toLowerCase()
                  ? styles.isActive
                  : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t(link.titleKey).toUpperCase()}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <LanguageSwitcher className={styles.languageSwitcher} />

          <button
            className={styles.burger}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <img
              className={styles.burger_image}
              src={isMenuOpen ? Close : Menu}
              alt={isMenuOpen ? "Close menu" : "Open menu"}
            />
          </button>
        </div>

        <MobMenu />
      </div>
    </header>
  );
};
