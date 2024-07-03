import { Texts } from "./Texts.js";
import { Header } from "./Header.jsx";
import { Panels } from "./Panels.jsx";
import { Footer } from "./Footer.jsx";

import { useState } from "./React";

const INIT_THEME = "dark";
const INIT_LANG = "en";
/**
 * @returns {JSX.Element}
 */
export const App = () => {
  /** @type {["light" | "dark", Function]} */
  const [theme, setTheme] = useState(INIT_THEME);
  /** @type {[Texts, Function]} */
  const [texts, setTexts] = useState(new Texts(INIT_LANG));

  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleChangeLang = () => {
    setTexts(new Texts(texts.anotherLang));
  };

  return (
    <div className={theme}>
      <div className="min-h-screen h-full text-gray-600 dark:text-gray-400 dark:bg-gray-900">
        <Header texts={texts} theme={theme} handleChangeLang={handleChangeLang} handleChangeTheme={handleChangeTheme} />
        <Panels texts={texts} />
        <Footer />
      </div>
    </div>
  );
};
