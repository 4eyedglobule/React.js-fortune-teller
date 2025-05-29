import { useState } from "react";
import Button from "./components/Button";
import "./App.css";
import fortune from "./assets/fortune.jpg";

function App() {
  const [fortuneTold, setfortuneTold] = useState(false);
  const [randomFortune, setRandomFortune] = useState("");
  const [fortuneType, setFortuneType] = useState("");
  const [fortuneClass, setFortuneClass] = useState("");

  const fortuneList = [
    ["Life will become hard soon.", "Unfortunate fortune", "unfortunate"],
    ["It is best to be prepared.", "Unfortunate fortune", "unfortunate"],
    ["Be careful not to overstep.", "Unfortunate fortune", "unfortunate"],
    [
      "Pay attention to the people around you.",
      "Unfortunate fortune",
      "unfortunate",
    ],
    ["Things will likely stay the same.", "Common fortune", "common"],
    ["Growth is slow. Be patient.", "Common fortune", "common"],
    ["Look for quality, not quantity.", "Common fortune", "common"],
    [
      "It does not matter the speed you go so long as you don't stop.",
      "Common fortune",
      "common",
    ],
    ["You have something to look forward to.", "Rare fortune", "rare"],
    [
      "Soon, you will notice how many things in your life you are grateful for.",
      "Rare fortune",
      "rare",
    ],
    ["Something nice will occur to you unexpectedly.", "Rare fortune", "rare"],
    ["Success is written in your destiny.", "Auspicious fortune", "auspicious"],
    [
      "Your life will be fulfilling and satisfying.",
      "Auspicious fortune",
      "auspicious",
    ],
  ];

  function decideFortune() {
    setfortuneTold(true);
    const min = 0;
    const max = Object.keys(fortuneList).length;
    const rand = Math.floor(Math.random() * fortuneList.length);
    setRandomFortune(fortuneList[rand][0]);
    setFortuneType(fortuneList[rand][1]);
    setFortuneClass(fortuneList[rand][2]);
  }

  document.body.style.background = "linear-gradient(45deg, #ed3512, #ffcc00)";
  document.body.style.backgroundSize = "cover"; // or "100% 100%"
  document.body.style.height = "100vh"; 
  return (
    <div className="back">
      {!fortuneTold && <h1 className="head">Fortune Teller</h1>}
      {!fortuneTold && (
        <img
          src={fortune}
          alt="Fortune"
          style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
        />
      )}
      {!fortuneTold && (
        <div style={{ width: "300px", marginTop: "20px", marginLeft: 'auto',marginRight: 'auto',}}>
          <Button onClick={() => decideFortune()}>Pick my Fortune</Button>
        </div>
      )}
      {fortuneTold && <h1 className="fortune">{randomFortune}</h1>}
      {fortuneTold && <h1 className={fortuneClass}>[{fortuneType}]</h1>}
      {fortuneTold && (
        <div style={{ width: "300px", marginTop: "20px", marginLeft: 'auto',marginRight: 'auto',}}>
          <Button onClick={() => setfortuneTold(false)}>
            Get another fortune
          </Button>
        </div>
      )}
    </div>
  );
}

export default App;
