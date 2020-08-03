import React,{useContext} from 'react'

import {GlobalContext} from '../context/GlobalContext'


export const IncomeExpense = () => {
    const {transactions}= useContext(GlobalContext)
    
    let amounts = transactions.map(transaction=>transaction.amount)
 
    let income = amounts.filter(amount=>amount>0)

    let TotalIcome = income.reduce((acc,item)=>(acc+=item),0).toFixed(2)
    

    let Expenses = amounts.filter(amount=>amount<0)

    let TotalExpenses = Expenses.reduce((acc,item)=>(acc+=item),0).toFixed(2)
    


    return (
        <>
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+${TotalIcome}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-${TotalExpenses}</p>
        </div>
      </div>  
        </>
    )
}
