import { useState } from 'react'

const StatisticsLine = (props) => {
  return (
    <>
      <tr>
        <td>{props?.name}</td>
        <td>{props?.total}</td>
      </tr>
    </>
  )
}

const Statistics = (props) => {
  const average = props?.score / props.total;
  let allGood = 0;
  return (
    <>
      {
        props?.total === 0 ? (
          <p>No feedback given</p>
        ) : 
        <>
          <table>
            <tbody>
              {props.stats.map((data) => {
                if (data?.name === 'Good') {
                  allGood += data?.total;
                }
                return (
                  <StatisticsLine key={data?.name} name={data?.name} total={data?.total}/>
                )
              })}
              <StatisticsLine key={'all'} name={'All'} total={props?.total}/>
              <StatisticsLine key={'average'} name={'Average'} total={average}/>
              <StatisticsLine key={'percentage'} name={'Positive'} total={(allGood/props.total) * 100}/>
            </tbody>
          </table>
        </>
      }
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [score, setScore] = useState(0)

  const handleClick = (name) => {
    let totalData = 0;
    let totalGood = good;
    let totalNeutral = neutral;
    let totalBad = bad;
    let scoreData = 0;
    if (['good', 'neutral', 'bad'].includes(name)) {
      if (name === 'good') {
        totalGood = good+1
        totalData = total + 1;
        setGood(totalGood)
      } else if (name === 'neutral') {
        totalNeutral = neutral+1
        totalData = total + 1;
        setNeutral(totalNeutral)
      } else if (name === 'bad') {
        totalBad = bad+1
        totalData = total + 1;
        setBad(totalBad)
      }
      //count average
      scoreData = (totalGood * 1) + (totalNeutral * 0) + (totalBad * -1);
    }else if(name === 'reset'){
      setGood(0);
      setNeutral(0);
      setBad(0);
    }
    setTotal(totalData);
    setScore(scoreData);    
  }
  

  return (
    <div>
      <h1>Give Feedback</h1>
       <button onClick={() => handleClick('good')}>Good</button>
       <button onClick={() => handleClick('neutral')}>Neutral</button>
       <button onClick={() => handleClick('bad')}>Bad</button>
       <br />
       <br />
       <button onClick={() => handleClick('reset')}>Reset</button>
       <br />
       <h1>Statistic</h1>
       <Statistics stats = {[{name: 'Good', total: good}, {name: 'Neutral', total: neutral}, {name: 'Bad', total: bad}]} total={total} score={score} />
    </div>
  )
}

export default App