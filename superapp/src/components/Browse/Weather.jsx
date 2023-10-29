import { useEffect, useState } from "react";
import styles from "../Browse/Weather.module.css"
import vector1 from "../../assets/vector1.png"
import vector2 from "../../assets/vector2.png"
import vector3 from "../../assets/vector3.png"

const Weather = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [weather, setWeather] = useState(false);

    useEffect(() => {
        const date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? "pm" : "am";
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        var strTime = hours + ":" + minutes + " " + ampm;
        setTime(strTime);
    });

    useEffect(() => {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1;
        let dd = today.getDate();

        if (dd < 10) dd = "0" + dd;
        if (mm < 10) mm = "0" + mm;

        const formattedToday = dd + "-" + mm + "-" + yyyy;
        setDate(formattedToday);
    });

    useEffect(() => {
        const fetchWeather = async () => {
            await fetch(
                "http://api.weatherapi.com/v1/current.json?key=987de39fe8924052ada80850232502&q=London&aqi=no"
            )
                .then(async (data) => await data.json())
                .then((data) => setWeather(data));
        };
        fetchWeather();
    }, []);

    return (
        <div className={styles.body}>
            <div className={styles.data}>
                <span>{date}</span>
                <span>{time}</span>
            </div>
            <div>
                {weather ? (
                    <div className={styles.weather}>
                        <div className={styles.block1}>
                            <div >
                                <img className={styles.img} src={weather.current.condition.icon} />
                            </div>
                            <div>{weather.current.condition.text}</div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.block2}>
                            <p className={styles.p}>
                                <span>{weather.current.temp_c}</span> °C
                            </p>
                            <p>
                                <img src={vector2} style={{ width: "12px", height: "20px" }} alt="pressure img" />
                                {" "}{weather.current.pressure_mb} mbar</p>
                            <p>Pressure</p>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.block3}>
                            <p className={styles.p1}>
                                <img src={vector3} style={{ width: "20px", height: "20px" }} alt="wind img" />
                                {" "}{weather.current.wind_kph} km/h</p>
                            <p>
                                <img src={vector1} style={{ width: "15px", height: "20px" }} alt="humidity img" />
                                {" "}{weather.current.humidity}%</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
}

export default Weather;