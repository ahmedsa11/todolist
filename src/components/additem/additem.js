import { Component } from "react";

class Additem extends Component{
state={
    name:'',
    age:''
}
handelchange=(e)=>
{
this.setState({
    [e.target.id]:e.target.value
})
}
handelsubmit=(e)=>
{
    e.preventDefault();
    if(e.target.name.value === '' && e.target.age.value===''){
        return false
    }
    else{
        this.props.add(this.state)
        this.setState({
            name:''
            ,age:''
        })
    }
}
    render(){
        return(
            <form onSubmit={this.handelsubmit}>
                <input type="text" placeholder="enter your name" id="name" onChange={this.handelchange} value={this.state.name}/>
                <input type="number" placeholder="enter your age" id="age"onChange={this.handelchange}value={this.state.age}/>
                <input type="submit"/>
            </form>
        )
    }
}
export default Additem