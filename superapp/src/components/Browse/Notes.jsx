import { useState } from "react";
import styles from "./Notes.module.css"
import Edit from "../../assets/edit.png"
import Pen from "../../assets/pen.png"

const Notes = () => {

    const [text, setText] = useState(
        JSON.parse(window.localStorage.getItem("text"))
    );

    const handleChange = (e) => {
        setText(e.target.value);
        window.localStorage.setItem("text", JSON.stringify(text));
    };

    return (
        <div className={styles.body}>
            <p className={styles.p}>All Notes</p>
            <textarea className={styles.textarea} value={text} onChange={(e) => handleChange(e)} />
            <div>
            <img className={styles.img1} src={Edit}/>
            <img className={styles.img2} src={Pen}/>
            </div>
        </div>
    );
}

export default Notes;