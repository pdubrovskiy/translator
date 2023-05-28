import { ThemeContext, themes } from "../../contexts/ThemeContext"
import classes from "./ThemeSwitcher.module.css"

const ThemeSwitcher = (props) => {
    return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <div className={classes.container}
          onClick={() => { theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light)}}>
          <div className={`${classes.light} ${classes.theme}`}>Light</div>
          <div className={`${classes.dark} ${classes.theme}`}>Dark</div>
        </div>
      )}
    </ThemeContext.Consumer>
    );
}


export default ThemeSwitcher;