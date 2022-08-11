import "./Header.css";
import { useNavigate } from 'react-router-dom';

function Header(){
    const firstName=localStorage.getItem("firstName");
    const lastName=localStorage.getItem("lastName");
    const imgName=firstName[0]+lastName[0];
    localStorage.setItem("imageTitle",imgName);
    const navigate=useNavigate();
    const handleLogout=()=>{
        localStorage.clear();
        navigate("/login");
    }
    return(
        <>
        <div className="header-main">
            <div className="header-div-icon">
                <span className="header-icon">SR</span>
                <span className='blog-main-title'>BLOGSITE</span>
            </div>
            <div className="right-float-div">
                <div className="header-profile">
                    <h2>{imgName}</h2>
                </div>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
            
        </div>
        </>
    )
}


export default Header;