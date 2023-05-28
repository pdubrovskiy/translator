import classes from "./Footer.module.css";

const Footer = (props) => {
    return(
        <footer className={classes.footer}>
        <a href="https://github.com/fireeflyx" className={classes.footer_link}>created by fireeflyx</a>
        </footer>
    );
}

export default Footer;