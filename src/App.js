import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Menu from "./routes/menu/Menu";
import Login from "./routes/loginFolder/Login";
import Register from "./routes/register/Register";
import MultiplicationGame from "./routes/multiplicationGame/MultiplicationGame";

  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/multiplication" element={<MultiplicationGame/>}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default App;
  