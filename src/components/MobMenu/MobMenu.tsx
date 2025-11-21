import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMyContext } from "../Contexts/Contexts";
import styles from "./MobMenu.module.scss";
import { useLang } from "components/Contexts/LangContext";

const MobMenu = () => {
  const menuId = "mobile-navigation";
  const { isMenuOpen, setIsMenuOpen } = useMyContext();
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const [activeLink, setActiveLink] = useState("home");

  const { t } = useLang();

  const links = [
    { path: "/", titleKey: "header.home" },
    { path: "/projects", titleKey: "header.projects" },
    { path: "/about", titleKey: "header.about" },
    { path: "/contact", titleKey: "header.contact" },
  ];

  useEffect(() => {
    if (!isMenuOpen) {
      (document.activeElement as HTMLElement)?.blur();
    }
  }, [isMenuOpen]);

  const handleLinkClick = (linkTitleKey: string) => {
    setActiveLink(t(linkTitleKey).toLowerCase());
    setIsMenuOpen(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div
      id={menuId}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
      aria-hidden={!isMenuOpen}
      className={`${styles.mobileOverlay} ${isMenuOpen ? styles.open : ""}`}
      onClick={handleBackdropClick}
    >
      <div
        className={styles.backdrop}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
        tabIndex={-1}
      />
      <div className={`${styles.panel} ${isMenuOpen ? styles.active : ""}`}>
        <nav className={styles.BurgerMenu_pages} aria-label="Mobile menu pages">
          {links.map((link, idx) => (
            <Link
              key={link.titleKey}
              to={link.path}
              ref={idx === 0 ? firstLinkRef : null}
              className={`${styles.BurgerMenu_link} ${
                activeLink === t(link.titleKey).toLowerCase()
                  ? styles.isActive
                  : ""
              }`}
              onClick={() => handleLinkClick(link.titleKey)}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              {t(link.titleKey).toUpperCase()}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobMenu;
