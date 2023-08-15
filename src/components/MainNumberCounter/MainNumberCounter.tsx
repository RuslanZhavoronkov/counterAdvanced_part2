import { Button } from "../Button/Button"
import { Counter } from "../Couter/Couter"
import s from './MainNumberCounter.module.css'

type PropsMainNumberCounterType = {
  message: string
  counter: number
  startValue: number
  maxValue: number
  increaseCounter: () => void
  resetCounter: () => void
}



export const MainNumberCounter: React.FC<PropsMainNumberCounterType> = (props) => {

  const buttonIncColor = props.message || props.counter === props.maxValue ? 'grey' : 'aquamarine'
  return (
    <div className={s.counterArea}>
      <Counter
        counter={props.message ? props.message : props.counter}
        color={props.counter === 0 || props.counter < props.maxValue ? 'black' : 'red'} />
      <div className={s.buttonArea}>
        {/* <Button name={'INC'} callBack={props.increaseCounter} color={props.counter < props.maxValue ? 'aquamarine' : 'grey'} /> */}
        <Button name={'INC'} callBack={props.increaseCounter} color={buttonIncColor} />
        <Button name={'RESET'} callBack={props.resetCounter} color={props.message ? 'grey' : 'aquamarine'} />
      </div>

    </div>
  )
}






