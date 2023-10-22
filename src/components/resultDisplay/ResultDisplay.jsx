import React, {useState} from "react";
import ResultList from "../resultList/ResultList";
import  "./resultDisplay.css";


const ResultDisplay = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  // show all results handler
  const showResultsHandler =()=>{
    setIsOpen(true);
  }
  // close result handler
  const closeResultsHandler =()=>{
    setIsOpen(false);
  }

  return (
    <div className="result-display">
      {!isOpen && <button onClick={showResultsHandler}>All Saved Results</button>}
      {isOpen && <ResultList results={props.results} onCancel={closeResultsHandler}/>}
    </div>
    
  );
};
export default ResultDisplay;