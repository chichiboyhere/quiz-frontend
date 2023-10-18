import React, { useContext, useState, useEffect } from 'react';
import { QuizContext } from '../../../../context/QuizContext';
import { FaHome } from "react-icons/fa";
import './end.css';
import { AuthContext } from '../../../../context/AuthContext';
import axios from 'axios';
import {Link,  useNavigate } from 'react-router-dom';

const End = () => {
    const [error, setError] = useState(false);
    const { gameState, setGameState } = useContext(QuizContext);
    const { score, setScore } = useContext(QuizContext);
    const { timer, setTimer } = useContext(QuizContext);
    const { enteredTable, setEnteredTable } = useContext(QuizContext);
    const { verdict, setVerdict } = useContext(QuizContext);
    const { questionCounter, setQuestionCounter } = useContext(QuizContext);

    const d = new Date();
    var minutes;
   
    
    if(d.getMinutes()<10) {
        minutes="0"+d.getMinutes();
    } else {
        minutes = d.getMinutes();

    }

    const { user} = useContext(AuthContext);

     // This is calculating the user's speed
  const speedCalculator = (marks, timeSpent) => {
    const speed = parseInt(marks) / parseInt(timeSpent);
    return speed.toFixed(2);
  };
  let speed = speedCalculator(parseInt(score), 60);

 
  // useEffect(() =>{
  //   if (speed >= 0.45){
  //     setVerdict("Wow, that was quite fast! Good job!"); 
     
  //    }
  //    else if (speed < 0.45 && speed > 0.35){
  //     setVerdict("Your speed was good. There is room for improvement though!");
      
  //    }
  //    else{
  //     setVerdict("That wasn't fast enough. Try harder, next time!");
      
  //    }
  // },[speed]);
  const navigate = useNavigate();

  const handleSave = async (e) => {
    e.preventDefault(); 
   try{
      const newPost = {
       score:score,
	   questionCount:questionCounter,
	   user:user
      };

      await axios.post("/multiplicationResult/postResult", newPost);
      
      navigate("/")
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };


    //Try again - show main screen, set score back to 0, set counter back to 240 seconds
    const reStart = () => {
        setScore(0);
        setTimer(60);
        setGameState("start");
        setEnteredTable("")
        setQuestionCounter(1)
    }

    return <div className="End fadeIn delay-0_3">
        <div className="terminal-wrapper">
            <div className="terminal-top ">
                <div className="top-left">
                    <div className="red circle ">

                    </div>
                    <div className="yellow circle">

                    </div>
                    <div className="green circle">

                    </div>
                </div>
                <div className="top-mid">
                    <div className="house ">
                        <FaHome />
                    </div>
                    <span className="">Multiplication Game</span>
                </div>
                <div>

                </div>
            </div>
            <div className="terminal-bot">
                {/* End message */}
                <p className="terminal-prompt last-login">Multiplication Game</p>


                {user ? <p className="terminal-prompt mt-25 terminal-msg"><span className="terminal-green">{d.getHours()}:{minutes} </span>Ok {user.name}</p>:  <p className="terminal-prompt mt-25 terminal-msg"><span className="terminal-green">{d.getHours()}:{minutes} </span> Ok, friend</p>}
               
                <p className="terminal-prompt terminal-msg"><span className="terminal-green">{d.getHours()}:{minutes} </span> our journey has come to an end.</p>
                {/* Score */}
                <p className="terminal-prompt terminal-msg"><span className="terminal-green">{d.getHours()}:{minutes} </span>  You scored: {score} / {questionCounter} (
                  {(score / questionCounter).toFixed(2) * 100}%)</p>
                
               
                {/* Depends on score get different message */}
                <p className="terminal-prompt terminal-msg"><span className="terminal-green">{d.getHours()}:{minutes} </span>  </p>
                {/* End question */}
                <div className="mt-25 terminal-prompt terminal-text">
                    <p className="terminal-green">{d.getHours()}:{minutes}</p>
                    <p className="pl-7">Not satisfied? <button onClick={() => { reStart(); }} className="startBtn button-transition">Try again</button></p>
                </div>
                
                {/* Save Result */}
               {user? <div className="mt-25 terminal-prompt terminal-text">
                    <p className="terminal-green">{d.getHours()}:{minutes}</p>
                    <p className="pl-7">Want to save the result? <button onClick={handleSave} className="startBtn button-transition">Save Result</button></p>
                </div>: <Link to="/login"><button className="startBtn button-transition">Login to Save Result</button></Link>}
            </div>
        </div>
    </div>
};

export default End;