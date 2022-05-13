import React, { useState } from "react";

function TextRepeaterButton(props) {
  const [repetitions, setRepetitions] = useState(1);

  const textArray = [];
  //run repetition number of times
  //i is 0 , repetition = 1 > prints text
  //i is 1 repet = 1 > prints text
  //i is 2 repet = 1
  //we exit the the loop
  //click happens repeptition is 2
 
  for (let i = 0; i < repetitions; i++) {
    textArray.push(<span key={i}>I like this text</span>);
  }

  const handleClick = () => {
    setRepetitions(repetitions + 1);
  }
 
  return(
    <button onClick={handleClick} className="TextRepeaterButton" >
      {textArray}
    </button>
  );
}

export default TextRepeaterButton;