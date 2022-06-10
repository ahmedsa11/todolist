import React from"react"
const List = (props)=>
{
    const {item,delett}=props;
    let length=item.length
    const listitem=length ?(item.map(itt=>
        {
            return(
                <div key={itt.id}>
                    <span className="name" >name : {itt.name}</span>
                    <span className="age">name : {itt.age}</span>
                    <span className="action icon" onClick={()=> delett(itt.id)}>&times;</span>
                </div>
            )
        })):
        (<p>noooooooooooooooooooooooooooooooooooooo</p>)
    return(
    <div className="list">
<div>
<span className="name title">name</span>
<span className="age title">age</span>
<span className="action title">action</span>
</div>
{listitem}
 </div>
    );
}
export default List