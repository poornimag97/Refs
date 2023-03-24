import React,{useState,useRef} from "react";
import VIDEO from "./video.mp4"
const Refs5=()=>
{
let [video ,setVideo]=useState(VIDEO)
let[loading,setLoading]=useState(false)
let videoRef=useRef()

let playorPause=()=>{
    if(!loading)
    {
     setLoading(true)
      videoRef.current.play()
    }
    else{
        setLoading(false)
        videoRef.current.pause()
    }
}
return(
<div>
    <video src={video} onClick={playorPause} ref={videoRef}></video>
</div>
)
}
export default Refs5