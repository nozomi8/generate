import { useState } from "react";

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

export default function App() {
    const [showStory, setShowStory] = useState(false);
    const [xItem,setXItem] = useState("");
    const [yItem,setYItem] = useState("");
    const [zItem,setZItem] = useState("");
    const [ukus,setUkus] = useState("us");
    const [customName, setCustomName] = useState("")
    const [name, setName] = useState("Bob")
    const xArray = ["Willy the Goblin","Big Daddy","Father Christmas"]
    const yArray = ["the soup kitchen","Disneyland","the White House"]
    const zArray = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"]

    function generateStory() {
      setXItem(randomValueFromArray(xArray));
      setYItem(randomValueFromArray(yArray));
      setZItem(randomValueFromArray(zArray));
      setName(customName || "Bob")
      setShowStory(true);
    }

    return (
      <>
        <div>
          <label htmlFor="customname">Enter custom name:</label>
          <input 
            type="text"
            placeholder="" 
            id="customName"
            value={customName}
            onChange={(e) => setCustomName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="us">US</label>
          <input 
            type="radio" 
            value="us" 
            checked={ukus === "us"} 
            onChange={() => setUkus("us")} 
          />
          <label htmlFor="uk">UK</label>
          <input 
            type="radio"
            value="uk"
            checked={ukus === "uk"} 
            onChange={() => setUkus("uk")} 
          />
        </div>
        <div>
          <button onClick={generateStory}>Generate random story</button>
        </div>
        {showStory && (
          <p>
            It was 94 fahrenheit outside, so {xItem} went for a walk. When they
            got to {yItem}, they stared in horror for a few moments, then {zItem}.
            {name} saw the whole thing, but was not surprised — {xItem} weighs 300
            pounds, and it was a hot day.
          </p>
        )}
      </>
    );
  }