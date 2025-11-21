import { useLang } from "components/Contexts/LangContext";
import styles from "./LanguageSwitcher.module.scss";

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className }) => {
  const { lang, setLang } = useLang();

  const toggleLang = () => {
    setLang(lang === "en" ? "de" : "en");
  };

  return (
    <div className={className}>
      <button className={styles.btn} onClick={toggleLang}>
        {lang.toUpperCase()}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
