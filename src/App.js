import React, { useEffect } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner.jsx";
import scrollreveal from "scrollreveal";
const App = () => {

  
  useEffect(() => {
    const animationEffect = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(`.header,.banner`,{
        interval: 500
      });
    }
  
    animationEffect();
    return () => {
      animationEffect();
    }
  }, [])
  return (
    <div>
      <Header />
      <Banner/>
    </div>
  );
};

export default App;
