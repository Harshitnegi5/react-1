import React,{useState} from "react";
import Hero from "./components/Hero/Hero";
import Background from "./components/Background/Background";
import Navbar from "./components/navbar/navbar";

const App = () => {
  let herodata = [
    {
      text1: "Dive into",
      text2: "what you love",
    },
    {
      text1: "Indulge",
      text2: "your passions",
    },
    {
      text1: "Give in to",
      text2: "your passions",
    },
  ]


  const [heroCount, setheroCount] = useState(1);
  const [playStatus, setplayStatus] = useState(true)
  return (
    <div>
      {/* <Hero/> */}
      <Background playStatus={playStatus} setplayStatus={setplayStatus} heroCount={heroCount}/> 
      {/* <Navbar/ */}
    </div>
  );
};

export default App;
