import { useEffect } from "react";

import Navbar from "../../components/common/Navbar";
import Hero from "../../components/common/Hero";
import Temp from "../../components/common/Features";
import About from "../../components/common/About";

import { checkBackend } from "../../services/api";

const Home = () => {

  useEffect(() => {
    checkBackend().then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />
      <Hero />
      <Temp />
      <About />
    </div>
  );
};

export default Home;