import React, { useState } from "react";

function LightSwitchButton(props) {
  //const [light, setLight] = useState('off'); //moving it to app
  const {light, switchLight} = props;
  //switchLight has been edited from setLight since in app.js we use switchLight function
  //to operate the logic


  //const handleClick = () => switchLight();//no longer needed since we use switchLight
  //and we are passing it directly to onClick
  return(
    <button onClick={switchLight} className="LightSwitchButton">
    {/* <button onClick={handleClick} className="LightSwitchButton"> */}
      {light === "on" && <span><i>💡</i> I'm on!</span>}
      {light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
}

export default LightSwitchButton;