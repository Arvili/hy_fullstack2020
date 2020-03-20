import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = () => {
    return(
        <div>
            <h1>give feedback</h1>
        </div>
    )
}



const Statistics = (props) => {
    if(props.all > 0){
        return(
            <div>
                <StatisticLine text="good" value={props.good} />
                <StatisticLine text="neutral" value={props.neutral} />
                <StatisticLine text="bad" value={props.bad} />
                <StatisticLine text="all" value={props.all} />
                <StatisticLine text="average" value={((props.good)-(props.bad))/(props.all) || 0} />
                <StatisticLine text="positive" value={(props.good/props.all)*100 || 0} />
            </div>
        )
    }
    return(
        <div>
            <p>No feedback given</p>
        </div>
    )
}

const StatisticLine = ({text, value}) =>{
    return(
        <> 
            <p>{text}: {value}</p>
        </>
    )

}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
    )


const App = () => {
// tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)

    const increaseGood = () =>{
        setAll(all+1)
        setGood(good + 1)
        
    }

    const increaseNeutral = () =>{
        setAll(all+1)
        setNeutral(neutral + 1)
        
        
    }
    const increaseBad = () =>{
        setAll(all+1)
        setBad(bad + 1)
        
    }


    return(
        <div>
            <Header />
            <Button handleClick={increaseGood} text="good"/>
            <Button handleClick={increaseNeutral} text="neutral"/>
            <Button handleClick={increaseBad} text="bad"/>
            <h1>statistic</h1>
            <Statistics good={good} bad={bad} neutral={neutral} all={all}/>
            
        </div>
        
        )
    }

    ReactDOM.render(<App />, document.getElementById('root'))