import "./App.css";
import Navigation from "./customer/components/Navigation/Navigation.jsx";
import HomePage from "./customer/Pages/HomePage/HomePage";
import Footer from "./customer/components/FooterData/footer.jsx";
function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        <HomePage />
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
