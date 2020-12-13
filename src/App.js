import "./App.css";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Shortener from "./components/Shortener/Shortener";
import Statistics from "./components/Statistics/Statistics";
import CallToAction from "./components/CallToAction/CallToAction";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Shortener />
      <Statistics />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
