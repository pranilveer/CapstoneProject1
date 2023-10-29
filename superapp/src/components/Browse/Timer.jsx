import { useState, useEffect } from "react";
import styles from "./Timer.module.css";
import ArrowUp from "../../assets/arrowup.png";
import ArrowDown from "../../assets/arrowdown.png";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Sound from "../../assets/alarm.wav";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [playing, setPlaying] = useState(false);

    const increaseSecond = () => {
        if (seconds === 59) {
            return;
        }
        setSeconds((sec) => sec + 1);
    };

    const increaseMinute = () => {
        if (minutes === 59) {
            return;
        }
        setMinutes((min) => min + 1);
    };

    const increaseHour = () => {
        setHours((h) => h + 1);
    };

    const decreaseSecond = () => {
        if (seconds === 0) {
            return;
        }
        setSeconds((sec) => sec - 1);
    };

    const decreaseMinute = () => {
        if (minutes === 0) {
            return;
        }
        setMinutes((min) => min - 1);
    };

    const decreaseHour = () => {
        if (hours === 0) {
            return;
        }
        setHours((h) => h - 1);
    };

    function toHoursAndMinutes(totalSeconds) {
        const totalMinutes = Math.floor(totalSeconds / 60);
        const sec = totalSeconds % 60;
        const h = Math.floor(totalMinutes / 60);
        const min = totalMinutes % 60;
        return `${h}:${min}:${sec}`;
    }

    useEffect(() => {
        if (playing) {
            const totalSeconds = seconds + minutes * 60 + hours * 60 * 60;
            const timeoutId = setTimeout(() => {
                new Audio(Sound).play();
            }, totalSeconds * 1000);

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [playing, seconds, minutes, hours]);

    return (
        <div className={styles.body}>
            <div className={styles.circle}>
                <CountdownCircleTimer
                    isPlaying={playing}
                    duration={seconds + minutes * 60 + hours * 60 * 60}
                    colors={["#FF6A6A"]}
                >
                    {({ remainingTime }) => (
                        <span className={styles.span}>{toHoursAndMinutes(remainingTime)}</span>
                    )}
                </CountdownCircleTimer>
            </div>
            <div className={styles.timerdiv}>
                <div className={styles.timer}>

                    <div className={styles.hour}>
                        <p>Hours</p>
                        <img className={styles.img} onClick={increaseHour} src={ArrowUp} />
                        <p className={styles.time}>{hours}</p>
                        <img className={styles.img} onClick={decreaseHour} src={ArrowDown} />
                    </div>
                    <div className={styles.hour}>
                        <p>Minutes</p>
                        <img className={styles.img} onClick={increaseMinute} src={ArrowUp} />
                        <p className={styles.time}>{minutes}</p>
                        <img className={styles.img} onClick={decreaseMinute} src={ArrowDown} />
                    </div>

                    <div className={styles.hour}>
                        <p>Seconds</p>
                        <img className={styles.img} onClick={increaseSecond} src={ArrowUp} />
                        <p className={styles.time}>{seconds}</p>
                        <img className={styles.img} onClick={decreaseSecond} src={ArrowDown} />
                    </div>
                </div>
                <div className={styles.action} onClick={() => setPlaying((prev) => !prev)}>
                    {playing ? <p>Pause</p> : <p>Start</p>}
                </div>
            </div>
        </div>
    );
};

export default Timer;


