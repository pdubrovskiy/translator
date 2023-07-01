import Header from "./components/Header/Header";
import classes from "./App.scss";
import ThemeSwitcher from "./utils/ThemeSwitcher/ThemeSwitcher";
import Footer from "./components/Footer/Footer";
import TranslateContainer from "./components/InputFields/InputFields";

function App() {
  return (
    <div className="wrapper">
    <Header />
    <TranslateContainer />
    <ThemeSwitcher />
    <Footer />
    </div>
  );
}

export default App;
