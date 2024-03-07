import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Login from "./component/Pages/Login";
import SignUp from "./component/Pages/Signup";
import ForgotPass from "./component/Pages/ForgotPass";
import Dashboard from "./component/Pages/Dashboard";
import CardView from "./component/Pages/CardView";
import CardAdd from "./component/Pages/CardAdd";



function App() {
  return (
    <>
   
    <Routes>
      <Route path="/" exact element={<Login/>}/>
      <Route path="/signup" exact element={<SignUp/>}/>
      <Route path="/forgotpassword" exact element={<ForgotPass/>}/>
      <Route path="/dashboard" exact element={<Dashboard/>}/>
      <Route path="/cardview" exact element={<CardView/>}/>
      <Route path="/cardadd" exact element={<CardAdd/>}/>

    </Routes>
    </>
  );
}

export default App;
