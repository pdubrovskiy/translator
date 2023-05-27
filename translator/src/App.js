import Header from "./components/Header/Header";
import classes from "./App.css";
import InputFields from "./components/InputFields/InputFields";
import ThemeSwitcher from "./utils/ThemeSwitcher/ThemeSwitcher";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="wrapper">
    <Header />
    <InputFields />
    <ThemeSwitcher />
    <Footer />
    </div>
  );
}

export default App;
