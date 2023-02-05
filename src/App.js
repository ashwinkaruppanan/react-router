import { Routes,Route } from "react-router-dom";
import {About} from "./components/About";
import Home from "./components/Home";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { NoMatch } from "./components/NoMatch";
import { Register } from "./components/Register";

function App() {
  return (
    <>
    <Navbar/>
    <div className="upperMain">
    <div className="main">
    <Routes >
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About isLoggedIn={false}/>}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
    </div>
          </div>
     </>
  );
}

export default App;
