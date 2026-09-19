import Toggle from "./Toogle";
import { ThemeContext, themes } from "../context/ThemeContext";

import App from "../App";
const Root = () => (
  <ThemeContext.Consumer>
    {({ theme, setTheme }) => (
      <>
        <Toggle
          onChange={() => {
            if (theme === themes.light) setTheme(themes.dark);
            if (theme === themes.dark) setTheme(themes.light);
          }}
          value={theme === themes.dark}
        />
        <App />
      </>
    )}
  </ThemeContext.Consumer>
);

export default Root;
