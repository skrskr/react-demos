import { Navigate } from 'react-router-dom';
import './../App.css'

function ProtectedRoute({children, isLoggedIn}) {

  return (
    <>{isLoggedIn ? children : <Navigate to='/login' />}</>
  )
}

export default ProtectedRoute
