import { useState } from 'react'
import Button from "./components/Button";
import Alert from './components/Alert';
import "./App.css";

function App() {
  const [fortuneTold, setfortuneTold] = useState(false)
  const [randomFortune, setRandomFortune] = useState("")
  const [fortuneType,setFortuneType] = useState("")
  const [fortuneColour, setFortuneColour] = useState("")
  
  const fortuneList = [
    ["Life will become hard soon.","Unfortunate fortune!!!","danger"],
    ["It is best to be prepared.","Unfortunate fortune!!!","danger"],
    ["Be careful not to overstep.","Unfortunate fortune!!!","danger"],
    ["Pay attention to the people around you.","Unfortunate fortune!!!","danger"],
    ["Things will likely stay the same.","Common fortune!!!","warning"],
    ["Growth is slow. Be patient.","Common fortune!!!","warning"],
    ["Look for quality, not quantity.","Common fortune!!!","warning"],
    ["It does not matter the speed you go so long as you don't stop.","Common fortune!!!","warning"],
    ["You have something to look forward to.","Rare fortune!!!","info"],
    ["Soon, you will notice how many things in your life you are grateful for.","Rare fortune!!!","info"],
    ["Something nice will occur to you unexpectedly.","Rare fortune!!!","info"],
    ["Success is written in your destiny.","Auspicious fortune!!!","primary"],
    ["Your life will be fulfilling and satisfying.","Auspicious fortune!!!","primary"],
  ]

  function decideFortune() {
    setfortuneTold(true)
    const min = 0;
    const max = Object.keys(fortuneList).length;
    const rand = Math.round(min + Math.random() * (max - min));
    console.log(rand);
    console.log("Shit");
    setRandomFortune(fortuneList[rand][0]);
    setFortuneType(fortuneList[rand][1])
    setFortuneColour(fortuneList[rand][2]);
  }

  document.body.style = 'background: lightGrey;';
  return (
    <div className="d-grid col-7 mx-auto " >
      { !fortuneTold &&
      <h1 className='head'>Fortune Teller 5000</h1>}
      { !fortuneTold &&
      <Button onClick={() => decideFortune()}>
        Pick my Fortune
      </Button>
      }
      { fortuneTold &&
      <h1 className='fortune'>{randomFortune}</h1>
      }
      { fortuneTold &&
      <Alert colour= {fortuneColour}>
        {fortuneType}
      </Alert>
      }
      { fortuneTold &&
      <Button onClick={() => setfortuneTold(false)}>
        Get another fortune
      </Button>
      }
    </div>
  )
}

export default App
