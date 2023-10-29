import List from "../components/Movies/List";
import Profile from "../assets/image12.png";
import styles from "../components/Movies/List.module.css"
const Movies = () => {
  const movies = JSON.parse(window.localStorage.getItem("genre"));

  return (
    <>
      <div className={styles.body}>
        <img src={Profile} className={styles.img1}/>
        <p className={styles.header}>Super app</p>
        <p className={styles.p}>Entertainment according to your choice</p>
        {movies.map((movie) => (
          <List genre={movie} />
        ))}
      </div>
    </>
  );
};

export default Movies;