import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Auth() {
  const navigate = useNavigate();
  useEffect(()=>{
    var path = window.location.pathname;
    if (
      path == "/admin" ||
      path == "/manageusers" ||
      path == "/addcategory" ||
      path == "/addsubcategory" ||
      path == "/user"
    ) {
      if (!localStorage.getItem("token")) navigate("/login");
    }
    if (
      path == "/" ||
      path == "/about" ||
      path == "/contact" ||
      path == "/service" ||
      path == "/register" ||
      path == "/login" ||
      path == "/Login" ||
      path == "/admin" ||
      path == "/manageusers" ||
      path == "/addcategory" ||
      path == "/addsubcategory"
    ) {
      if (localStorage.getItem("role") == "user") navigate("/user");
    }
    if (
      path == "/" ||
      path == "/about" ||
      path == "/contact" ||
      path == "/service" ||
      path == "/register" ||
      path == "/login" ||
      path == "/Login" ||
      path == "/user"
    ) {
      if (localStorage.getItem("role") == "admin") navigate("/admin");
    }
  }, []);

  //   if(
  //     path === "/admin" ||
  //     path === "/manageuser" ||
  //     path === "/addcategory" ||
  //     path === "/addsubcategory" 
  //   ){
  //     if(
  //       !localStorage.getItem("token") ||
  //       localStorage.getItem("role") !== "admin"
  //     )
  //       navigate("/logout");
  //   }else if(path === "/user") {
  //     if(
  //       !localStorage.getItem("token") ||
  //       localStorage.getItem("role") !== "user"
  //     )
  //       navigate("/logout");
  //   }else
  //   {
  //     if(localStorage.getItem("role") === "admin") navigate("/admin");
  //     else navigate("/user");
  //   }
  // },[])

  // useEffect(() => {
  //   var path = window.location.pathname;
  //   if (
  //     path !== "/" &&
  //     path !== "/about" &&
  //     path !== "/contact" &&
  //     path !== "/service" &&
  //     path !== "/register" &&
  //     path !== "/login"
  //   ) {
  //     if (!localStorage.getItem("token")) navigate("/login");
  //   }
  //   if (
  //     path === "/admin" ||
  //     path === "/manageuser" ||
  //     path === "/addcategory" ||
  //     path === "/addsubcategory"
  //   ) {
  //     if (localStorage.getItem("role") === "user") navigate("/user");
  //   }

  //   if(path==="/user" || path==="/")
  //   {
  //       if(localStorage.getItem("role")==="admin")
  //       navigate("/admin")
  //   }
  // },[]);

  return(<div>

  </div>);
}

export default Auth;
