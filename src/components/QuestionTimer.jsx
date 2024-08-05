import { useState, useEffect } from 'react';

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('SETTING TIMEOUT');
   const timer=  setTimeout(onTimeout, timeout);

   return ()=>{
    clearTimeout(timer);
   }
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log('SETTING INTERVAL');
  const interrval=  setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return ()=>{
        clearInterval(interrval)
    }
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} className={mode} />;
}