import { Link, useNavigate} from "react-router-dom";
import { useContext } from "react";
import "./menu.css";
import { AuthContext } from "../../context/AuthContext";


const Menu = () => {

const { user, dispatch} = useContext(AuthContext);
const navigate = useNavigate();

const handleLogout = () => {
    dispatch({ type: "LOGOUT"});
    navigate("/");
};
    return(
        <div className="menuTray">
            <h1>Menu</h1>
            <div className="menu">
                <Link to ="/multiplication">
                    Multiplication Game
                </Link>
            </div>
            {user ? <div onClick={handleLogout} className="menu">
          Logout
        </div>: (
           <div className="menu">
                
           <Link to ="/login">
               Login
           </Link>
         </div>
          )}
           
            <div className="menu">
               <Link to ="/register">
                    Register
               </Link>
            </div>
           
        </div>
    )
}

export default Menu