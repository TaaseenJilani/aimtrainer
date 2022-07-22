
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
	const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const [target1Style, setTarget1Style] = useState({left: 0, top: 0});
  const [target2Style, setTarget2Style] = useState({left: 0, top: 0});
  const [target3Style, setTarget3Style] = useState({left: 0, top: 0});
  let highscore = 0;

  useEffect(() => {
    let timer = null;
    if(isActive && seconds >= 0){
      timer = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    }

    if(seconds < 0) {
      setSeconds(60);
      setIsActive(false);
      document.getElementById("target1").style.left = '523px';
      document.getElementById("target1").style.top = '300px';
      document.getElementById("target2").style.left = '430px';
      document.getElementById("target2").style.top = '300px';
      document.getElementById("target3").style.left = '650px';
      document.getElementById("target3").style.top = '300px';
    }

    if(!isActive) {
      document.getElementById("target1").style.left = '523px';
      document.getElementById("target1").style.top = '300px';
      document.getElementById("target2").style.left = '430px';
      document.getElementById("target2").style.top = '300px';
      document.getElementById("target3").style.left = '650px';
      document.getElementById("target3").style.top = '300px';
    }


    return () => {
        clearInterval(timer);
    };
  }, [seconds, isActive]);

  useEffect(() => {
    if (seconds < 0) {
      alert("Your score was " + String(count));
      if(count > highscore) {
        localStorage.setItem("highscore", String(count));
      }
      setCount(0);
    }
  }, [count, seconds, highscore]) 

	const handleClick = (event, id) => {
		setCount(count + 1);
    const left = Math.floor(Math.random() * (82 - 10 + 1)) + 10;
    const top = Math.floor(Math.random() * (86 - 10 + 1)) + 10;
    console.log({left, top});     
    if(id === "target1") setTarget1Style({left, top});
    if(id === "target2") setTarget2Style({left, top});
    if(id === "target3") setTarget3Style({left, top});
    if(!isActive) setIsActive(true);
	};

	return (
		<div
			id="background"
			style={{
				width: "100vw",
				height: "100vh",
				backgroundColor: "turquoise",
			}}
		>
			<div
				id="count"
				style={{
					width: "130px",
					height: "40px",
          position: 'absolute',
					backgroundColor: "red",
					textAlign: "Center",
					fontSize: "20px",
					fontWeight: "bold",
					borderRadius: "20px",
          right: '0%',
          top: '1%'
				}}
			>
				Score: {count}
			</div>

      <div 
        id="highscore"
        style = {{
          padding: '7px',
          position: 'absolute',
          width: '130px',
          height: '30px',
          textAlign: 'enter',
          fontSize: "20px",
					fontWeight: "bold",
          backgroundColor: 'Green',
          borderRadius: '13px',
          top: '60px',
          right: '0px'
        }}
        
        >  
        Highscore: {localStorage.getItem("highscore")}
      </div>
      
			<div
				id ="target1"
        onClick={(event) => handleClick(event, 'target1')}
				style={{
          display: 'inline-block',
					width: "50px",
          position: 'absolute',
					height: "50px",
					backgroundColor: "blue",
          borderRadius: '25px',
          top: `${target1Style.top}%`,
          left: `${target1Style.left}%`
				}}
			/>

      <div
				id ="target2"
        onClick={(event) => handleClick(event, 'target2')}
				style={{
          display: 'inline-block',
					width: "50px",
          position: 'absolute',
					height: "50px",
					backgroundColor: "brown",
          borderRadius: '25px',
          top: `${target2Style.top}%`,
          left: `${target2Style.left}%`
				}}
			/>

      <div
				id ="target3"
        onClick={(event) => handleClick(event, 'target3')}
				style={{
          display: 'inline-block',
					width: "50px",
          position: 'absolute',
					height: "50px",
					backgroundColor: "black",
          borderRadius: '25px',
          top: `${target3Style.top}%`,
          left: `${target3Style.left}%`
				}}
			/>

        <div id = "timer"
          style = {{
            width: '300px',
            height:'57px',
            position: 'absolute',
            textAlign: 'center',
            borderRadius: '10px',
            backgroundColor: 'white',
            left: '41%',
            bottom: '0%'
        }}>
        <h2> Time Remaining: {seconds} </h2>
      </div>
        
		</div>
	);
}

export default App;
