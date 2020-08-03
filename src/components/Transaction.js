import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext';


export const Transaction = ({transaction}) => {
    const {DeleteTransaction} = useContext(GlobalContext)
    console.log(DeleteTransaction)
    let sign = transaction.amount>0?'+':'-'

    return (
        <div>
        <li key={transaction.id} className={transaction.amount>0?'plus':'minus'}>
        {  transaction.text }<span>{sign}${Math.abs(transaction.amount)}</span><button onClick={()=>DeleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li> 
        </div>
    )
}
