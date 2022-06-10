import React, { Component } from 'react'
import List from './components/listitem/listitem';
import Additem from './components/additem/additem';
import './index.css'


class App extends Component {
  state={
    items:[
      {id:1,name:"ahmed",age:12},
      {id:2,name:"mohamed",age:21},
      {id:3,name:"salama",age:20}
    ]
  }
  delet= (id)=>
{
  let item=this.state.items;
  let i =item.findIndex(it=>it.id===id)
  item.splice(i,1)
  this.setState({
    items:item
  })
}
additem=(item)=>
{
 item.id=Math.random()
 let items=this.state.items
 items.push(item)
 this.setState({items})

}
  render(){
  return (
    <div className="App">
      <h1 className="text-center">todo list</h1>
<List item={this.state.items} delett={this.delet}/>
<Additem add={this.additem}/>
    </div>
  );
}
}

export default App;
