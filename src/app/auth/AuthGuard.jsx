import { Navigate, useLocation } from "react-router-dom";
// HOOK


export default function AuthGuard({ children }) {
  const isAuthenticated  = localStorage.getItem('isAuthenticated')
  const { pathname } = useLocation();



console.log(isAuthenticated,"isAuthenticated")

if (isAuthenticated) {
  return <>{children}</>;
} else {
  return <Navigate replace to="/session/signin" state={{ from: pathname }} />;
}

}
