import H_bannar from "../../components/bannars/H_bannar";
import About from "./about/About";
import Populer from "./popularProduct/Populer";

const Home = () => {
    return (
        <div className=' h-full w-full'>
            <div className=""><H_bannar /></div>
            <div className="p-4 md:p-20">
                <div className=""><About /></div>
                <div className=""><Populer/></div>
            </div>
        </div>
    );
};

export default Home;