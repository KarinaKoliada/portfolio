/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { locales } from "locales";

type Lang = "en" | "de";

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t(path: string): string;
  t<T = unknown>(path: string, returnArray: true): T[];
}

const LangContext = createContext<LangContextType | undefined>(undefined);

interface LangProviderProps {
  children: ReactNode;
}

export const LangProvider = ({ children }: LangProviderProps) => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang");
    return saved === "en" || saved === "de" ? saved : "en";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const t = (path: string, returnArray = false): any => {
    let result: unknown = locales[lang];

    for (const key of path.split(".")) {
      if (typeof result === "object" && result !== null && key in result) {
        result = (result as Record<string, unknown>)[key];
      } else {
        return returnArray ? [] : "";
      }
    }

    if (returnArray && Array.isArray(result)) {
      return result;
    }

    if (typeof result === "string") {
      return result;
    }

    if (Array.isArray(result)) {
      return result[0] || "";
    }

    return "";
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = (): LangContextType => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
};