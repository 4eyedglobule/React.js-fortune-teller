import { useState } from 'react'
import Button from "./components/Button";
import Alert from './components/Alert';
import "./App.css";

function App() {
  const [fortuneTold, setfortuneTold] = useState(false)
  const pickFortune = () => {
    
  }

  document.body.style = 'background: lightGrey;';
  return (
    <div className="d-grid col-7 mx-auto " >
      { !fortuneTold &&
      <h1 className='head'>Fortune Teller 5000</h1>}
      { !fortuneTold &&
      <Button onClick={() => setfortuneTold(true)}>
        Pick my Fortune
      </Button>
      }
      { fortuneTold &&
      <h1 className='fortune'>You will eat a toilet today</h1>
      }
      { fortuneTold &&
      <Alert colour="info">
        Auspicious fortune!!!
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
