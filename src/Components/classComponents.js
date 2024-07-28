import React from "react";

class FirstClassComponent extends React.Component{

    constructor(){
        super();
        this.state={name:"besant",flag:true}
    }

    componentDidMount(){
        console.log("mounted");
        // alert("this is class")
    }
    componentDidUpdate(){
        if(this.state.flag){
        console.log("updated");
        }
    }
    render(){
        var a="hello"
        return(
            <div>
                <h1>{a} This is First Class Component {this.state.name}</h1>
                <button onClick={()=>{this.setState({flag:false})}}>Update flag</button>
                <input value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}></input>
                {this.state.flag && <SecondClassComponent a={a}/>}
            </div>
        )
    }
}

class SecondClassComponent extends React.Component{
    componentWillUnmount(){
        alert("component is unmounting")
        console.log("component is getting deleted");
    }
    render(){
        return(
            <div>
                <h1>{this.props.a} This is Second Class Component</h1>
            </div>
        )
    }
}

export default FirstClassComponent