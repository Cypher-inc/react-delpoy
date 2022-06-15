import React from "react";

const AuthContext = React.createContext({
  // console.log('Context testing!');
  isLoggedIn: false,
});

export default AuthContext;
