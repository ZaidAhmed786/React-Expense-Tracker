import React,{useContext , useState} from 'react'
import "./Home.css"
import {TransactionContext} from "./transContext" 

const Home = () => {
    let {transaction , addTrans} = useContext(TransactionContext)
    let [newDesc, setNewDesc] = useState("")
    let [newAmount, setNewAmount] = useState(0)
    

    
    const handleAddition = (event)=>{
        event.preventDefault();
        if(Number(newAmount) === 0){
        alert("please enter correct numbers")
        return false;
    }
     addTrans({
        amount : Number(newAmount),
        desc : newDesc
     })
    }

    const getIncome = () => {
        let income  = 0 ;
        for(var i = 0 ; i < transaction.length ; i++) {
            
            if(transaction[i].amount > 0)
            income = income +  transaction[i].amount
            }
            return income;
    }
    const getExpense = () => {
        let expense  = 0 
        for(var i=0 ; i < transaction.length ; i++){
            
            if(transaction[i].amount < 0)
            expense += transaction[i].amount
            console.log(expense)
            }
            return expense;
            
    }
    
     
  return (
    <>
    <div className='main'>
        <h2 className='text-center'>Expence Tracker</h2>
        <h4 className='text-center'>YOUR BALANCE <br/> $205.00 </h4>
        <div className='exp-container'>
        <h4 >INCOME <br/> {getIncome()} </h4>
        <h4 >EXPENCE <br/> {getExpense()} </h4>
        </div>
        <h3>History</h3>
        <hr/>

        <ul className='todo'>
            {
                transaction.map((obj , index)=>{
                    return(
                        <li key = {index}>
                           <span>{obj.desc}</span>
                           <span>{obj.amount}</span>
                           
                         </li>
                    )
                })
            }
                
                
                
            
        </ul>

        <h3>Add new transaction</h3>
        <hr/>

        <form className='trans-form' onSubmit={handleAddition}>
            <label>
                Enter Description <br/>
                <input type="text" onChange={(e)=> setNewDesc(e.target.value)} required/>
            </label>
            <br/>
            <label>
                Enter Amount <br/>
                <input type="number" onChange={(e)=>setNewAmount(e.target.value)} required/>
            </label>
            <br/>
            <input type="submit" value="Add Trans"/>
        </form>
    </div>
       
     
    </>
  )
}

export default Home