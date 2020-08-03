import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export const AddTransaction = () => {
  const { AddTransaction } = useContext(GlobalContext);

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    let id=0
    let newtransaction = {
     id: Math.floor(Math.random() * 10000000),
     
      text,
      amount: +amount,
    };
   
    AddTransaction(newtransaction);
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmit} >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
