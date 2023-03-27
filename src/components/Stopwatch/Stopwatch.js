import styles from './Stopwatch.module.scss';
import { useState, useEffect } from 'react';

const Stopwatch = () => {

   const [time, setTime] = useState(0);
   const [isRunning, setIsRunning] = useState(false);

   useEffect(() => {
      let intervalId;
      if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
   }
   return () => clearInterval(intervalId);
   }, [isRunning, time]);

   const hours = Math.floor(time / 360000);

   const minutes = Math.floor((time % 360000) / 6000);

   const seconds = Math.floor((time % 6000) / 100);

   const milliseconds = time % 100;

   const startAndStop = () => {
   setIsRunning(!isRunning);
   };

   const reset = () => {
   setTime(0);
   };

   return (
      <div className={styles.container}>
         <p className={styles.time}>
            {hours}:{minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}:
            {milliseconds.toString().padStart(2, "0")}
         </p>
         <div className={styles.buttons}>
         <button className={styles.button} onClick={startAndStop}>
            {isRunning ? "Stop" : "Start"}
         </button>
         <button className={styles.button} onClick={reset}>
            Reset
         </button>
      </div>
      </div>
   );
};

export default Stopwatch;
