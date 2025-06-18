import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const StatisticsLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad, total, average, positive}) => {
  if (total) {
    return (
      <table>
        <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="total" value={total} />
          <StatisticsLine text="average" value={average} />
          <StatisticsLine text="positive" value={positive ? positive : 0} />
        </tbody>
      </table>
    ) 
  } else {
    return (
      <p>No feedback given</p>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad;
  const average = (1 * good) + (-1 * bad);
  const positive = good / total;

  const handleClick = (feedback) => {
    if (feedback === "good") {
      setGood(good + 1);
    } else if (feedback === "neutral") {
      setNeutral(neutral + 1);
    } else {
      setBad(bad + 1);
    }
  }

  return (
    <div>
      <h1>give feedback</h1>
        <Button onClick={() => handleClick("good")} text="good"/>
        <Button onClick={() => handleClick("neutral")} text="neutral"/>
        <Button onClick={() => handleClick("bad")} text="bad"/>
      <h1>statistics</h1>
        <Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          total={total} 
          average={average} 
          positive={positive} 
        />
    </div>
  )
}

export default App