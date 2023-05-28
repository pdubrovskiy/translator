import classes from "./Header.module.css";

const Header = (props) => {
    return(
        <header>
        <div className={classes.logo}>Translator</div>
        <a href="https://github.com/fireeflyx/translator/blob/main/README.md" className={classes.about_link}>About</a>
        </header>
    )
}

export default Header;