import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

//app rerusn every time a state changes
//side effects should not be put in app
//we use use effect hook
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {  const storedUserLoginInfo = localStorage.getItem("isLoggedIn");

  if (storedUserLoginInfo === "1") {
    setIsLoggedIn(true);
    //Every time the set function is triggered the app component is triggered!
    //CAUSES AN INFINTE LOOP, so we use useEffect
  }}, []); //sets the dependencies

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    // localStorage.setItem("isLoggedIn", "1");
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    // <React.Fragment>
       <AuthContext.Provider value={{
         isLoggedIn:isLoggedIn,
         onLogout: logoutHandler
       }}>
      <MainHeader  onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </AuthContext.Provider> 

  );
}
      {/* Auth can also be used as a wrapper */}
    {/* </React.Fragment> */}

export default App;
