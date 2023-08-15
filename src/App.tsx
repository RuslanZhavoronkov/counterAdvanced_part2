import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { MainNumberCounter } from './components/MainNumberCounter/MainNumberCounter';
import { MainCounterCustomizer } from './components/MainCounterCustomizer/MainCounterCustomizer';


export const firstMessage = "Enter values and press 'set'"
export const warningMessage = 'Incorrect value!'

function App() {

  let [counter, setCounter] = useState<number>(0)
  let [maxValue, setMaxValue] = useState<number>(0)
  let [startValue, setStartValue] = useState<number>(0)
  let [message, setMessage] = useState<string>('')


  //get from localStorage and write to state
  useEffect(() => {

    let counterAsString = localStorage.getItem('counter')
    let startValueAsString = localStorage.getItem('startValue')
    let maxValueAsString = localStorage.getItem('maxValue')

    if (counterAsString) {
      let newCounter = JSON.parse(counterAsString)
      setCounter(newCounter)
    }

    if (startValueAsString) {
      let newStartValue = JSON.parse(startValueAsString)
      setStartValue(newStartValue)
    }

    if (maxValueAsString) {
      let newMaxValue = JSON.parse(maxValueAsString)
      setMaxValue(newMaxValue)
    }

  }, [])

  
   
  //writing values in localStorage
  useEffect(()=> {
    localStorage.setItem('counter', JSON.stringify(counter))
    localStorage.setItem('startValue', JSON.stringify(startValue))
    localStorage.setItem('maxValue', JSON.stringify(maxValue))

  },[counter, startValue, maxValue])


  const increaseCounter = () => {
    if (counter < maxValue) {
      setCounter(counter + 1);
    }
  }

  const resetCounter = () => {
    setCounter(startValue)
  }

  // write in state max value 
  const changeMaxValue = (value: number) => {

    setMaxValue(value);
    value > startValue && value >= 0 ? setMessage(firstMessage) : setMessage(warningMessage)
    setCounter(0)
  }


  // write in state start value 
  const changeStartValue = (value: number) => {
    setStartValue(value);
    value < maxValue && value >= 0 ? setMessage(firstMessage) : setMessage(warningMessage)
    setCounter(0)

  }


  // setting the minimum value
  const settingMinimumValue = () => {

    if (startValue < maxValue && startValue >= 0 && maxValue > 0) {
      setMessage('')
      setCounter(startValue)
    } else {
      setMessage('Incorrect value!')
    }

  }


  return (
    <div>

      <MainNumberCounter
        message={message}
        counter={counter}
        startValue={startValue}
        maxValue={maxValue}
        increaseCounter={increaseCounter}
        resetCounter={resetCounter} />

      <MainCounterCustomizer
        counter={counter}
        startValue={startValue}
        maxValue={maxValue}
        changeStartValue={changeStartValue}
        changeMaxValue={changeMaxValue}
        settingMinimumValue={settingMinimumValue}
        message={message}
      />

    </div>
  );
}

export default App;



// setMaxValue((val: number) => {
//   localStorage.setItem('maxValue', JSON.stringify(val))
//   return val