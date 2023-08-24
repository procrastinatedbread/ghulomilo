import { useContext } from "react"
import { Navigate,useLocation } from "react-router"
import { AuthContext } from "../contexts/AuthContext"

export default function RequiresAuth({children}){
    const location = useLocation()
    const {state,isLoggedIn} = useContext(AuthContext)
    // console.log(state.encodedToken)
    return isLoggedIn ? children:<Navigate to = "/login"state={{from:location}}/>
    }