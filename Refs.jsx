import React from "react";
import { Component,createRef } from "react";

class Refs extends Component{
constructor()
{
    super()
    this.state={
        name:"Hello World"}
        this.h1Ref=createRef()
    }
componentDidMount()
{
    let h1=document.querySelector('h1')
    console.log(h1,"DOM way");
    console.log(this.h1Ref.current,"REACT WAY");
}
render()
{
    return(
        <>
      <h1 ref={this.h1Ref}>{this.state.name}</h1>
        </>
    )
}
}
export default Refs;