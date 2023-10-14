import React, { useContext } from 'react';
import { QuizContext } from '../../../../context/QuizContext';
import { FaHome } from "react-icons/fa"
import './start.css';

const Start = () => {
    const { gameState, setGameState } = useContext(QuizContext);
    const { enteredTable, setEnteredTable } = useContext(QuizContext);
    const d = new Date();
    var minutes;

    if(d.getMinutes() < 10) {
        minutes="0"+d.getMinutes();
    } else {
        minutes = d.getMinutes();
    }

     // Table change handler
    const tableChangeHandler = (event) => {
        setEnteredTable(event.target.value);
    };

    return <div className="Main">
        <div className="terminal-wrapper fadeIn">
            <div className="terminal-top ">
                <div className="top-left">
                    <div className="red circle delay-0_5 fadeIn">

                    </div>
                    <div className="yellow circle delay-0_7 fadeIn">

                    </div>
                    <div className="green circle delay-0_9 fadeIn">

                    </div>
                </div>
                <div className="top-mid delay-1_3 fadeIn">
                    <div className="house ">
                        <FaHome />
                    </div>
                    <span className="">Multiplication Game</span>
                </div>
                <div>
                </div>
            </div>
            <div className="terminal-bot">
                {/* Welcome message */}
                <p className="terminal-prompt last-login fadeIn delay-2">Hello User! Ready for the Multiplication Game?</p>
               
                <p className="terminal-prompt fadeIn delay-4_5"><span className="terminal-green">{d.getHours()}:{minutes}</span> Please enter a multiplication table limit</p>
                <p className="terminal-prompt fadeIn delay-4_5"><span className="terminal-green">{d.getHours()}:{minutes}</span>
                &nbsp;
                <label htmlFor="enter_multiplication_table_limit"></label>
                    <input
                    id="enter_multiplication_table_limit"
                    type="number"
                    value={enteredTable}
                    onChange={tableChangeHandler}
                    required
                    />
                </p>
                {/* Start button */}
                <div className="mt-10 terminal-prompt terminal-text terminal-start">
                    <p className="terminal-green fadeIn delay-10">{d.getHours()}:{minutes}
                    <button  disabled={enteredTable === "" } onClick={() => { setGameState("quiz"); }} className="fadeIn delay-10_5 startBtn button-transition">Start</button>
                    </p>
                    
                </div>
            </div>
        </div>
    </div>
};

export default Start;