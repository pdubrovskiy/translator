import { ThemeContext, themes } from "../../contexts/ThemeContext"
import classes from "./ThemeSwitcher.module.css"

const ThemeSwitcher = (props) => {
    return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <div className={classes.container}
          onClick={() => { theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light)}}>
          <div className={`${classes.light} ${classes.theme}`}><div className={`${classes.icon_light} ${classes.icon}`}></div>Light</div>
          <div className={`${classes.dark} ${classes.theme}`}><div className={`${classes.icon_dark} ${classes.icon}`}></div>Dark</div>
        </div>
      )}
    </ThemeContext.Consumer>
    );
}


export default ThemeSwitcher;