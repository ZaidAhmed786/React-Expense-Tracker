import React from 'react'
import "./Home.css"

const Home = () => {
    const Objarray = [
        { desc : "Cash", amount : "500"},
        { desc : "book", amount : "-200"},
        { desc : "car", amount : "-600"},
    ]
  return (
    <>
    <div className='main'>
        <h2 className='text-center'>Expence Tracker</h2>
        <h4 className='text-center'>YOUR BALANCE <br/> $205.00 </h4>
        <div className='exp-container'>
        <h4 >INVOICE <br/> $55.00 </h4>
        <h4 >EXPENCE <br/> $105.00 </h4>
        </div>
        <h3>History</h3>
        <hr/>

        <ul className='todo'>
            {
                Objarray.map((obj , index)=>{
                    return(
                        <li>
                           <span>{obj.desc}</span>
                           <span>{obj.amount}</span>
                         </li>
                    )
                })
            }
                
                
                
            
        </ul>

        <h3>Add new transaction</h3>
        <hr/>

        <form className='trans-form'>
            <label>
                Enter Description <br/>
                <input type="text"/>
            </label>
            <br/>
            <label>
                Enter Amount <br/>
                <input type="text"/>
            </label>
            <br/>
            <input type="submit" value="Add Trans"/>
        </form>
    </div>
       
     
    </>
  )
}

export default Home