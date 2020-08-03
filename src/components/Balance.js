import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  useEffect(() => {
    let initialbalance=0
   for(let i=0;i<transactions.length;i++){
      initialbalance+= transactions[i].amount
     
   }
   setBalance(initialbalance)

  }, [transactions]);


  const [balance, setBalance] = useState(0);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${balance}.00</h1>
    </>
  );
};
