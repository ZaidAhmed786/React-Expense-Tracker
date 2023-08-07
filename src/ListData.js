import React from 'react'
import "./App.css";

function Items({transObj}){
    
    return (
        <>
        <li>
        <span>{transObj.newDesc}</span>
        <span>RS{transObj.newAmount}</span>
        {/* <button  onClick={()=>handleDeleteClick(ind)}>delete</button> */}
        </li>
        </>
      )
}
const ListData = ({transObj}) => {
    console.log(transObj)
return(
    <>
         <ul className="trnsaction-list">
          {transObj.map((transObj) => {
            return <Items transObj={transObj} key={transObj.id} />
          })}
        </ul>
    </>
)
  
}

export default ListData