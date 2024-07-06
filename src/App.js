import "./App.css";
import Navigation from "./customer/components/Navigation/Navigation.jsx";
import HomePage from "./customer/Pages/HomePage/HomePage";
import Footer from "./customer/components/FooterData/Footer.jsx";
function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        <HomePage />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
