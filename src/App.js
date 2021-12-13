import { useState, useEffect, useMemo } from "react";

import Header from "./components/Header";
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {

  const myBirthday = useMemo(() => new Date(1991, 7, 3), [])

  const [secondCounter, setSecondCounter] = useState(0)
  const [totalSeconds, setTotalSeconds] = useState(Date.now() - myBirthday)
  const [startTime, setStartTime] = useState(new Date())

  const resetCounter = () => {
    setStartTime(Date.now())
    setSecondCounter(0)
  }

  useEffect(() => {
    const interval = setInterval(() => setTotalSeconds(
      Math.floor((new Date() - myBirthday) / 1000),
      1000)
    );
    return () => {
      clearInterval(interval)
    };
  }, [myBirthday])

  useEffect(() => {
    const interval = setInterval(() => setSecondCounter(
      Math.floor((new Date() - startTime) / 1000),
      1000)
    );
    return () => {
      clearInterval(interval)
    };
  }, [startTime])

  return (
    <div className='container'>
      <Header title='Second Counter' />
      <Counter label='Total Seconds' value={totalSeconds.toLocaleString()} unit='sec' />
      <Counter label='Second Counter' value={secondCounter.toLocaleString()} unit='sec' />
      <Button
        onClick={resetCounter}
        text='Reset Second Counter'
        color='#03BCD4' />
    </div>
  );
}

export default App;
