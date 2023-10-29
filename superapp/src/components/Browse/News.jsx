import { useEffect, useState } from "react";
import styles from "./News.module.css";
import axios from 'axios';

const News = () => {
    const [newsList, setNewsList] = useState([]);
    const [currentNewsIndex, setCurrentNewsIndex] = useState(0); // Track the index of the current news article
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    useEffect(() => {
        const apiKey = 'a298023ab4f449478b107e8408f3ebe2'; // Replace with your NewsAPI key
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

        axios.get(apiUrl)
            .then((response) => {
                setNewsList(response.data.articles);
            })
            .catch((error) => {
                console.error('Error fetching news:', error);
            });
    }, []);

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

    const nextNews = () => {
        setCurrentNewsIndex((prevIndex) => prevIndex + 1);
    };

    return (
        <div className={styles.body}>
            {newsList.length > 0 && (
                <div className={styles.newsItem}>
                    <img src={newsList[currentNewsIndex].urlToImage} className={styles.img} alt="News Image" />
                    <div className={styles.desc}>{newsList[currentNewsIndex].description}</div>
                    <div className={styles.data}>
                        <p className={styles.title}>{newsList[currentNewsIndex].title}</p>
                        <span className={styles.date}>{date}</span>
                        <span className={styles.time}>{time}</span>
                    </div>
                </div>
            )}
            <button onClick={nextNews} className={styles.nextButton}>{">"}</button>
        </div>
    );
}

export default News;