import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./HeaderComponent/Header";
import Nav from "./NavComponent/Nav";
import Main from "./MainComponent/Main";
import About from "./AboutComponent/About";
import Contact from "./ContactComponent/Contact";
import Service from "./ServiceComponent/Service";
import Register from "./RegisterComponent/Register";
import Verifyuser from "./VerifyuserComponent/Verifyuser";
import Login from "./LoginComponent/Login";
import Footer from "./FooterComponent/Footer";
import Adminhome from "./AdminhomeComponent/Adminhome";
import Userhome from "./UserhomeComponent/Userhome";
// import Banner from "./Banner/Banner";
import Logout from "./LogoutComponent/Logout";
import Viewsub from "./ViewsubComponent/Viewsub";
import ManageUser from "./ManageUserComponent/ManageUser";
import Searchtenders from "./SearchtendersComponent/Searchtenders";
import Addcategory from "./AddcategoryComponent/Addcategory";
import AddSubcategory from "./AddSubcategoryComponent/AddSubcategory";

function App() {
  return (
    <div id="root">
      <Header />
      <Nav />
      {/* <Banner /> */}
      <Routes className="my-5`">
        <Route path="/" element={<Main />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/verifyuser/:email" element={<Verifyuser />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin" element={<Adminhome />}></Route>
        <Route path="/manageuser" element={<ManageUser />}></Route>
        <Route path="/addcategory" element={<Addcategory />}></Route>
        <Route path="/addsubcategory" element={<AddSubcategory />}></Route>
        <Route path="/viewsub/:catname" element={<Viewsub />}></Route>
        <Route path="/searchtenders" element={<Searchtenders />}></Route>
        <Route path="/user" element={<Userhome />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
