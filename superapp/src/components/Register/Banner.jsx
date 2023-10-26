import styles from "./Banner.module.css"

const Banner = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.bottom}>
                    <p>Discover new things on SuperApp</p>
                </div>
                <div className={styles.imgdiv}></div>
            </div>
        </>
    );
}

export default Banner;
