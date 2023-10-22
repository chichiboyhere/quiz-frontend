import './resultItem.css';
import Card from '../UI/card/Card'


const ResultItem =(props)=> {
  
  return (
  <li>
    <Card className="result-item">
      {/* <ResultTime time={props.time}/> */}
      <div>Time: {props.createdAt} </div>
      <div className="result-item__description">
        <h2>Score: {props.score}/{props.questionCount}</h2>
        <div className="result-item__speed"> Speed:{props.score /60} </div>
      </div>
    </Card>
   </li>
  );
}

export default ResultItem;
