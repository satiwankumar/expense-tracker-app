import React,{useContext} from 'react'
import {Transaction} from './Transaction'
import {GlobalContext } from '../context/GlobalContext'
export const Transactions = () => {

    const {transactions}  = useContext(GlobalContext)
    console.log(transactions)

    return (
        <div>
        <h3>History</h3>
        <ul id="list" className="list">
           {transactions.map(transaction=> <Transaction key={transaction.id} transaction={transaction}/>)}
        </ul>
        </div>
    )
}
