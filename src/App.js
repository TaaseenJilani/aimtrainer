
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
	const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(10);
  // let timer = null;
  // if(isActive && seconds >0){
  //   timer = setInterval(() => {
  //     console.log(seconds);
  //     setSeconds(seconds - 1);
  //   }, 1000);
  // }

  // if(seconds === 0) {
  //   alert("Your score was " + String(count));
  //   setSeconds(60);
  //   setCount(0);
  //   setIsActive(false);
  //   clearInterval(timer);
  // }

  useEffect(() => {
    // console.log('entering');
    let timer = null;
    if(isActive && seconds > 0){
      timer = setInterval(() => {
        setSeconds(seconds - 1);
        console.log(seconds);
      }, 1000);
    }

    if(seconds === 0) {
      alert("Your score was " + String(count));
      setSeconds(60);
      setCount(0);
      setIsActive(false);
    }

    // if(seconds === 0) {
    //   clearInterval(timer);
    // }
    return () => {
      // if(seconds === 0) {
        clearInterval(timer);
      // }
    };
  });

	const handleClick = event => {
		setCount(count + 1);
    const newHorizontalPosition = Math.floor(Math.random() * (1200 - 0 + 1)) + 0;
    const newVerticalPosition = Math.floor(Math.random() * (700 - 0 + 1)) + 0;
    event.currentTarget.style.marginLeft = String(newHorizontalPosition) + 'px';
    event.currentTarget.style.marginTop = String(newVerticalPosition) + 'px';
    setIsActive(true);
	};
	return (
		<div
			className="background"
			style={{
				width: '100vw',
				height: "100vh",
				backgroundColor: "turquoise",
			}}
		>
			<div
				className="count"
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
				className ="target1"
        onClick={handleClick}
				style={{
          display: 'inline-block',
					width: "50px",
          position: 'absolute',
					height: "50px",
					backgroundColor: "blue",
          borderRadius: '25px',
          marginLeft: '500px',
          marginTop: '300px'
				}}
			/>

      <div
				className ="target2"
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
				className ="target3"
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

        <div className = "timer"
        style = {{
          marginTop: '800px',
          marginLeft: '500px',
          width: '300px',
          height:'40px',
          textAlign: 'center',
          borderRadius: '10px',
          backgroundColor: 'turquoise'
        }}>
        <h2> Time Remaining: {seconds} </h2>
      </div>
        
		</div>
	);
}

export default App;
