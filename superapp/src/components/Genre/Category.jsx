import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styles from "./Category.module.css";
import action from "../../assets/image2.png";
import drama from "../../assets/image3.png";
import fantacy from "../../assets/image4.png";
import fiction from "../../assets/image5.png";
import horror from "../../assets/image6.png";
import music from "../../assets/image7.png";
import romance from "../../assets/image8.png";
import thriller from "../../assets/image9.png";
import webstern from "../../assets/image10.png";
import Chips from "../Global/Chips"

const genre = [
    {
        id: "Action",
        image: <img style={{ width: "160px", height: "120px" }} src={action} />,
        color: "#FF5209"
    },
    {
        id: "Drama",
        image: <img style={{ width: "160px", height: "120px" }} src={drama} />,
        color: "#D7A4FF"
    },
    {
        id: "Romance",
        image: <img style={{ width: "160px", height: "120px" }} src={fantacy} />,
        color: "#11B800"
    },
    {
        id: "Thriller",
        image: <img style={{ width: "160px", height: "120px" }} src={fiction} />,
        color: "#84C2FF"
    },
    {
        id: "Webstern",
        image: <img style={{ width: "160px", height: "120px" }} src={horror} />,
        color: "#912500"
    },
    {
        id: "Horror",
        image: <img style={{ width: "160px", height: "120px" }} src={music} />,
        color: "#7358FF"
    },
    {
        id: "Fantacy",
        image: <img style={{ width: "160px", height: "120px" }} src={romance} />,
        color: "#FF4ADE"
    },
    {
        id: "Music",
        image: <img style={{ width: "160px", height: "120px" }} src={thriller} />,
        color: "#E61E32"
    },
    {
        id: "Fiction",
        image: <img style={{ width: "160px", height: "120px" }} src={webstern} />,
        color: "#6CD061"
    },
]

const Category = () => {
    const [categories, setCategories] = useState([]);
    const [lengthError, setLengthError] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = () => {
        if (categories.length < 3) {
            setLengthError(true);
            return;
        } else {
            setLengthError(false);
            window.localStorage.setItem("genre", JSON.stringify([...categories]));
            navigate("/browse");
        }
    }

    return (
        <div className={styles.body}>
            <div className={styles.leftdiv}>
                <p className={styles.heading}>Super app</p>
                <p className={styles.subheading}> Choose your entertainment category</p>
                <div style={{ marginTop: "10vh" }}>
                    <Chips categories={categories} color={"green"} setCategories={setCategories} />
                    {lengthError ? (<p className={styles.error}>Please choose at least 3</p>) : (<></>)}
                </div>
            </div>

            <div className={styles.rightdiv}>
                {genre.map((data, idx) => (
                    <Block data={data} idx={idx} categories={categories} setCategories={setCategories} />
                ))}
            </div>

            <button className={styles.signup} onClick={handleSignUp}>Next Page</button>
        </div>
    );
};

const Block = ({ data, idx, categories, setCategories }) => {
    const [selected, setSelected] = useState();
    const handleClick = (e) => {
        if (categories.includes(data.id)) {
            const index = categories.indexOf(data.id);
            categories.splice(index, 1);
            setCategories([...categories]);
        } else {
            setCategories([...categories, data.id])
        }
        setSelected(!selected);
    };
    useEffect(() => {
        setSelected(categories.includes(data.id) == true);
    });
    return (
        <div data={data} onClick={(e) => handleClick(e)} key={idx} style={{
            background: data["color"],
            color: "white",
            padding: "16px",
            paddingTop: "0px",
            margin: "0",
            width: "160px",
            height: "160px",
            borderRadius: "12px",
            border: `${selected ? "4px solid green" : "4px solid white"}`,
        }}>
            <p style={{ marginBottom: "2px", fontSize: "20px" }}>{data.id}</p>
            {data.image}
        </div>
    )
}

export default Category;