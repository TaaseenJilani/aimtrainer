
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
	const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(60);

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
      document.getElementById("target1").style.marginLeft = '523px';
      document.getElementById("target1").style.marginTop = '300px';
      document.getElementById("target2").style.marginLeft = '430px';
      document.getElementById("target2").style.marginTop = '300px';
      document.getElementById("target3").style.marginLeft = '650px';
      document.getElementById("target3").style.marginTop = '300px';
    }


    return () => {
        clearInterval(timer);
    };
  }, [seconds, isActive]);

  useEffect(() => {
    if (seconds < 0) {
      alert("Your score was " + String(count));
      setCount(0);
    }
  }, [count, seconds]) 

	const handleClick = event => {
		setCount(count + 1);
    const newHorizontalPosition = Math.floor(Math.random() * (1200 - 50 + 1)) + 50;
    const newVerticalPosition = Math.floor(Math.random() * (700 - 50 + 1)) + 50;
    event.currentTarget.style.marginLeft = String(newHorizontalPosition) + 'px';
    event.currentTarget.style.marginTop = String(newVerticalPosition) + 'px';
    if(!isActive) setIsActive(true);
	};
	return (
		<div
			id="background"
			style={{
				width: '100vw',
				height: "100vh",
				backgroundColor: "turquoise",
			}}
		>
			<div
				id="count"
				style={{
					marginLeft: "auto",
          marginRight: '20px',
					width: "130px",
					height: "50px",
					backgroundColor: "red",
					textAlign: "Center",
					fontSize: "20px",
					fontWeight: "bold",
					borderRadius: "20px",
				}}
			>
				Score: {count}
			</div>
			<div
				id ="target1"
        onClick={handleClick}
				style={{
          display: 'inline-block',
					width: "50px",
          position: 'absolute',
					height: "50px",
					backgroundColor: "blue",
          borderRadius: '25px',
          marginLeft: '523px',
          marginTop: '300px'
				}}
			/>

      <div
				id ="target2"
        onClick={handleClick}
				style={{
          display: 'inline-block',
					width: "50px",
          position: 'absolute',
					height: "50px",
					backgroundColor: "brown",
          borderRadius: '25px',
          marginLeft: '400px',
          marginTop: '300px'
				}}
			/>

      <div
				id ="target3"
        onClick={handleClick}
				style={{
          display: 'inline-block',
					width: "50px",
          position: 'absolute',
					height: "50px",
					backgroundColor: "black",
          borderRadius: '25px',
          marginLeft: '650px',
          marginTop: '300px'
				}}
			/>

        <div id = "timer"
        style = {{
          marginTop: '800px',
          marginLeft: '500px',
          width: '300px',
          height:'40px',
          textAlign: 'center',
          borderRadius: '10px',
          backgroundColor: 'white'
        }}>
        <h2> Time Remaining: {seconds} </h2>
      </div>
        
		</div>
	);
}

export default App;
