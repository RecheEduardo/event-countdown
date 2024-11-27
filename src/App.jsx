import "./App.css";
import "./App.scss";

import EventMaker from "./components/EventMaker";
import EventCountdown from "./components/EventCountdown";
import { useState } from "react";

function App() {
  // Contador do nível do site
  const [count, setCount] = useState(0);


  // Elementos definidos e utilizados na aplicação:
  const [colorTheme, setColorTheme] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const [bgImage , setBgImage] = useState("");
  const [eventDate , setEventDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!eventTitle || !bgImage || !eventDate){
      return;
    }

    setCount((prevCount) => prevCount + 1); 
  };

  const appLevel = [
    <EventMaker
      onSubmit={handleSubmit} 
      colorTheme={setColorTheme} 
      eventTitle={setEventTitle} 
      bgImage={setBgImage}
      eventDate={setEventDate}
    />,
    <EventCountdown 
      colorTheme={colorTheme} 
      eventTitle={eventTitle} 
      bgImage={bgImage}
      eventDate={eventDate}
    />
  ];

  return (
    <>
      {appLevel[count]}
    </>
  );
}

export default App;
