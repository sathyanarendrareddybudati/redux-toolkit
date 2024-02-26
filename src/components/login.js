import React from "react";
import { login, logout } from "../store/user";
import { UseDispatch, useDispatch } from "react-redux";

function Login () {
    const dispatch = useDispatch()
    return(
        <div>
            <button
            onClick={()=>{
                dispatch(login({ name: "nava", age: 20, email: "nava@gmail.com" }))
            }}
            >Login</button>
            <button
            onClick={()=>{dispatch(logout())}}
            >logout</button>
        </div>
    )
}

export default Login;