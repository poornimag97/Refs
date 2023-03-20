import React,{useRef} from 'react'

const Refs2 = () => {
let h1Ref=useRef()
 let handleChange=()=>{
    h1Ref.current.style.color="red"
 }


  return (
    <>
    <h1 ref={h1Ref}>App component</h1>
    <button onClick={handleChange}>change</button>
    </>
  )
}

export default Refs2