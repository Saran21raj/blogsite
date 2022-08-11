import MainPage from "./MainPage/MainPage";
import HomePage from "./HomePage/HomePage";
import {BrowserRouter,Route,Routes} from "react-router-dom"

function RoutingPage(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<MainPage/>}/>
                <Route path="/homepage" element={<HomePage/>}/>
                <Route path="*" element={<MainPage/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default RoutingPage;