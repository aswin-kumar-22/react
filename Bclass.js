import React,{Component} from "react";

class Bclass extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <p>class based Component</p>
            <p>{this.props.name}</p>
            </>
        )
    }
}

export default Bclass

