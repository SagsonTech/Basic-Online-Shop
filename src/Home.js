import { Navbar } from "./Components/Navbar";
import { Sidebar } from "./Components/Sidebar";
import { Main } from "./Components/Main";

function Home() {
    return (
        <div style={{height : 640}} className="main">
            <Navbar></Navbar>

            <div style={{display : "flex" , height : '620px'}}>
                <Sidebar></Sidebar>

                <Main></Main>
            </div>
        </div>
    );
}

export default Home;
