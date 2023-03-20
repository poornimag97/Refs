import React,{useState,useRef} from 'react'
import IMG from "./img.jpg";

const Refs3 = () => {
    let[photo,setPhoto]=useState(IMG)
    let[loading,setLoading]=useState(true)
     let ImgRef=useRef()
    let handleChange=()=>{
    if(loading===true)
    {
   setLoading(!true)
  ImgRef.current.style.borderRadius="25%"
ImgRef.current.style.border="2px solid black"
    }
    else{
        setLoading(!false)
        ImgRef.current.style.borderRadius="0"
        ImgRef.current.style.border="none"
    }
}
  return (
    <div>
    <img src={photo} alt="nature" ref={ImgRef} height="200px" width={"100px"}/> 
    <button onClick={handleChange}>{loading?"ON":"OFF"}</button>
    </div>
      )
}

export default Refs3