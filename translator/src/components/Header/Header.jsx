import classes from "./Header.module.css";

const Header = (props) => {
    return(
        <header>
        <div className={classes.logo}>Translator</div>
        <a href="https://github.com/fireeflyx/translator/blob/main/README.md" className={classes.about_link}><div className={classes.icon}></div>About</a>
        </header>
    )
}

export default Header;