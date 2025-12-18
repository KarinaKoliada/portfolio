import { useLang } from "components/Contexts/LangContext";
import Me from "assets/karina.png";
import Stars from "assets/stars.png";
import styles from "./Home.module.scss";
import Circle from "assets/circle.svg";
import Strokes from "assets/strokes.svg";

const Home = () => {
  const { t, lang } = useLang();

  const cvLink = lang === "de"
    ? "/Koliada_lebenslauf.pdf"
    : "/Koliada_CV.pdf";
  
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h3 className={styles.subtitle}>{t("hero.title")}</h3>
        <h1 className={styles.title}>{t("hero.part1")}</h1>
        <h1 className={styles.title}>{t("hero.part2")}</h1>
        <p className={styles.description}>{t("hero.subtitle")}</p>

        <a
          href={cvLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          {t("hero.resume")}
        </a>
      </div>

      <div className={styles.imageContainer}>
        <svg width="0" height="0" className={styles.svgDefs}>
          <defs>
            <clipPath
              id="circleClip"
              clipPathUnits="objectBoundingBox"
              transform="scale(0.00203, 0.00203)"
            >
              <path d="M244.33 0.65625C329.356 -2.34802 418.26 38.0835 460.778 103.39C503.292 168.78 499.498 259.152 470.485 326.715C441.489 394.148 387.218 438.755 326.908 465.895C267.15 492.736 201.546 502.24 144.726 480.45L143.385 479.93L142.045 479.397C85.4086 456.617 37.7939 402.521 14.9658 333.776C-7.95276 264.576 -5.57436 180.566 36.1367 115.425C77.9457 50.1817 159.226 3.66019 244.33 0.65625Z" />
            </clipPath>
          </defs>
        </svg>

        <div className={styles.photoWrapper}>
          <img src={Me} alt="Karina" className={styles.photo} />
        </div>

        <svg
          className={styles.circle}
          viewBox="0 0 493 493"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M244.33 0.65625C329.356 -2.34802 418.26 38.0835 460.778 103.39C503.292 168.78 499.498 259.152 470.485 326.715C441.489 394.148 387.218 438.755 326.908 465.895C267.15 492.736 201.546 502.24 144.726 480.45L143.385 479.93L142.045 479.397C85.4086 456.617 37.7939 402.521 14.9658 333.776C-7.95276 264.576 -5.57436 180.566 36.1367 115.425C77.9457 50.1817 159.226 3.66019 244.33 0.65625Z"
            stroke="#7D6542"
            strokeWidth="1"
            fill="none"
          />
        </svg>

        <img src={Stars} alt="Stars" className={styles.stars} />
        <img src={Circle} alt="circle" className={styles.circle2} />
        <img src={Strokes} alt="strokes" className={styles.strokes} />
      </div>
    </div>
  );
};

export default Home;
