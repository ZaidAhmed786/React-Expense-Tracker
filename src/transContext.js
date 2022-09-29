import React , {createContext ,useReducer} from 'react'
import {TransReducer} from "./transReducer"

const trans = [
    
]

export const TransactionContext = createContext(trans)

export const TransProvider = ({children})=>{
    let [state , dispatch] = useReducer(TransReducer , trans)

    function addTrans (transObj){
        dispatch({
            type : "ADD_TRANSACTION",
            payload: {
                amount : transObj.amount,
                desc: transObj.desc 


            },

        })

        

    }
    return(
    <TransactionContext.Provider value = {{
        transaction : state,
        addTrans

    }}>
        {children}
    </TransactionContext.Provider>
    )
}

