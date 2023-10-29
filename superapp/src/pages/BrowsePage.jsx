import Info from "../components/Browse/Info";
import Weather from "../components/Browse/Weather";
const Browse = () => {
    return (
        <div style={{background:"black", width:"100vw", height:"100vh"}}>
            <div style={{display: "flex"}}>
            <div style={{ width:"70vw", height:"90vh"}}>
                <div style={{ width:"70vw", height:"60vh", display: "flex"}}>
                    <div style={{ width:"35vw", height:"55vh"}}>
                        <div style={{background:"black", width:"35vw", height:"30vh"}}>
                            <Info />
                        </div>
                        <div style={{ width:"35vw", height:"20vh"}}>
                            <Weather />
                        </div>
                    </div>
                    <div style={{background:"yellow", width:"35vw", height:"60vh"}}></div>
                </div>
                <div style={{background:"orange", width:"70vw", height:"30vh"}}></div>
            </div>
            <div style={{background:"black", width:"30vw", height:"90vh", background: "blue"}}></div>
            </div>
            <div style={{width:"100vw", height:"10vh", background:"red"}}></div>
        </div>
    )
}

export default Browse;