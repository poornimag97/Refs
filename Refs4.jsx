import React,{useState} from "react";
import eye from "./eye.png";
const Refs4=()=>{
let [password,setPassword]=useState(true)
let showPassword=()=>{
    if(password==true){
        setPassword(!true)
    }
    else{
        setPassword(!false)
    }
}

    return(
        <div>
            <input type={password?"text" :"password"} name="" id="" />
            <img src={eye} alt="" height="15px" width="15px" onClick={showPassword} />
        </div>

    )
}
export default Refs4