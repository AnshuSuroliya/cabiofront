import Content from "../content/Content";
import ContentMid from "../content/ContentMid";
import ContentMids from "../content/ContentMid";
import Content2 from "../content/ContentMid";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Home=()=>{
    return(
        <div className="overflow-x-hidden">
            <Navbar/>
            <Content/>
            <ContentMid/>
            <Footer/>
        </div>
    )
}
export default Home;