import Info from "../components/Browse/Info";
import Weather from "../components/Browse/Weather";
import News from "../components/Browse/News";
import Notes from "../components/Browse/Notes";
import Timer from "../components/Browse/Timer";
import { useNavigate } from "react-router-dom";

const Browse = () => {

    const navigate = useNavigate();
    const handleClick = () => {
      navigate("/movies");
    };

    return (
        <div style={{ background: "black", width: "100vw", height: "100vh" }}>
            <div style={{ display: "flex" }}>
                <div style={{ width: "70vw", height: "93vh" }}>
                    <div style={{ width: "70vw", height: "60vh", display: "flex" }}>
                        <div style={{ width: "35vw", height: "55vh" }}>
                            <div style={{ background: "black", width: "35vw", height: "30vh" }}>
                                <Info />
                            </div>
                            <div style={{ width: "35vw", height: "20vh" }}>
                                <Weather />
                            </div>
                        </div>
                        <div style={{ width: "35vw", height: "60vh" }}>
                            <Notes />
                        </div>
                    </div>
                    <div style={{ width: "70vw", height: "25vh" }}>
                        <Timer />
                    </div>
                </div>
                <div style={{ width: "30vw", height: "93vh" }}>
                    <News />
                </div>
            </div>
            <div style={{ width: "100vw", height: "7vh"}}>
                <button
                    style={{
                        position: "absolute",
                        bottom: "1vh",
                        right: "4vw",
                        background: "green",
                        border: "none",
                        color: "white",
                        padding: "10px 30px",
                        borderRadius: "20px",
                        cursor:"pointer"
                    }}
                    onClick={handleClick}
                >
                    Browse
                </button>
            </div>
        </div>
    )
}

export default Browse;