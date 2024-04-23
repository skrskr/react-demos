import { Navigate, Outlet } from 'react-router-dom';
import './../App.css'

function PrivateRoute({isLoggedIn}) {

  return (
    <>{isLoggedIn ? <Outlet /> : <Navigate to='/login' />}</>
  )
}

export default PrivateRoute
