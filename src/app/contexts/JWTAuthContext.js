// import { createContext, useContext, useState } from 'react';
// import axios from "axios";
// // CUSTOM COMPONENT
// import { MatxLoading } from "app/components";



// const AuthContext = createContext({
//   method: "JWT",
//   login: () => { },
//   logout: () => { },
//   register: () => { }
// });

// export const AuthProvider = ({ children }) => {
//   const [userData, setUserData] = useState(null);

//   const login = (userData) => {
//     setUserData(userData);
//   };

//   const logout = () => {
//     setUserData(null);
//     // Add any other logout logic if needed
//   };
//   // SHOW LOADER
//   if (userData == null) return <MatxLoading />;

//   return (
//     <AuthContext.Provider value={{ userData, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;
