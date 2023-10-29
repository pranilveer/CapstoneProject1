import styles from "../Browse/Info.module.css";
import Profile from "../../assets/image11.png"
const Info = () => {
    const info = JSON.parse(window.localStorage.getItem("userData"));
    const genre = JSON.parse(window.localStorage.getItem("genre"));
    return (
        <div className={styles.body}>
            <div>
                <img className={styles.imgdiv} src={Profile}/>
            </div>
            <div className={styles.info}>
                <p className={styles.info1}>{info.name}</p>
                <p className={styles.info2}>{info.mail}</p>
                <p className={styles.info3}>{info.username}</p>
                <div><Chips categories={genre}/></div>
                
            </div>
        </div>
    );
};

const Chips = ({ categories}) =>{
    return (
        <div className={styles.chips}>
            {categories.map((category) =>(
                <button className={styles.btn}>{category}</button>
            ))}
        </div>
    );
};

export default Info;