import React from "react";
import { Component,createRef } from "react";


class Rafs1 extends Component{
    constructor(){
        super()
        this.state={
            company:"QSPIDERS"
        }
        this.spanRef=createRef()
        this.btnRef=createRef()
    }
    render(){
        return(
            <div>
                <span ref={this.spanRef}>{this.state.company}</span>
                <br />
                <button ref={this.btnRef}onClick={()=>{
                    this.setState({company:"JSPIDERS"})
                    this.spanRef.current.style.color="orange"
                    this.spanRef.current.style.border="2px solid black"
                    this.spanRef.current.style.padding="2px"
                    this.spanRef.current.style.margin="20px"
                    this.btnRef.current.style.color="red"
                    this.btnRef.current.style.backgroundcolor="black"
                    this.btnRef.current.style.borderRadius="25%"
      }  }>Change company </button>
            </div>
        )
    }
}
export default Rafs1