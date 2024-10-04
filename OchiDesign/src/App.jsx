import About from "./components/About";
import Cards from "./components/Cards";
import Eye from "./components/Eye";
import Eyes from "./components/Eyes";
import Feature from "./components/Feature";
import Landing from "./components/Landing";
import Marqee from "./components/Marqee";
import Navbar from "./components/Navbar";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="w-full min-h-screen bg-zinc-900 text-white">
        <Navbar />
        <Landing />
        <Marqee />
        <About />
        <Eyes />
        <Feature />
        <Cards />
        <Eye />
      </div>
    </>
  );
}

export default App;
