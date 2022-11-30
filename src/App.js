import "./App.css";
import Header from "./component/Header1";
import Hero from "./component/Hero";
import Slider from "./component/Slider";
import Virtual from "./component/Virtual";
import Products from "./component/Products";
import Testimonials from "./component/Testimonials";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
