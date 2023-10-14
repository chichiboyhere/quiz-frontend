import { Link, useNavigate} from "react-router-dom";
import "./menu.css";

const Menu = () => {
    return(
        <div className="menuTray">
            <h1>Menu</h1>
            <div className="menu">
                <Link to ="/multiplication">
                    Multiplication Game
                </Link>
            </div>
            <div className="menu">
                
                <Link to ="/login">
                    Login
                </Link>

            </div>
            <div className="menu">
               <Link to ="/register">
                    Register
               </Link>
            </div>
           
        </div>
    )
}

export default Menu