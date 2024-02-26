import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../store/theme";

function ChangeColor() {
    const dispatch = useDispatch();
    const [color, setColor] = useState("");
    return(
        <div>
            <input 
                type="text"
                onChange={(event) =>{
                    setColor(event.target.value)
                }}
            />
            <button
                onClick={()=>{
                    dispatch(changeColor(color));
                }}
            >
                change color
            </button>
        </div>
    )
}

export default ChangeColor;